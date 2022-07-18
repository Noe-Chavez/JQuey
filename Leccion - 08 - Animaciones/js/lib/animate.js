$(function () {

    let $cajaRoja = $('.caja_roja');
    
    function mover(dir) {

        $cajaRoja.clearQueue();

        switch (dir) {
            case 'Arriba':
                console.log('Arriba');
                $cajaRoja.animate({
                    top: '-=50px'
                }, 200);
            break;

            case 119:
                console.log('Arriba');
                $cajaRoja.animate({
                    top: '-=50px'
                }, 200);
            break;

            case 'Abajo':
                console.log('Abajo');
                $cajaRoja.animate({
                    top: '+=50px'
                }, 200);
            break;

            case 115:
                console.log('Abajo');
                $cajaRoja.animate({
                    top: '+=50px'
                }, 200);
            break;

            case 'Izquierda':
                console.log('Izquierda');
                $cajaRoja.animate({
                    left: '-=50px'
                }, 200);
            break;

            case 97:
                console.log('Izquierda');
                $cajaRoja.animate({
                    left: '-=50px'
                }, 200);
            break;

            case 'Derecha':
                console.log('Derecha');
                $cajaRoja.animate({
                    left: '+=50px'
                }, 200);
            break;

            case 100:
                console.log('Derecha');
                $cajaRoja.animate({
                    left: '+=50px'
                }, 200);
            break;
        
            default:
                console.log('reset');
                $cajaRoja.animate({
                    left: '0px',
                    top: '0px'
                }, 1000);// 1000 es el tiempo en ejecutar la animacion
            break;
        }
        
    }

    $('button').on('click', function () {
        let dir = $(this).data('move'); 
        mover(dir);
    });

    $(document).on('keypress', function (e) {
        let keyCode = e.keyCode;
        console.log(keyCode);
        mover(keyCode);
    });

});