// Your code here
//prob 1
	var alertC = document.getElementById('clicker');
	alertC.addEventListener('click' , function (event){
    alert('clicked');
});
//prob 2
	var bg = document.getElementById('mouser');
	bg.addEventListener('mouseover' , function (event){
    bg.style.backgroundColor = 'red'	
});
//prob 3
	var bg = document.getElementById('mouser');
	bg.addEventListener('mouseout' , function (event){
    bg.style.backgroundColor = 'red'	
});

//prob 4 
var submitInput = document.querySelector('input')
var submitter = document.getElementById('former');
	submitter.addEventListener('submit' , function (event){
    event.preventDefault();
    alert(submitInput.value);
});
