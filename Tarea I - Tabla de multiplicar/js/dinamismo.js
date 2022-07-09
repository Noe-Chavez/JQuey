$(() => {

    let numero = 0;
    let resultado = 0;
    let boton = $('#boton');
    let contenido = $('#contenido');
    let numTabla = $('#numTabla');
    let clear = $('#boton_clear');
    let max = $('#numMax');

    boton.on('click', function () {

        numero = numTabla.val();

        for (let index = 1; index <= max.val(); index++) {
            
            resultado = numero * index;
        
            contenido.append(
                `<tr>
                    <td>${numero}</th>
                    <td>x</td>
                    <td>${index}</td>
                    <td>=</td>
                    <td>${resultado}</td>
                </tr>`
            );
            
        }
        
    });

    clear.on('click', function () {
        location.reload();
    });
    
});