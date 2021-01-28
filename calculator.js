let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let sign = document.querySelector("#sign");
let equal = document.querySelector("#equal");
let ans = document.querySelector("#ans");
let error = document.querySelector("#error");
var res;

equal.addEventListener("click",function(){
    if(num1.value == "" && num2.value == ""){
        error.innerText="Please Enter numbers!!";
    }else{
        if(num1.value==""){
            error.innerText ="Please Enter number1!!";
        }else{
            if(num2.value==""){
                error.innerText = "Please Enter number2!!";
            }else{
        error.innerText="";

        switch(sign.value){
            case'+':
            res=(parseInt(num1.value) + parseInt(num2.value));
            break;
            
            case'-':
            res=(parseInt(num1.value) - parseInt(num2.value));
            break;
            
            case'*':
            res=(parseInt(num1.value) * parseInt(num2.value));
            break;
            
            case'/':
            res=(parseInt(num1.value) / parseInt(num2.value));
            break;
            
            case'%':
            res=(parseInt(num1.value) % parseInt(num2.value));
            break;

            default:
            res= "Error!!!";
            break;

        } ans.innerHTML=res;
       }
     }
    }
    
}); 