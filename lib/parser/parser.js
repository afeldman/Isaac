function split_in(line,seperator){
    if (seperator == null){
	seperator = '"';
    }

    let data;
    
    try{
	data = line.split(seperator);
    }catch(e){
	console.error(line);
    }

    return data;
}
