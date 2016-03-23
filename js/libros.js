var javascript={
	nombres:['Domine Js','Js Ninja','Javascript','JS the god parts'],
	precios:[900,700,500,300]
};

var python={
	nombres:['Computacion y programacion python','Python 3 al descubierto','aprende a programar con python','programing'],
	precios:[500,600,700,800]
}


$(function (){

	$('select').on('change',inicio);
    $('div.clickMenu').on('click',muestraMenu);
});

function inicio()
{
	var opcion=$('select').val();
	pinta(opcion);
}

function pinta(numero)
{
	var libro,imagen,num=1;
	if(numero==1)
	{
		libro=javascript;
		imagen="js";
	}
	else if(numero==2)
	{
		libro=python;
		imagen="python";
	}



	for(x in libro.nombres)
	{
		var html='<article><img src=img/'+imagen+num+'.jpg><h2>'+libro.nombres[x]+'</h2><h3>'+libro.precios[x]+'</h3><input type=number><button>comprar</button></article>';
			num++;
		$('section.producto').append(html);
	}
$('section.principal').hide('slow');
$('div.clickMenu').show('slow');

}

function muestraMenu()
{
    $('nav').toggle('slow');
}







