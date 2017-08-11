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
  },
  encodeData: function (data) {
    var params = Object.keys(data).map(function (key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
    return params + '&key=' + APIKey;
  },
  postData: function (post, url, success, error) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var res = JSON.parse(xmlhttp.responseText);
        if (res.OK) {
          success(res);
        } else {
          error(res);
        }
      } else {
        if (!!xmlhttp.responseText) {
          var res = JSON.parse(xmlhttp.responseText);
          console.log(res);
        }
      }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(post));
  },
  setWindowBlur: function () {
    window.onblur = function () {
      window.blurred = true;
    };
    window.onfocus = function () {
      window.blurred = false;
    };
  },
  imgModal: function () {
    var btnlist = document.getElementsByClassName('img-modal-btn');
    var panel = document.getElementsByClassName('modal-panel')[0];
    for (var i = 0; i < btnlist.length; i++) {
      var btn = btnlist[i];
      btn.addEventListener('click', function () {
        var img = new Image();
        img.src = this.dataset.src;
        img.classList.add('img-responsive');
        panel.appendChild(img);
      });
    }
  }

}


