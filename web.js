const boton = document.querySelector('button');
const arriba = document.getElementById('arriba');
const abajo = document.getElementById('abajo');

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
    let coloralea = abajo.style.backgroundColor;
    arriba.style.backgroundColor = coloralea;

    let nuevocolor = gencoloraleatorio();
    abajo.style.backgroundColor = nuevocolor
})
