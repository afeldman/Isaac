let $ = require("jquery");
let parser = require('./js/parser/parser');
var par = null;

function createTimeLine(filename){
    par = new parser(filename);
    var items = new vis.DataSet(setcolor(par.getDataSet()));
    
    $("#visualization").html("");
    
    var container = document.getElementById('visualization');		      
    var options = {height: "500px",
		   editable: false,
		   selectable: true};
	
    
    // Create the timeline!
    var timeline = new vis.Timeline(container, items, options);
    
    timeline.on('doubleClick', function(properties){
	getNode(properties.item);
    });
    
    items.on('*', function (event, properties) {
	console.log('properties=' + JSON.stringify(properties));
    });
}

function getNode(id){
    let result = par.getDataSet().find(function(element) {
         return element.id == id;
    });
    
    $('#id').html("id:\t\t"+result.id);
    $('#content').html("content info:\t" + result.content);
    $('#info').html("additional info:" + result.add_info1 + "\n" +
		    result.add_info2 + "\n" +
		    result.add_info3);
    $('#time').html("event time:\t" + result.start.toISOString());
}
