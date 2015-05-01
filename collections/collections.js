//
// Part 1
//
var liList = document.getElementsByTagName('li');
for(var i = 0; i < liList.length; i++){
    liList[i].style.borderBottom = 'thin dotted red';
};
//
// Part 2
//
var redMaker = document.getElementsByClassName('datatype');
for(var i = 0; i < redMaker.length; i++){
    redMaker[i].style.color = 'red';
};

//
// Part 3
//
var blueMaker = document.querySelectorAll('li.function');
for(var i = 0; i < blueMaker.length; i++){
    blueMaker[i].style.color = 'blue';
};