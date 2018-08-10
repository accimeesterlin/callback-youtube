// Example - 2
function calculate(test) {
    // Simulate a code delay
    setTimeout(function () {
        console.log(1);
        test();
    }, 500);
}

function multiply() {
    console.log(2);
}

calculate(multiply);
