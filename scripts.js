function doMath() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let char = document.getElementById("char").value;
    let result;
    
    switch(char) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        default:
            result = "Invalid Character!";
    }
    
    document.getElementById("result").innerHTML = "Result: " + result;
}
