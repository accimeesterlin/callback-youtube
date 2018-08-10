var log = console.log;

function movingForward(a) {

    log('Welcome!');
    var result = 2 + 10; // 7
    a( result ); // execute
}
// movingForward( function(x) { log(x) } );
movingForward( function(y) { log(y) } );
