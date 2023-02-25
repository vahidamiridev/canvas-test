
var img_ele = null,
x_cursor = 0,
y_cursor = 0,
x_img_ele = 0,
y_img_ele = 0;

function zoom(zoomincrement) {
  
img_ele = document.getElementById('drag-img');
console.log(document.getElementById('hello').offsetHeight)
console.log(document.getElementById('hello').offsetWidth)
var pre_width = img_ele.getBoundingClientRect().width, pre_height = img_ele.getBoundingClientRect().height;
img_ele.style.width = (pre_width * zoomincrement) + 'px';
img_ele.style.height = (pre_height * zoomincrement) + 'px';
img_ele = null;
}

document.getElementById('zoomout').addEventListener('click', function() {
zoom(0.5);
});
document.getElementById('zoomin').addEventListener('click', function() {
zoom(1.5);
});

function start_drag() {
img_ele = this;
x_img_ele = window.event.clientX - document.getElementById('drag-img').offsetLeft;
y_img_ele = window.event.clientY - document.getElementById('drag-img').offsetTop;
}

function stop_drag() {
img_ele = null;
}

function while_drag() {
var x_cursor = window.event.clientX;
var y_cursor = window.event.clientY;
if (img_ele !== null) {
  img_ele.style.left = (x_cursor - x_img_ele) + 'px';
  img_ele.style.top = ( window.event.clientY - y_img_ele) + 'px';
}
}

document.getElementById('drag-img').addEventListener('mousedown', start_drag);
document.getElementById('container').addEventListener('mousemove', while_drag);
document.getElementById('container').addEventListener('mouseup', stop_drag);


// document.getElementById('test').addEventListener('click', function(){
//   img_ele = document.getElementById('drag-img');
// var pre_width = img_ele.getBoundingClientRect().width, pre_height = img_ele.getBoundingClientRect().height;
// console.log(pre_width)
// console.log(pre_height)
// })