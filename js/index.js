function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
		startPosition: 1,
		dots: false,
		navText: ['<i class="material-icons">&#xE314;</i>','<i class="material-icons">&#xE315;</i>'],
    responsive:{
        0:{
						startPostion: 2,
            items:1
        },
        400:{
            items:2
        },
				800: {
					item:3,
				},
        1000:{
            items:4
        }
    }
});
$.getJSON('https://berri-co.me/js.json', function(json){
	jQuery.each(json, function(i, webapp) {
		var summary = 0;
		for(var a = 1; a < 6; a++) {
			summary = summary + a*webapp[a + 'stars'];
		}
		
		var average = precisionRound(summary / webapp.stars, 1);
		
		$('#apps #list').append(
			'<a href="/topgui/webstore/' + i + .html +'/"><div class="webapp top">\
					<img src="' + webapp.icon  + '" alt="' + webapp.name + '" style="background-color:  ' + webapp.themecolor +'"/><div>\
						<h4>' + webapp.name + '</h4>\
						<div class="category">' + webapp.category + '</div>\
						<div class="middle"><span class="rate">' + average + '</span><i class="material-icons">star</i></div>\
					</div>\
			 </div></a>');
	});
});
