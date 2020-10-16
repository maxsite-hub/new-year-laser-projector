$(function(){

	$('.menu a.scroll').click(function() {
		$('.menu').removeClass('active');
		$('.bg-mobile-menu').removeClass('active');
	});

	$(".container").on("click", "a.scroll", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - 100
    }, 1500);
  });

  var date = new Date(),
  date2 = new Date(),
	dateSale, dateSale2,
	months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

	date.setDate(date.getDate() - 7);
	date2.setDate(date.getDate());

	dateSale = "c" + ' ' + date.getDate() + ' ' + months[ date.getMonth() ];

	date = new Date()
	date2 = new Date()
	dateSale += ' - ' + "по" + ' ' + + date.getDate() + ' ' + months[ date.getMonth() ];
	dateSale2 = date2.getDate() + ' ' + months[ date.getMonth() ];

	$('.date span').text(dateSale2)
	$('.date_action').text(dateSale);


	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="prev"><img src="img/left.png"></button>',
		nextArrow: '<button type="button" class="next"><img src="img/right.png"></button>',
		infinite: true,
		responsive: [
		{
			breakpoint: 1170,
			settings: {
				vertical: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}
		]
	});


	$('.sizes button').on('click', function() {
		$('.sizes button').removeClass('active');
		$(this).addClass('active');
	})

	$('.buy-btn').fancybox({
		touch: false
	}) 

	$('.details, .color_wrap a, .img_wrap').fancybox({
		touch: false,

		afterLoad: function() {
			$('.slick-carousel').slick('setPosition');
			$('.slick-carousel').delay(100).slick('refresh');
			$('.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				fade: true,
				lazyload: 'progressive',
				asNavFor: '.slider-nav',
				responsive: [
				{
					breakpoint: 1170,
					settings: {
						vertical: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				}
				]
			});

			$('.slider-nav').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				lazyload: 'progressive',
				focusOnSelect: true,
				dots: false,
			});
		}, 
		afterClose: function() {
			$('.slider-for').slick('unslick');
			$('.slider-nav').slick('unslick');
		}
	});

	var bLazy = new Blazy();


	$('.mob-menu-btn, .mob-menu-btn-close, .bg-mobile-menu').on('click', function(e) {
		e.preventDefault();
		$('.menu').toggleClass('active');
		$('.bg-mobile-menu').toggleClass('active');
	});

	

	

  
});