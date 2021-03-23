var agarrado = true;
var id;
var clase;
var claseBool;

$(document).ready(function () {

    $("tr:even>td:odd").css("background-color", "black");
    $("tr:odd>td:even").css("background-color", "black");
    var start = true;
    var comidas = $('.comidas');
    var mouse = $('#mouse');
    var tablero = $('#tablero');
    var pieza = $('.pieza');
    var casillero = [a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8, d1, d2, d3, d4, d5, d6, d7, d8, e1, e2, e3, e4, e5, e6, e7, e8, f1, f2, f3, f4, f5, f6, f7, f8, g1, g2, g3, g4, g5, g6, g7, g8, h1, h2, h3, h4, h5, h6, h7, h8];
    var torreB1 = $('#torreB1');
    var torreB2 = $('#torreB2');
    var torreN1 = $('#torreN1');
    var torreN2 = $('#torreN2');
    var caballoB1 = $('#caballoB1');
    var caballoB2 = $('#caballoB2');
    var caballoN1 = $('#caballoN1');
    var caballoN2 = $('#caballoN2');
    var alfilB1 = $('#alfilB1');
    var alfilB2 = $('#alfilB2');
    var alfilN1 = $('#alfilN1');
    var alfilN2 = $('#alfilN2');
    var reinaB = $('#reinaB');
    var reinaN = $('#reinaN');
    var reyB = $('#reyB');
    var reyN = $('#reyN');
    var peonB1 = $('#peonB1');
    var peonB2 = $('#peonB2');
    var peonB3 = $('#peonB3');
    var peonB4 = $('#peonB4');
    var peonB5 = $('#peonB5');
    var peonB6 = $('#peonB6');
    var peonB7 = $('#peonB7');
    var peonB8 = $('#peonB8');
    var peonN1 = $('#peonN1');
    var peonN2 = $('#peonN2');
    var peonN3 = $('#peonN3');
    var peonN4 = $('#peonN4');
    var peonN5 = $('#peonN5');
    var peonN6 = $('#peonN6');
    var peonN7 = $('#peonN7');
    var peonN8 = $('#peonN8');
    var a1 = $('#a1');
    var a2 = $('#a2');
    var a3 = $('#a3');
    var a4 = $('#a4');
    var a5 = $('#a5');
    var a6 = $('#a6');
    var a7 = $('#a7');
    var a8 = $('#a8');
    var b1 = $('#b1');
    var b2 = $('#b2');
    var b3 = $('#b3');
    var b4 = $('#b4');
    var b5 = $('#b5');
    var b6 = $('#b6');
    var b7 = $('#b7');
    var b8 = $('#b8');
    var c1 = $('#c1');
    var c2 = $('#c2');
    var c3 = $('#c3');
    var c4 = $('#c4');
    var c5 = $('#c5');
    var c6 = $('#c6');
    var c7 = $('#c7');
    var c8 = $('#c8');
    var d1 = $('#d1');
    var d2 = $('#d2');
    var d3 = $('#d3');
    var d4 = $('#d4');
    var d5 = $('#d5');
    var d6 = $('#d6');
    var d7 = $('#d7');
    var d8 = $('#d8');
    var e1 = $('#e1');
    var e2 = $('#e2');
    var e3 = $('#e3');
    var e4 = $('#e4');
    var e5 = $('#e5');
    var e6 = $('#e6');
    var e7 = $('#e7');
    var e8 = $('#e8');
    var f1 = $('#f1');
    var f2 = $('#f2');
    var f3 = $('#f3');
    var f4 = $('#f4');
    var f5 = $('#f5');
    var f6 = $('#f6');
    var f7 = $('#f7');
    var f8 = $('#f8');
    var g1 = $('#g1');
    var g2 = $('#g2');
    var g3 = $('#g3');
    var g4 = $('#g4');
    var g5 = $('#g5');
    var g6 = $('#g6');
    var g7 = $('#g7');
    var g8 = $('#g8');
    var h1 = $('#h1');
    var h2 = $('#h2');
    var h3 = $('#h3');
    var h4 = $('#h4');
    var h5 = $('#h5');
    var h6 = $('#h6');
    var h7 = $('#h7');
    var h8 = $('#h8');

    $('#gamerestartoo').on('click', function(){
        location.reload();
    })

    $('#gamestartoo').on('click', function () {
        $('.pieza').css('display', 'block');
        a8.append(torreB1);
        b8.append(caballoB1);
        c8.append(alfilB1);
        d8.append(reyB);
        e8.append(reinaB);
        f8.append(alfilB2);
        g8.append(caballoB2);
        h8.append(torreB2);
        a7.append(peonB1);
        b7.append(peonB2);
        c7.append(peonB3);
        d7.append(peonB4);
        e7.append(peonB5)
        f7.append(peonB6);
        g7.append(peonB7);
        h7.append(peonB8);

        a1.append(torreN1);
        b1.append(caballoN1);
        c1.append(alfilN1);
        d1.append(reyN);
        e1.append(reinaN);
        f1.append(alfilN2);
        g1.append(caballoN2);
        h1.append(torreN2);
        a2.append(peonN1);
        b2.append(peonN2);
        c2.append(peonN3);
        d2.append(peonN4);
        e2.append(peonN5)
        f2.append(peonN6);
        g2.append(peonN7);
        h2.append(peonN8);
        agarrado = true;

    });



    pieza.on('click', agarrar);

    function agarrar() {
        if (agarrado == true) {
            agarrado = false;
            id = $(this).attr('id');
            clase = $(this).attr('class');
            if(clase == 'pieza n'){
                claseBool = false;
            }if(clase == 'pieza b'){
                claseBool = true;
            }
            mouse.prepend(this);
            $('body').css('cursor', 'block');
            mouse.css('display', 'block');

            $('body').mousemove(function () {
                mouse.css('left', event.clientX)
                    .css('top', event.clientY);
            });

        };

        return soltar();
    };

    function soltar() {
        if (agarrado == false) {
            $('td').on('click', () => {

                if ($(event.target).children().attr('class') != clase && $(event.target).attr('class') != clase) {

                    /*            while($(event.target).attr('class').string.prototype.slice() != id){
                        function comer(){

                        } */
                    /* } */
                    $(event.target).empty(); 
                    event.target.prepend(document.getElementById(id));
                   
                    mouse.empty();
                    agarrado = true;
      

                }  
           
                    
                
            }
            );
        };
    };








    /*     function soltar() {
            casillero.append(this);
            agarrado = true;
            $('body').css('cursor', 'block');
            mouse.css('display', 'none');
    
            $('body').mousemove(function () {
                mouse.css('left', 'auto')
                    .css('top', 'auto');
            })
    
        } */






})
