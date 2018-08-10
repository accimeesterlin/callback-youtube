function calculate() {
    // Simulate a code delay
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function multiply() {
    console.log(2); 
}

calculate(); 
multiply();

// 1
// 2