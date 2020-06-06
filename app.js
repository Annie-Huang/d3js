// console.log(d3);

const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 11, region: 'India'},
    {id: 'd3', value: 12, region: 'China'},
    {id: 'd4', value: 6, region: 'Germany'},
];

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

const container = d3.select('div')
    .classed('container', true)
    .style('border', '1px solid red');

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')  // Total width of the container is 250px and we have 4 data points.
    // .style('height', '150px');
    .style('height', data => (data.value * 15) + 'px'  );
