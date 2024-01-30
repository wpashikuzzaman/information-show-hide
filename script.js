var subHeadingTextChange = document.getElementById('subheading');
var passInputField = document.getElementById('inputfield');
var showPassBtn = document.getElementById('showPass');
var hidePassBtn = document.getElementById('hidePass');
var infoClear = document.getElementById('clear');

passInputField.addEventListener('input', function(){
    subHeadingTextChange.innerText = "Input Field Is Working";
});

showPassBtn.addEventListener('click', function(){
    passInputField.type = 'text';
    passInputField.style.backgroundColor = '#1F1F1F';
    passInputField.style.color = '#fff';
});

hidePassBtn.addEventListener('click', function(){
    passInputField.type = 'password';
    passInputField.style.backgroundColor = '';
    passInputField.style.color = '#000';
});

infoClear.addEventListener('click', function(){
    passInputField.value = ''; // Clear the input field
    subHeadingTextChange.innerText = "Input Field Cleared";
});