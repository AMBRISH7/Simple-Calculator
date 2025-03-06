const Display = document.getElementById("display");

function appendToDisplay(input){
    Display.value += input;
}
function Clear(){
    Display.value = "";
}

function appendToDisplayAC(){
    Display.value = "";
}

function Calculate(){
    try{
        Display.value = eval(Display.value);
    }
    catch(error){
        Display.value = "Error !";
    }
}
