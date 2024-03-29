/*global math: false, calc: false*/
/*jslint browser: true*/
// CS22A: A Basic Calculator Part 2 - calcu() function with switch
//////////////////////////////////////////////////////////////////////////////////////////////
// The value from the HTML page is passed through calcu() as a parameter argument,
// e.g., calcu('1') which takes the place of 'calcValue' entering the function below
// which is then passed to the switch for comparison. If the value of calcValue equals
// '1' then the first case of the switch will be true and the value of the output text
// box will be a '1' with the += concatenating this value every time the button is pressed.
// The math.eval() function at the bottom turns all the concatenated string into an arithmetic
// equation that can be evaluated, thus allowing the calculator to produce a viable answer.
//////////////////////////////////////////////////////////////////////////////////////////////

var calcu = function (calcValue) {
    switch (calcValue.trim()) { //trims whitespaces passed from value field
        case "+":
        case "-":
            calc.output.value += calcValue;
            break;
        case "x":
            calc.output.value += " * ";
            break;
        case "divide":
            calc.output.value += " / ";
            break;
        case "C":
            calc.reset();  //clears the output
            break;
        case "=":
            calc.output.value = math.eval(calc.output.value);
            break;
        default:
            calc.output.value += calcValue.trim();
            break;
    }
};
