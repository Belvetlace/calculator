/*global math: false, calc: false, console: false*/
/*jslint browser: true*/
// CS22A: A Basic Calculator Part 3 - calcu() function with if-else

var calcu = function (calcValue) {
    if (calcValue) {
        // calcValue wasn't null or undefined'
        if (calcValue === 'c') {
            calc.reset();
        } else if (calcValue === 'equate') {
            calc.output.value = math.eval(calc.output.value);
        } else {
            calc.output.value += calcValue;
        }
    }
};

// Bind onclick events below here and don't use window.onload.
// Usually using window.onload is a good idea,
// but that prevents the Jasmine test suite from loading and since the
// script tag for ifelse.js is near the bottom of the
// ABasicCalculator-switch.html page and there are no big images to
// slow the loading of the HTML elements down it will all work OK without that.

var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "button") {
        inputs[i].onclick = function(event){
            calcu(this.id);
        };
    }
};
