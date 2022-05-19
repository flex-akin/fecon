

var el = document.getElementById('mumu');
if(el){
  el.addEventListener('click', generateUserId);
}


function generateUserId() {
 


 var state = document.getElementById('state').value
 //var state = "Borno"

 if (state == "Abia") 
 {stata= "01";}
 else if(state == "Adamawa") 
 {stata="02";}
 else if(state == "AkwaIbom") 
 {stata="03";}
 else if(state == "Anambra") 
 {stata="04";}
 else if(state == "Bauchi") 
{stata="05";}
 else if(state == "Bayelsa") 
 {stata="06";}
 else if(state == "Benue") 
 {stata="07";}
 else if(state == "Borno") 
 {stata="08";}
 else if(state == "Cross River") 
 {stata="09";}
 else if(state == "Delta") 
 {stata="10";}
 else if(state == "Ebonyi") 
 {stata="11";}
 else if(state == "Edo") 
 {stata="12";}
 else if(state == "Ekiti") 
 {stata="13";}
 else if(state == "Enugu") 
 {stata="14";}
 else if(state == "FCT") 
 {stata="15";}
 else if (state == "Gombe") 
 {stata= "16";}
 else if(state == "Imo") 
 {stata="17";}
 else if(state == "Jigawa") 
 {stata="18";}
 else if(state == "Kaduna") 
 {stata="19";}
 else if(state == "Kano") 
 {stata="20";}
 else if(state == "Katsina ") 
 {stata="21";}
 else if(state == "Kebbi") 
 {stata="22";}
 else if(state == "Kogi") 
 {stata="23";}
 else if(state == "Kwara") 
 {stata="24";}
 else if(state == "Lagos") 
 {stata="25";}
 else if(state == "Nasarawa") 
 {stata="26";}
 else if(state == "Niger") 
 {stata="27";}
 else if(state == "Ogun") 
 {stata="28";}
 else if(state == "Ondo") 
 {stata="29";}
 else if(state == "Osun") 
 {stata="30";}
 else if(state == "Oyo") 
 {stata="31";}
 else if(state == "Plateau") 
 {stata="32";}
 else if(state == "Rivers") 
 {stata="33";}
 else if(state == "Sokoto") 
 {stata="34";}
 else if(state == "Taraba") 
 {stata="35";}
 else if(state == "Yobe") 
 {stata="36";}
 else if(state == "Zamfara") 
 {stata="37";}



// console.log(stata);

var classe = document.getElementById("slct2").value 
console.log("classe", classe)

// var classe = "Primary One                   "

if (classe == "Primary One") 
{claseer= "01";}
else if(classe == "Primary Two") 
{claseer="02";}
else if(classe == "Primary Three") 
{claseer="03";}
else if(classe == "Primary Four") 
{claseer="04";}
else if(classe == "Primary Five") 
{claseer="05";}
else if(classe == "Primary Six") 
{claseer="06";}
else if(classe == "JSS1") 
{claseer="07";}
else if(classe == "JSS2") 
{claseer="08";}
else if(classe == "JSS3") 
{claseer="09";}
else if(classe == "SSS1") 
{claseer="10";}
else if(classe == "SSS2") 
{claseer="11";}
else if(classe == "SSS3") 
{claseer="12";}
else if(classe == "100 Level") 
{claseer="13";}
else if(classe == "200 Level") 
{claseer="14";}



var phoneNumber = document.getElementById("studentPhoneNumber").value
//var phoneNumber = 23456789300203

phoneNumber = phoneNumber.toString()
phoneNumber = phoneNumber.substr(phoneNumber.length - 4)
console.log('class', claseer);

    const userId = stata + claseer +  phoneNumber;

document.getElementById("idee").value = userId

return userId



}




//console.log(generateUserId())