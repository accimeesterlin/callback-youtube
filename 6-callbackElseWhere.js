var log = console.log;

function movingForward(a) {

    log('Welcome!');
    var result = 2 + 10; // 7
    a(result); // execute
}

function calculate (y) {
    log(y)
}
movingForward(calculate);