let a,b,result;
function setValues() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);  
}
function sum() {
    setValues();
    result = a+b;
    document.getElementById("print_result").innerHTML = "The sum is equal to " + result;
}
function difference() {
    setValues();
    result = a-b;
    document.getElementById("print_result").innerHTML = "The sum is equal to " + result;
}
function product() {
    setValues();
    result = a*b;
    document.getElementById("print_result").innerHTML = "The sum is equal to " + result;
}
function quotient() {
    setValues();
    result = a/b;
    document.getElementById("print_result").innerHTML = "The sum is equal to " + result;
}