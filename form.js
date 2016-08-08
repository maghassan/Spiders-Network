function formValidator(){
// Make quick references to our fields
var surname = document.getElementById('surname');
var firstname = document.getElementById('firstname');
var phoneno = document.getElementById('phoneno');
var email = document.getElementById('email');
var addr = document.getElementById('addr');
var address = document.getElementById('address');
var zip = document.getElementById('zip');
var city = document.getElementById('city');
var postalcode = document.getElementById('postalcode');
var state = document.getElementById('state');
var state = document.getElementById('state');
var dob = document.getElementById('dob');
var country = document.getElementById('country');
var tiles = document.getElementById('tiles');
// Check each input in the order that it appears in the form!
if(isAlphabet(surname, "DEAR USER, PLEASE ONLY LETTERS FOR YOUR SURNAME!!!")){
if(isAlphabet(firstname, "DEAR USER, PLEASE ONLY LETTERS FOR YOUR FISRTNAME!!!")){
if(isNumeric(phoneno, "DEAR USER, PLEASE ONLY NUMBERS FOR YOUR PHONE NUMBER !!!")){
if(emailValidator(email, "PLEASE TYPE A VALID EMAIL WITH .COM EXTENSION.")){
if(isAlphanumeric(addr, "HOME ADRESS AND NUMBER ONLY")){
if(madeSelection(state, "PLEASE, CHOOSE YOUR ORIGIN")){
if(madeSelection(dob, "PLEASE SELECT YOUR DATE OF BIRTH ")){
if(isAlphanumeric(address, "Numbers and Letters Only for Address")){
if(isNumeric(zip, "Please enter a valid zip code")){
if(isAlphabet(city, "Please enter only letters for your city")){
if(isNumeric(postalcode, "Please enter a valid postal code")){
if(madeSelection(country, "Please Choose a country")){
if(isNumeric(tiles, "Please enter a valid number of tiles")){
return true;
}
}
}
}
}
}
}
}
}
}
}
}
return false;
}
function notEmpty(elem, helperMsg){
if(elem.value.length == 0){
alert(helperMsg);
elem.focus(); // set the focus to this input
return false;
}
return true;
}
function isNumeric(elem, helperMsg){
var numericExpression = /^[0-9]+$/;
if(elem.value.match(numericExpression)){
return true;
}else{
alert(helperMsg);
elem.focus();
return false;
}
}
function emailValidator(elem, helperMsg){
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if(elem.value.match(emailExp)){
return true;
}else{
alert(helperMsg);
elem.focus();
return false;
}
}
function isAlphabet(elem, helperMsg){
var alphaExp = /^[a-zA-Z]+$/;
if(elem.value.match(alphaExp)){
return true;
}else{
alert(helperMsg);
elem.focus();
return false;
}
}
function isAlphanumeric(elem, helperMsg){
var alphaExp = /^[0-9a-zA-Z]+$/;
if(elem.value.match(alphaExp)){
return true;
}else{
alert(helperMsg);
elem.focus();
return false;
}
}
function lengthRestriction(elem, min, max){
var uInput = elem.value;
if(uInput.length >= min && uInput.length <= max){
return true;
}else{
alert("Please enter between " +min+ " and " +max+ " characters");
elem.focus();
return false;
}
}
function madeSelection(elem, helperMsg){
if(elem.value == "Please Choose"){
alert(helperMsg);
elem.focus();
return false;
}else{
return true;
}
}
}