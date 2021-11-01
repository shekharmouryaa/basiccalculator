
let outputScreen = document.getElementById("textbox");
function Display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value)
    }
    catch (anyerror) {
        alert("Invalid Input");
    }
}

function keyenter(keyvalue) {
    if (outputScreen.value.length > 0 && keyvalue.which === 13) {
        try {
            outputScreen.value = eval(outputScreen.value)
        }
        catch (anyerror) {
            alert("Invalid Input");
        }
    }
}

function Clear() {
    outputScreen.value = "";
}
function Delete() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
outputScreen.addEventListener("keypress", keyenter);
