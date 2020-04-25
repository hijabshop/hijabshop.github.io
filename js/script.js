$//Event pada saat link di klik

$('.page-scroll').on('click', function(e){
	//Ambil isi hreff
	var tujuan = $(this).attr('href');

	var elemenHref = $(tujuan);

	$("html, body").animate({scrollTop:elemenHref.offset().top - 50}, 1000, 'easeInOutExpo');

	e.preventDefault();
});


//Parallax
//about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron
	
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//porfolio
	if(wScroll > $('.porfolio').offset().top - 250){
		//jQuery ambil semua elemen, dari berapa elemen yang di dapat akan di berikan sebuah fungsi(di bawah), dan memberikan waktu di beri setTimeout.
		$('.porfolio .thumbnail').each(function(i){
			//Di beri waktu 300ms, baru muncul..
			setTimeout(function(){
				//eq = equal to (elemen yang ke berapa? dari kumpulan elemen nya)
				$('.porfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));

			//i + 1 = karna index di mulai dari 0

		});
		
	}



});

