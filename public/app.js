var display= document.getElementById("inp");

function getbuttonvalue(btnvalue){
    display.value += btnvalue;
}
function calculate(){
    var a = display.value;
    var ans = eval(a);
    display.value = ans;
}
function clearall(){
    display.value="";
}
function deleteone(){
 display.value= display.value.slice(0,-1);
}