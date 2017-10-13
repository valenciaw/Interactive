(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphBar');
var graphnode = element.node();


var graphTitle = "Hours I listen to my favorite artist";

var data1 = {
  name: 'Red Title',
  x: ['SZA', 'Tyler,The Creator', 'Tame Impala', 'Frank Ocean', 'Kali Uchis'],
  y: [30, 30, 15, 20, 10],
  type: 'bar',
  marker: {
    color: ['salmon', 'lime', 'lightblue','#ffad3a', '#ff00cb'],
    line: {
        width: 2.5
    } 
  }
};

Plotly.plot(graphnode, [data1], {
    title: graphTitle,
    font: {
        size: 16
    }
},
{
  displayModeBar: false
});

//this part make sure every window resize it also resizes the graph
window.addEventListener('resize', function(event){
    Plotly.Plots.resize(graphnode);
});

})();