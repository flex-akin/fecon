const classed = document.getElementById("clase").value

if (classed == "Primary One" || classed == "Primary Two" || classed == "Primary Three" || classed == "Primary Four" || classed == "Primary Five" || classed == "Primary Six"){
           document.getElementById("subject3").value ="Mathematics and Quantitative Reasoning"
           document.getElementById("subject4").value ="English Studies and Verbal Reasoning"
           document.getElementById("subject5").value ="Current Affairs, Sciences and Arts"
           document.getElementById("sub1").value =""
           document.getElementById("sub2").value =""
   
   }else if (classed == "SSS1" || classed == "SSS2" || classed == "SSS3") {
           document.getElementById("sub1").value ="English Language"
           document.getElementById("sub2").value ="Mathematics"
           document.getElementById("subject3").value =""
           document.getElementById("subject4").value =""
           document.getElementById("subject5").value =""
           var optionArray = ["|Select Subjects...","Biology|Biology","Government|Government","Physics|Physics", "Chemistry|Chemistry", "Geography|Geography", "Literature|Literature", "Accounting|Accounting", "IRK/CRK|IRK/CRK", "Economics|Economics"];
    }
    else if (classed == "JSS1" || classed == "JSS2" || classed == "JSS3") {
       document.getElementById("sub1").value ="English Language"
       document.getElementById("sub2").value ="Mathematics"
       document.getElementById("subject3").value =""
           document.getElementById("subject4").value =""
           document.getElementById("subject5").value =""
       var optionArray = ["|Select Subjects...","Basic Technology|Basic Technology","Basic Science|Basic Science","Agricultural Science|Agricultural Science", "Computer Science|Computer Science", "Physical and Health Education|Physical and Health Education", "Social Studies|Social Studies", "Civic Education|Civic Education", "IRK/CRK|IRK/CRK","Cultural and Creative Art (C.C.A)|Cultural and Creative Art (C.C.A)", "Home Economics|Home Economics"];
   
    }

   
    
           for(var option in optionArray){
           var pair = optionArray[option].split("|");
           var newOption = document.createElement("option");
       
           newOption.value = pair[0];
           newOption.innerHTML = pair[1];
           subject.options.add(newOption)   }

           for(var option in optionArray){
           var pair = optionArray[option].split("|");
           var newOption = document.createElement("option");
       
           newOption.value = pair[0];
           newOption.innerHTML = pair[1];
           subject1.options.add(newOption)   }

           for(var option in optionArray){
           var pair = optionArray[option].split("|");
           var newOption = document.createElement("option");
       
           newOption.value = pair[0];
           newOption.innerHTML = pair[1];
           subject2.options.add(newOption)   }



const year = new Date().getFullYear();


 document.getElementById("year").value = year