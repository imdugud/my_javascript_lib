//array min prototype
Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

//array max prototype
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

//array swap prototype
UTILS = {
  swap: function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
  },
  //two arrays compare and remove duplicates
  removeDuplicates: function (array1, array2) {
    array1 = array1.filter(function (val) {
      return array2.indexOf(val) == -1;
    });
  },
  randomIntFromInterval: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  setWindowBlur: function () {
    window.onblur = function () {
      window.blurred = true;
    };
    window.onfocus = function () {
      window.blurred = false;
    };
  },
  factorial: function (n) {
    if (n === 0) {
      return 1;
    }

    // This is it! Recursion!!
    return n * UTILS.factorial(n - 1);
  },
  //two dimensional array //tuts
  setMatrix: function (row, column) {
    var myarray = new Array(row);
    for (i = 0; i < row; i++) {
      myarray[i] = new Array(column);
    }
  }
}




