var log = console.log;

function movingForward(a) {

    log('Welcome!');
    a(); // execute
}
movingForward( function() { log('Test') } );
movingForward( function() { log('Test 1') } );
