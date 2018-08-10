// Pass multiple Callbacks
function greetEveryone(a, b, c) {
    var greeting = 'Welcome ' + a;
    b(greeting);
    c(greeting);
}


greetEveryone('Esterling Accime', function (value) {
    console.log(value + ' by B');
}, function (value) {
    console.log(value + ' by C');
});