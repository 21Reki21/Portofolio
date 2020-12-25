// event saat lin di klik
$('.page-scroll').on('click', function(){

	// ambil isi href atau tujuan
	var href = $(this).attr('href');

	// mengambil elemen ydt
	var elemenhref = $(href);

	// pindahkan scroll
	$('body').animate({
		scrollTop: elemenhref.offset().top -50

	}, 1500, 'easeInOutExpo');

e.preventeDefault(e);

});