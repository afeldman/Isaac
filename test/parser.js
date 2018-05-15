"use strict";

var parser = require('../lib/parser/parser');

var par = new parser('test_data/ERRALL.LS',{});

console.log(par.getDataSet());
