var elForm= document.querySelector(".form");
var elInput= document.querySelector(".form-control");
var elList= document.querySelector(".list");
var elArray=[];


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();


    elArray.push(elInput.value.trim());
    elList.innerHTML="";
    
    for(item of elArray){ 
        var li= document.createElement("li");
        li.textContent=item;
        elList.appendChild(li);
        elInput.value=" ";
        
    }
})


