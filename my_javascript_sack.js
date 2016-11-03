//optional parameter
function getRand(numberSet){
	if (typeof optionalArg === 'undefined') { optionalArg = 'default'; } //optonal parameter
};

//two dimensional array //tuts
function setMatrix(row,column){
	var myarray = new Array(row);
	for (i=0; i <row; i++){myarray[i]=new Array(column);}
};

//array min prototype
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

//array max prototype
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

//array swap prototype
Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

//two arrays compare and remove duplicates
function removeDuplicates(array1,array2){
	array1 = array1.filter(function(val) {
	  return array2.indexOf(val) == -1;
	});
};
