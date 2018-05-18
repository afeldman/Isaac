'use strict';

function setcolor(items){
    let item;
    for (var i = 0; i <= items.length; i++){
	item = items[i];
	try {
	    if(item.content.startsWith('R E S E T')){
		item.className = 'green';
	    }
	    if(item.content.startsWith('SYST')){
		item.className = 'red';
	    }
	    if(item.content.startsWith('INTP')){
		item.className = 'magenta';
	    }
	    if(item.content.startsWith('SRVO')){
		item.className = 'orange';
	    }
	}catch (e){
	    continue;
	}
    }

    return items;
};
