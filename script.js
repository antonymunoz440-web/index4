const boton = document.querySelector('button');
const arriba = document.getElementById('arriba');
const abajo = document.getElementById('abajo');
const medio = document.getElementById('contenedor')
const texto1 = document.getElementById('color1')
const texto2 = document.getElementById('color2')

function gencoloraleatorio (){
        let digitos = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i<6; i++){
            let indicealeattorio = Math.floor (Math.random()*16);
            color += digitos[indicealeattorio];
    }
        return color
}

boton.addEventListener('click',function(){

    let coloralea = texto2.innerText;
    arriba.style.backgroundColor = coloralea;

    let nuevocolor = gencoloraleatorio();
    abajo.style.backgroundColor = nuevocolor;

    texto1.innerText = coloralea;
    texto2.innerText = nuevocolor;

    medio.style.backgroundImage = `linear-gradient(to top, ${coloralea} ,${nuevocolor})`;
})

texto1.addEventListener('click', function () {

    navigator.clipboard.writeText(texto1.innerText);

    alert('Color 1 copiado');
});

texto2.addEventListener('click', function () {

    navigator.clipboard.writeText(texto2.innerText);

    alert('Color 2 copiado');
});

