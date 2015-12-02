/**
 * Created by psmit on 9/2/2015.
 */
define([
        'angularAMD'],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('control', [

            function() {
                return {
                    restrict: 'E',
                    scope: {},
                    template:   '<div class="control"></div>',
                    replace: true,
                    link: function (scope, element, attributes) {
                        /**
                         * outside
                         */
                        var layout = [
                                {
                                    index: 0,
                                    radius: 25,
                                    top: 150,
                                    left: 150
                                }, {
                                    index: 1,
                                    radius: 15,
                                    top: 175,
                                    left: 250
                                }, {
                                    index: 2,
                                    radius: 25,
                                    top: 150,
                                    left: 350
                                },

                                {
                                    index: 3,
                                    radius: 15,
                                    top: 250,
                                    left: 60
                                }, {
                                    index: 4,
                                    radius: 25,
                                    top: 250,
                                    left: 150
                                }, {
                                    index: 5,
                                    radius: 40,
                                    top: 250,
                                    left: 250
                                }, {
                                    index: 6,
                                    radius: 25,
                                    top: 250,
                                    left: 350
                                }, {
                                    index: 7,
                                    radius: 15,
                                    top: 250,
                                    left: 440
                                },

                                {
                                    index: 8,
                                    radius: 25,
                                    top: 350,
                                    left: 150
                                }, {
                                    index: 9,
                                    radius: 15,
                                    top: 325,
                                    left: 250
                                }, {
                                    index: 10,
                                    radius: 25,
                                    top: 350,
                                    left: 350
                                }
                            ],
                            item_associations = [
                                {
                                    startIndex: 0,
                                    endIndex: 1
                                },  {
                                    startIndex: 3,
                                    endIndex: 0
                                },  {
                                    startIndex: 3,
                                    endIndex: 4
                                },  {
                                    startIndex: 4,
                                    endIndex: 0
                                }, {
                                    startIndex: 4,
                                    endIndex: 5
                                }, {
                                    startIndex: 5,
                                    endIndex: 0
                                }, {
                                    startIndex: 5,
                                    endIndex: 1
                                }, {
                                    startIndex: 5,
                                    endIndex: 6
                                }, {
                                    startIndex: 5,
                                    endIndex: 2
                                }, {
                                    startIndex: 6,
                                    endIndex: 2
                                }, {
                                    startIndex: 6,
                                    endIndex: 7
                                }, {
                                    startIndex: 7,
                                    endIndex: 2
                                }, {
                                    startIndex: 8,
                                    endIndex: 3
                                }, {
                                    startIndex: 8,
                                    endIndex: 4
                                }, {
                                    startIndex: 8,
                                    endIndex: 5
                                }, {
                                    startIndex: 9,
                                    endIndex: 5
                                }, {
                                    startIndex: 9,
                                    endIndex: 10
                                }, {
                                    startIndex: 10,
                                    endIndex: 5
                                }, {
                                    startIndex: 10,
                                    endIndex: 6
                                }, {
                                    startIndex: 10,
                                    endIndex: 7
                                }
                            ],
                            touchDown = false,
                            lastEnter = null,
                            touchPoints = null;

                        /**
                         * @static
                         */
                        var WIDTH = 500,
                            HEIGHT = 500;

                        /**
                         * @private
                         */
                        var control = element.find('.control'),
                            svg,
                            associations,
                            highlights,
                            targets;

                        var buildControls = function() {
                            svg = d3.select(element[0])
                                .append("svg")
                                .attr("class", "chart")
                                .attr("width", WIDTH)
                                .attr("height", HEIGHT)
                                .on('mouseup', touchEnd);

                            //draw association lines
                            associations = svg.selectAll()
                                .data(item_associations)
                                .enter()
                                .append('line')
                                .attr("stroke-width", 1)
                                .attr("stroke", "black")
                                .attr('x1', function(d) {
                                    return _.find(layout, {index: d.startIndex}).left;
                                })
                                .attr('x2', function(d) {
                                    return _.find(layout, {index: d.endIndex}).left;
                                })
                                .attr('y1', function(d) {
                                    return _.find(layout, {index: d.startIndex}).top;
                                })
                                .attr('y2', function(d) {
                                    return _.find(layout, {index: d.endIndex}).top;
                                });

                            //create highlights container
                            highlights = svg.append('g');

                            //draw touch targets
                            targets = svg.selectAll()
                                .data(layout)
                                .enter()
                                .append('circle')
                                .attr('r', function(d) {
                                    return d.radius;
                                })
                                .attr("cy", function(d) {
                                    return d.top;
                                })
                                .attr("cx", function(d) {
                                    return d.left
                                })
                                .style('fill', 'white')
                                .style('stroke', 'black')
                                .on('mousedown', touchStart)
                                .on('mouseenter', touchEnter)
                                .on('touchstart', touchStart)
                                .on('touchenter', touchEnter);
                        };

                        var touchStart = function(d) {
                            touchDown = true;
                            lastEnter = d;
                            touchPoints = [];

                            //initial circle highlight
                            highlights
                                .append('circle')
                                .attr('class', 'highlight')
                                .attr('r', function(d) {
                                    return lastEnter.radius + 2;
                                })
                                .attr("cy", function(d) {
                                    return lastEnter.top;
                                })
                                .attr("cx", function(d) {
                                    return lastEnter.left
                                })
                                .style('fill', 'white')
                                .style('stroke', 'blue')
                                .style('stroke-width', 3);

                            touchPoints.push(d.index);
                        };

                        var touchEnter = function(d) {
                            if(!touchDown)
                                return;

                            var currentEnter = d;

                            //lookup in associations
                            var last = _.find(item_associations, {startIndex: lastEnter.index, endIndex: currentEnter.index});
                            last = last ? last : _.find(item_associations, {startIndex: currentEnter.index, endIndex: lastEnter.index});

                            //couldn't find association. bail
                            if(!last) {
                                resetState();
                                removeHighlights();

                                return;
                            }

                            //line highlights
                            highlights
                                .append('line')
                                .attr('class', 'highlight')
                                .attr("stroke-width", 2)
                                .attr("stroke", "red")
                                .attr('x1', function(d) {
                                    return lastEnter.left;
                                })
                                .attr('x2', function(d) {
                                    return currentEnter.left;
                                })
                                .attr('y1', function(d) {
                                    return lastEnter.top;
                                })
                                .attr('y2', function(d) {
                                    return currentEnter.top;
                                });

                            //circle highlights
                            highlights
                                .append('circle')
                                .attr('class', 'highlight')
                                .attr('r', function(d) {
                                    return currentEnter.radius + 2;
                                })
                                .attr("cy", function(d) {
                                    return currentEnter.top;
                                })
                                .attr("cx", function(d) {
                                    return currentEnter.left
                                })
                                .style('fill', 'white')
                                .style('stroke', 'blue')
                                .style('stroke-width', 3);

                            touchPoints.push(currentEnter.index);

                            lastEnter = currentEnter;
                        };

                        var touchEnd = function(d) {
                            console.log('touchEnd::touchPoints: ', touchPoints);

                            resetState();
                            removeHighlights();
                        };

                        var resetState = function() {
                            touchDown = false;
                            lastEnter = null;
                            touchPoints = null;
                        };

                        var removeHighlights = function() {
                            highlights
                                .selectAll('.highlight')
                                .remove();
                        };

                        /**
                         * @constructor
                         */
                        (function() {
                            console.log('control.directive::constructor');

                            buildControls();
                        }())
                    }
                }
            }
        ])
    }
);