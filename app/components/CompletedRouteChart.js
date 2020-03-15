import React from 'react';
import * as d3 from 'd3';

class CompletedRouteChart extends React.Component {
  constructor() {
    super();
    this.gradeNumber = this.gradeNumber.bind(this);
  }
  gradeNumber(grade) {
    return grade === 'VB' ? 0 : Number(grade.replace(/V/, ''));
  }
  componentDidMount() {
    const {
      props: { completedRoutes },
      gradeNumber
    } = this;
    console.log('CHART DATA ', completedRoutes);
    const data = completedRoutes;
    const width = 210;

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => gradeNumber(d.grade) + 1)])
      .range([0, width]);

    const y = d3
      .scaleBand()
      .domain(data.map(d => d.id))
      .range([0, 20 * data.length]);

    const svg = d3
      .select('#completed-route-chart')
      .attr('width', width)
      .attr('height', y.range()[1])
      .attr('font-family', 'sans-serif')
      .attr('font-size', '10')
      .attr('text-anchor', 'end');

    const bar = svg
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', d => `translate(0,${y(d.id)})`);

    bar
      .append('rect')
      .attr('fill', 'steelblue')
      .attr('width', d => x(gradeNumber(d.grade) + 1))
      .attr('height', y.bandwidth() - 1);

    bar
      .append('text')
      .attr('fill', 'white')
      .attr('x', d => x(gradeNumber(d.grade) + 1) - 3)
      .attr('y', y.bandwidth() / 2)
      .attr('dy', '0.35em')
      .text(d => d.grade);
  }
  render() {
    return <svg id="completed-route-chart" />;
  }
}

export default CompletedRouteChart;
