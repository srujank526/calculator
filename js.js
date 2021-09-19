let display=document.getElementById("display");
let buttons = document.querySelectorAll("button");
var displayValue="";
for(element of buttons){
    element.addEventListener('click', (ele) => {
        buttonText=ele.target.innerText;
        if(buttonText == 'x'){
            buttonText='*';
            displayValue += buttonText;
            display.innerText = displayValue;
        }
        else if(buttonText == 'RESET'){
            displayValue="";
            display.innerText=displayValue;
        }
        else if(buttonText == 'DEL'){
            displayValue=  displayValue.substr(0, displayValue.length - 1);;
            display.innerText=displayValue;
        }
        else if(buttonText == '='){
            if(displayValue == ''){
                display.innerText = '';
            }
            else{
              display.innerText = eval(displayValue)
            displayValue = eval(displayValue);  
            }
            
        }
        else{
            displayValue += buttonText;
            display.innerText = displayValue;
        }
    });
}
let body=document.getElementById("body");
let count=1;
let toggle = document.getElementById("toggle");
let button=document.querySelectorAll("button");
let text=document.getElementById("text");


toggle.addEventListener("click", function() {
    
    if(count%3==1){
       document.getElementById("dot").style.marginLeft = "15px";
       document.getElementById("container").className="key-container2"
       display.className="display2"
       body.className="body2"
       for(let i=button.length-1; i>=0;i--){
           button.item(i).className="item-b"
       }
       document.getElementById("item3a").id="item3b"
       document.getElementById("item17a").id="item17b"
       document.getElementById("item18a").id="item18b"
       text.className="first2"
    }
    if(count%3 == 2){
        document.getElementById("dot").style.marginLeft = "25px";
        document.getElementById("container").className="key-container3"
        display.className="display3"
        body.className="body3"
        for(let i=button.length-1; i>=0;i--){
            button.item(i).className="item-c"
        }
        document.getElementById("item3b").id="item3c"
        document.getElementById("item17b").id="item17c"
        document.getElementById("item18b").id="item18c"
        text.className="first3"
    }
    if(count%3 == 0){
        document.getElementById("dot").style.marginLeft = "5px";
        document.getElementById("container").className="key-container1"
        display.className="display1"
        body.className="body1"
        for(let i=button.length-1; i>=0;i--){
            button.item(i).className="item-a"
        }
        document.getElementById("item3c").id="item3a"
        document.getElementById("item17c").id="item17a"
        document.getElementById("item18c").id="item18a"
        text.className="first"
    }
    count++;
  });
