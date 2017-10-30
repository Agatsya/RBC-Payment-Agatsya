// All scripts related to the projects are placed here

//Tab show/hide encryption and decryption small tabs
$('ul.lst-uxd-tabswitch>li>a#tabbtn-encryption').on('click', function() {
	$(this).addClass('tab-selected');
	$('ul.lst-uxd-tabswitch>li>a#tabbtn-decryption').removeClass('tab-selected');
	$('div#tabcontent-encryption').show();
	$('div#tabcontent-decryption').hide();
});
$('ul.lst-uxd-tabswitch>li>a#tabbtn-decryption').on('click', function() {
	$(this).addClass('tab-selected');
	$('ul.lst-uxd-tabswitch>li>a#tabbtn-encryption').removeClass('tab-selected');
	$('div#tabcontent-decryption').show();
	$('div#tabcontent-encryption').hide();
});
// small tabs end

//Tab show/hide swift-bic and uk sort-code large tabs
$('ul.lst-uxd-tabswitch>li>a#tabbtn-swift-bic').on('click', function() {
	$(this).addClass('tab-selected');
	$('ul.lst-uxd-tabswitch>li>a#tabbtn-uk-sortcode').removeClass('tab-selected');
	$('div#tabcontent-swift-bic').show();
	$('div#tabcontent-uk-sortcode').hide();
});
$('ul.lst-uxd-tabswitch>li>a#tabbtn-uk-sortcode').on('click', function() {
	$(this).addClass('tab-selected');
	$('ul.lst-uxd-tabswitch>li>a#tabbtn-swift-bic').removeClass('tab-selected');
	$('div#tabcontent-uk-sortcode').show();
	$('div#tabcontent-swift-bic').hide();
});
// large tabs end


//Tab show/hide SHA and OUR larger tabs
$('ul.lst-uxd-tabswitch>li>a#tabbtn-SHA').on('click', function() {
	$(this).addClass('tab-selected');
	$('ul.lst-uxd-tabswitch>li>a#tabbtn-OUR').removeClass('tab-selected');
	$('div#tabcontent-SHA').show();
	$('div#tabcontent-OUR').hide();
});
$('ul.lst-uxd-tabswitch>li>a#tabbtn-OUR').on('click', function() {
	$(this).addClass('tab-selected');
	$('ul.lst-uxd-tabswitch>li>a#tabbtn-SHA').removeClass('tab-selected');
	$('div#tabcontent-OUR').show();
	$('div#tabcontent-SHA').hide();
});
// larger tabs end

/* -- enter input - component  */ 
/* -- enter input - component  */ 
	$( 'body' ).on( 'click', 'div.ux-input.ux-comp-box', function () {
		if ( !$( this ).hasClass( 'ux-input-readonly' ) ) {
			if ( !$( this ).hasClass( 'component-active' ) ) {
				$( this ).addClass( 'component-active' );
				// $( this ).find( 'input.txtEnteredData' ).val( '' ).focus();
				$( this ).find( 'input.txtEnteredData' ).focus();
			}
		}
	});

	/* -- enter dropdown values - component (SS.) */
	$( 'body' ).on( 'click', 'div.ux-input-dropdown.ux-comp-box', function () {
		if ( !$( this ).hasClass( 'ux-input-readonly' ) ) {
			if ( !$( this ).hasClass( 'component-active' ) ) {
				$( this ).addClass( 'component-active' ).removeClass( 'ux-comp-selected' );
			}
		}
	});
	// if ( iOSDevice ) {
	// 	$( 'body' ).on( 'touchstart', 'div.ux-input-dropdown.ux-comp-box', function () {
	// 		if ( !$( this ).hasClass( 'ux-input-readonly' ) ) {
	// 			if ( !$( this ).hasClass( 'component-active' ) ) {
	// 				$( this ).addClass( 'component-active' ).removeClass( 'ux-comp-selected' );
	// 			}
	// 		}
	// 	});
	// };

	/* //-- show drop down - component */
	$( 'body' ).on( 'click', 'div.ux-dropdown a.drp-enterdata', function () {
		if ( !$( this ).hasClass( 'ux-dropdown-readonly' ) ) {
			if ( !$( this ).closest( 'div.ux-dropdown' ).hasClass( 'dropdown-active' ) ) {
				$( this ).closest( 'div.ux-dropdown' ).addClass( 'dropdown-active' );
				$( this ).find( 'div.enter-input input[type="text"]' ).focus();
			}
		}
	});
	$( 'body' ).on( 'click', 'div.ux-dropdown a.drp-showcontent', function () {
		if ( !$( this ).closest( 'div.ux-dropdown' ).hasClass( 'dropdown-showing' ) ) {
			$( this ).closest( 'div.ux-dropdown' ).addClass( 'dropdown-showing dropdown-active' );
			// $( this ).search-input
		} else {
			$( this ).closest( 'div.ux-dropdown' ).removeClass( 'dropdown-showing dropdown-active' );
		}
	});

/* -- enter input - component end  */ 

/* //paging list - collpase/expand */
	$('body').on('click', '.main-pager .table-item .data-item a.di-more', function() {
		if ( !$( this ).closest( 'div.data-item' ).hasClass( 'item-disabled' ) ) {
			if (!$(this).hasClass('di-more-active')) {
				$( 'html, body' ).animate( {scrollTop : $( this ).offset().top }, 700 );
				$(this).closest('div.table-data').find('a.di-more').removeClass('di-more-active');
				$(this).closest('div.table-data').find('div.data-content').removeClass('dc-expanded');
				$(this).addClass('di-more-active');
				$(this).closest('div.table-item').find('div.data-content').addClass('dc-expanded');
			} else {
				$(this).removeClass('di-more-active');
				$(this).closest('div.table-item').find('div.data-content').removeClass('dc-expanded');
			}
		}
	});

	/* //paging list - item selection */
	$( 'body' ).on( 'click', '.main-pager .table-item .data-item a.di-heading', function() {
		if ( !$( this ).closest( 'div.data-item' ).hasClass( 'item-disabled' ) ) {
			$( this ).closest( 'div.table-data' ).find( 'div.data-item' ).removeClass( 'data-item-selected' );
			$( this ).closest( 'div.data-item' ).addClass( 'data-item-selected' );
		}
	});

	$('.modal').on('shown.bs.modal', function (e) {
		setModalHeight( $( this ) );
	});






 // In-Tabular Data List search option 
	$( 'body' ).on( 'click', 'div.insearch-start a.dt-btn-insearch', function () {
		if ( !$( this ).hasClass( 'insearch-active' ) ) {
			$( this ).addClass( 'insearch-active' );
			$( this ).closest( 'div.dt-header' ).siblings( 'div.dt-search' ).slideDown( 200 ).find( 'input.txtinsearch' ).focus();
			// $( this ).closest( 'div.dt-header' ).siblings( 'div.dt-search' ).find( 'input.txtinsearch' ).focus();
			setTimeout(function(){
				//$( this ).closest( 'div.dt-header' ).siblings( 'div.dt-search' ).find( 'input.txtinsearch' ).css('background', 'red');
				// .tabular-data .dt-search .dt-inlist-search .txtinsearch
			}, 350);
		} else {
			$( this ).removeClass( 'insearch-active' );
			$( this ).closest( 'div.dt-header' ).siblings( 'div.dt-search' ).slideUp( 200 ).find( '.txtinsearch' ).val( '' );
		}
	} );
	/* -- clear search text button show/hide */
	$( 'body' ).on( 'keyup', 'div.dt-search div.dt-inlist-search .txtinsearch', function () {
		if ( $( this ).val().length > 0 ) {
			$( this ).siblings( 'a.inlistsearch-clear' ).fadeIn( 200 );
		} else {
			$( this ).siblings( 'a.inlistsearch-clear' ).fadeOut( 200 );
		}
	});
	$( 'body' ).on( 'click', 'div.dt-inlist-search a.inlistsearch-clear', function () {
		$( this ).siblings( 'input.txtinsearch' ).val( '' ).focus();
		$( this ).fadeOut( 250 );
	});
	$( 'body' ).on( 'click', 'div.dt-inlist-search', function () {
		$( this ).find( 'input.txtinsearch' ).focus();
	});

	//dropdown js

// right side toggle menu scripts


	