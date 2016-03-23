var javascript={
	nombres:['Domine Js','Js Ninja','Javascript','JS the god parts'],
	precios:[900,700,500,300]
};

var python={
	nombres:['Computacion y programacion python','Python 3 al descubierto','aprende a programar con python','programing'],
	precios:[500,600,700,800]
}

var total=0;

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
$('section.producto button').on('click',compra);

}

function muestraMenu()
{
    $('div.clickMenu').addClass('rotar');
    $('nav').toggle('slow');
    
}

function compra()
{
	
	var cantidad=$(this).parent().children()[3].value;
	cantidad=parseInt(cantidad);
	var nombre=$(this).parent().children()[1].textContent;
	var precio=parseInt($(this).parent().children()[2].textContent);
	var fila='<tr> <td>'+nombre+'</td><td>'+cantidad+'</td><td>'+precio+'</td><td>'+precio*cantidad+'</td><td><img src=img/trash.png></td></tr>';

total=total+(precio*cantidad);

$('section.carrito table').append(fila);

$('section.carrito div.total h2').text(total);

$('table tr td img').on('click',elimina);
}

function elimina()
{
	$(this).parent().parent().hide('slow');
	var resta=$(this).parent().parent().children()[3].textContent;
	resta=parseInt(resta);
	total=total-resta;
	console.log('lo que hay en total: '+total);
	$('section.carrito div.total h2').text(total);
}





