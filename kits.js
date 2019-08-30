var kits = {};

// 1.数字前加0
// exp: kits.addZero(02) => '2';
kits.addZero = function(date) {
  date = date >= 10 ? date : "0" + date;
  return date;
};

// 2.获取实时时间
//exp: 2019-08-20 19:50:16
kits.getTime = function() {
  var time = new Date();
  var year = time.getFullYear();
  var month = kits.addZero(time.getMonth() + 1);
  var day = kits.addZero(time.getDate());
  var hour = kits.addZero(time.getHours());
  var min = kits.addZero(time.getMinutes());
  var sec = kits.addZero(time.getSeconds());
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
};

// 3.获取从n到m的随机数
//exp: kits.randomNum(1,100) => 1-100随机一个整数
kits.randomNum = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};

// 4.获取随机ID
//exp: kits.randomId(1,100) => 1970年至今毫秒数拼接1-100随机一个整数
kits.randomId = function(n, m) {
  var time = new Date();
  time = time.getTime();
  var num = kits.randomNum(n, m);
  var result = time + "" + num;
  return result;
};

// 5.获取随机颜色 rgb模式
//exp: rgb(21,45,164)
kits.randomRgbColor = function() {
  var r = kits.randomNum(0, 255);
  var g = kits.randomNum(0, 255);
  var b = kits.randomNum(0, 255);
  // console.log(r, g, b);
  return "rgb(" + r + "," + g + "," + b + ")";
};

// 6.获取随机颜色 hex模式
//exp: #9cbebe
kits.randomHexColor = function() {
  var n = ((Math.random() * 0xfffff) | 0).toString(16);
  var result =
    "#" + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
  return result;
};

// 7.从localStorage里面根据指定的键(key)获取一个数组 未验证
kits.getLocalDataArray = function(key) {
  var data = localStorage.getItem(key);
  var arr = JSON.parse(data);
  arr = arr || [];
  return arr;
};

// 8.将一个数组(arr)以指定的键(key)存储到localStorage里面 未验证
kits.saveLocalDataArray = function(key, arr) {
  var data = JSON.stringify(arr);
  localStorage.setItem(key, data);
};

// 9.根据对应的id从localStorage中指定键(key)的数组中删除一条数据 未验证
kits.deleteLocalDataById = function(key, id) {
  var data = localStorage.getItem(key);
  var arr = JSON.parse(data);
  arr = arr || [];
  arr.forEach(function(e, i) {
    if (e.id == id) {
      arr.splice(i, 1);
    }
  });
  data = JSON.stringify(arr);
  localStorage.setItem(key, data);
};

// 10.根据id修改localStorage里面的指定键(key)的数组数据  未验证
kits.modifyLocalDataById = function(key, id, datas) {
  var data = localStorage.getItem(key);
  var arr = JSON.parse(data);
  arr = arr || [];
  arr.forEach(function(e, i) {
    if (e.id == id) {
      e = datas;
    }
  });
  data = JSON.stringify(arr);
  localStorage.setItem(key, data);
};
