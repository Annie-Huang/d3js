// console.log(d3);

const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];

// give us the same width for all the bar
const xScale = d3
    .scaleBand()
    .domain(DUMMY_DATA.map(dataPoint => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);
// The rangeRound needs to reverse for yScale so it can start from the bottom of the container rather than from the top
const yScale = d3.scaleLinear().domain([0, 15]).rangeRound([200, 0]);


// d3.select('div')
//     .selectAll('p')
//     .data([1,2,3])
//     .enter()
//     .append('p')
//     .text(dta => dta);

// d3.select('div')
//     .selectAll('p')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('p')
//     .text(dta => dta.region);

// const container = d3.select('div')
//     .classed('container', true)
//     .style('border', '1px solid red');
//
// const bars = container
//     .selectAll('.bar')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('div')
//     .classed('bar', true)
//     .style('width', '50px')  // Total width of the container is 250px and we have 4 data points.
//     // .style('height', '150px');
//     .style('height', data => (data.value * 15) + 'px'  );


const container = d3.select('svg')
    .classed('container', true);

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())  // Total width of the container is 250px and we have 4 data points.
    .attr('height', data => yScale(data.value))
    .attr('x', data => xScale(data.region));

