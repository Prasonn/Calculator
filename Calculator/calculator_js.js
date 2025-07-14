function sum(p1,p2)
{
    return p1*p2;
}
var v3=0;
var v2=0;

function adddigit(element)
{
    var res = element.value;
    var ans = document.getElementById('input_dig').value;
    document.getElementById('input_dig').value=ans+res;
    ans = ans+res;
    const a=ans+res;
    console.log(a);
    return a;
}
var res = 0;
var operand = '+';

function operation(val){
    var ans = document.getElementById('input_dig').value;
    
    operand=val.value;
    res=Number(ans);
    document.getElementById('input_dig').value='';
    return res;

}


function equals()
{
    var inpt = document.getElementById('input_dig').value;
    inpt = Number(inpt)
    var abc = 0;
    if(operand=='+'){
        abc = inpt+res;
    }
    else if(operand=='*'){
        abc = inpt*res;
    }
    res = abc;
    document.getElementById('input_dig').value=abc;
    res=0;
}
function cancel(){
    document.getElementById('input_dig').value='';
    res = 0;
}
if(document.getElementById('input_dig').value=='')
{
    cancel();   
}
