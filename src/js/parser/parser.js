var moment = require('moment');

class Parser{
    constructor(file){
	this.file = file;
	this.data_set = [];
	this.parseFile();
    }

    parseFile(){
	var fs = require('fs');
	var data = fs.readFileSync(this.file, 'utf8');

	data = data.split("\n");

	for (var i = 0, len = data.length; i < len; i++) {
	    this.addElement(data[i]);
	}
	
    }

    getDataSet(){
	return this.data_set;
    }

    addElement(line){
	var data = null;
	
	try{
	    data = line.split('"');
	}catch(e){
	    console.error(line);
	}
	
	if ( data != null){

	    var _id = Number(data[0]);

	    if ( (_id != 0) && !isNaN(_id)){

		var tmp_date = new Date(data[1].trim());

		var _start = moment(tmp_date.toISOString());

		this.data_set.push( {id: _id,
				    start: _start,
				    content: data[2].trim(),
				    add_info1: data[3].trim(),
				    add_info2: data[4].trim(),
				    add_info3: data[5].trim()} );
	    }
	}
    }
}

module.exports = Parser;
