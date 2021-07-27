import $ from 'jquery'

export function galeriasSlick() {
    $(".galeria-a>ul").slick({
        // GALERIA A: Sem dots, setas em baixo, 1 img por vez
        prevArrow: '<button type="button" class="slick-prev"><div class="container-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">  <g id="inv-prev" transform="translate(-1357 -91)">    <path id="Caminho_89" data-name="Caminho 89" d="M26,0A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" transform="translate(1357 91)" fill="#930"/>    <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">      <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/><line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>    </g>  </g></svg></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="container-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"> <g id="inv-next" transform="translate(-1485 -1092)">  <g id="Grupo_93" data-name="Grupo 93" transform="translate(2894 1235) rotate(180)">   <circle id="Elipse_1" data-name="Elipse 1" cx="26" cy="26" r="26" transform="translate(1357 91)" fill="#930"/>   <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">    <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/>    <line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>   </g>  </g> </g></svg></div></button>',

    })
    $('.galeria-b>ul').slick({
        // GALERIA B: com dots, setas finas laterais, 1 img por vez
        infinite: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="container-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="35.016" viewBox="0 0 19.998 35.016">   <g id="inv-prev-2" transform="translate(-415.002 -4380)">     <g id="seta-down" transform="translate(435 4380) rotate(90)">       <path id="Caminho_227" data-name="Caminho 227" d="M1.641,35.016a1.638,1.638,0,0,1-1.158-2.8l14.883-14.88L.82,2.8A1.637,1.637,0,0,1,3.133.48L20,17.338,2.8,34.538A1.648,1.648,0,0,1,1.641,35.016Z" transform="translate(35.016) rotate(90)" fill="#fff"/>     </g>   </g> </svg> </div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="container-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="35.016" viewBox="0 0 19.998 35.016"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M1.641,35.016a1.638,1.638,0,0,1-1.158-2.8l14.883-14.88L.82,2.8A1.637,1.637,0,0,1,3.133.48L20,17.338,2.8,34.538A1.648,1.648,0,0,1,1.641,35.016Z" transform="translate(0 0)"/></svg></div></button>',
    })
    $('.galeria-c>ul').slick({
        // GALERIA C: sem dots, setas laterais, 1 img central com previews laterais
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="container-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">  <g id="inv-prev" transform="translate(-1357 -91)">    <path id="Caminho_89" data-name="Caminho 89" d="M26,0A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" transform="translate(1357 91)" fill="#930"/>    <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">      <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/><line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>    </g>  </g></svg></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="container-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"> <g id="inv-next" transform="translate(-1485 -1092)">  <g id="Grupo_93" data-name="Grupo 93" transform="translate(2894 1235) rotate(180)">   <circle id="Elipse_1" data-name="Elipse 1" cx="26" cy="26" r="26" transform="translate(1357 91)" fill="#930"/>   <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">    <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/>    <line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>   </g>  </g> </g></svg></div></button>',

    })

    $(".galeria-d>ul").slick({
        // GALERIA D: sem dots, setas finas laterais, 1 img por vez
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="container-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="35.016" viewBox="0 0 19.998 35.016">   <g id="inv-prev-2" transform="translate(-415.002 -4380)">     <g id="seta-down" transform="translate(435 4380) rotate(90)">       <path id="Caminho_227" data-name="Caminho 227" d="M1.641,35.016a1.638,1.638,0,0,1-1.158-2.8l14.883-14.88L.82,2.8A1.637,1.637,0,0,1,3.133.48L20,17.338,2.8,34.538A1.648,1.648,0,0,1,1.641,35.016Z" transform="translate(35.016) rotate(90)" fill="#fff"/>     </g>   </g> </svg> </div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="container-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="35.016" viewBox="0 0 19.998 35.016"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M1.641,35.016a1.638,1.638,0,0,1-1.158-2.8l14.883-14.88L.82,2.8A1.637,1.637,0,0,1,3.133.48L20,17.338,2.8,34.538A1.648,1.648,0,0,1,1.641,35.016Z" transform="translate(0 0)"/></svg></div></button>',
    })








    // $('.galeria-home-centro>ul').slick({
    //     // GALERIA A: Sem dots, setas em baixo, 1 img por vez
    //     prevArrow: '<button type="button" class="slick-prev"><div class="container-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">  <g id="inv-prev" transform="translate(-1357 -91)">    <path id="Caminho_89" data-name="Caminho 89" d="M26,0A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" transform="translate(1357 91)" fill="#930"/>    <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">      <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/><line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>    </g>  </g></svg></div></button>',
    //     nextArrow: '<button type="button" class="slick-next"><div class="container-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"> <g id="inv-next" transform="translate(-1485 -1092)">  <g id="Grupo_93" data-name="Grupo 93" transform="translate(2894 1235) rotate(180)">   <circle id="Elipse_1" data-name="Elipse 1" cx="26" cy="26" r="26" transform="translate(1357 91)" fill="#930"/>   <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">    <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/>    <line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>   </g>  </g> </g></svg></div></button>',

    // });
    // $('.galeria-home-garden>ul').slick({
    //     nextArrow: '<button type="button" class="slick-next"></button>',
    //     prevArrow: '<button type="button" class="slick-prev"></button>',
    // });
    // $('.galeria-experiencias-centro>ul').slick({
    //     // GALERIA B: com dots, setas finas laterais, 1 img por vez
    //     infinite: true,
    //     dots: true,
    //     prevArrow: '<button type="button" class="slick-prev"><div class="container-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="35.016" viewBox="0 0 19.998 35.016">   <g id="inv-prev-2" transform="translate(-415.002 -4380)">     <g id="seta-down" transform="translate(435 4380) rotate(90)">       <path id="Caminho_227" data-name="Caminho 227" d="M1.641,35.016a1.638,1.638,0,0,1-1.158-2.8l14.883-14.88L.82,2.8A1.637,1.637,0,0,1,3.133.48L20,17.338,2.8,34.538A1.648,1.648,0,0,1,1.641,35.016Z" transform="translate(35.016) rotate(90)" fill="#fff"/>     </g>   </g> </svg> </div></button>',
    //     nextArrow: '<button type="button" class="slick-next"><div class="container-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="35.016" viewBox="0 0 19.998 35.016"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M1.641,35.016a1.638,1.638,0,0,1-1.158-2.8l14.883-14.88L.82,2.8A1.637,1.637,0,0,1,3.133.48L20,17.338,2.8,34.538A1.648,1.648,0,0,1,1.641,35.016Z" transform="translate(0 0)"/></svg></div></button>',

    // })
    // $('.galeria-experiencias-garden>ul').slick({
    // })
    // $('.galeria-experiencias-alameda>ul').slick({
    // })
    // $('.galeria-cafe-centro>ul').slick({
    // })
    // $('.galeria-cafe-garden>ul').slick({
    // })
    // $('.galeria-page>ul').slick({
    //     dots: true
    // })
    // $('.galeria-mv>ul').slick({
    //     // GALERIA C: sem dots, setas laterais, 1 img central com previews laterais
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     centerMode: true,
    //     variableWidth: true,
    //     prevArrow: '<button type="button" class="slick-prev"><div class="container-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">  <g id="inv-prev" transform="translate(-1357 -91)">    <path id="Caminho_89" data-name="Caminho 89" d="M26,0A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" transform="translate(1357 91)" fill="#930"/>    <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">      <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/><line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>    </g>  </g></svg></div></button>',
    //     nextArrow: '<button type="button" class="slick-next"><div class="container-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"> <g id="inv-next" transform="translate(-1485 -1092)">  <g id="Grupo_93" data-name="Grupo 93" transform="translate(2894 1235) rotate(180)">   <circle id="Elipse_1" data-name="Elipse 1" cx="26" cy="26" r="26" transform="translate(1357 91)" fill="#930"/>   <g id="Grupo_1" data-name="Grupo 1" transform="translate(-1044.5 301.464)">    <line id="Linha_1" data-name="Linha 1" x2="8.921" y2="8.921" transform="translate(2421 -184.977)" fill="none" stroke="#fff" stroke-width="3"/>    <line id="Linha_2" data-name="Linha 2" x1="8.921" y2="8.921" transform="translate(2421 -191.873)" fill="none" stroke="#fff" stroke-width="3"/>   </g>  </g> </g></svg></div></button>',

    // });
}