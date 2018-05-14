var moment = require('moment');

var vis = require('vis');
var options = {};
var data_set = new vis.DataSet(options);

function split_in(line,seperator){
    if (seperator == null){
	seperator = '"';
    }

    var data = null;
    
    try{
	data = line.split(seperator);
    }catch(e){
	console.error(line);
    }

    return data;
}

exports.parse = function(line){
    var data = split_in(line,null);

    if ( data != null){

	var _id = Number(data[0])

	if ( (_id != 0) && !isNaN(_id)){

	    var tmp_date = new Date(data[1].trim());
	    
	    var _start = moment(tmp_date.toISOString());
	    var _end = moment(tmp_date.toISOString()).add( {seconds: 1} );
	    
	    data_set.add( {id: _id,
			   start: _start,
			   end: _end,
			   content: data[2].trim(),
			   add_info1: data[3].trim(),
			   add_info2: data[4].trim(),
			   add_info3: data[5].trim()} );
	}
    }

    console.log(data_set);
}
