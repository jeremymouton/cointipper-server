// ======================
// jQuery.CoinTipper
// 
// Jeremy Mouton (@jeremymouton)
// https://github.com/jeremymouton/
// 
// Dependencies:
//   - jquery.js
//   - bootstrap-modal.js
//   - jquery-qrcode.js
//     - qrcode.js
// 
// ======================

(function ( $ ) {
	// Hello .coinTipper();
	$.fn.coinTipper = function(options) {
		var settings = $.extend({
			type: null,
			currency: null,
			iso: null,
			label: null,
			address: null
		}, options );
		
		button = generateDonationButton(options, this);
		return button;
	};
}( jQuery ));

function generateDonationButton(options,btn) {
	// Get the options passed to .coinTipper()
	var type      = options.type,
	    currency  = options.currency,
	    iso       = options.iso,
	    label     = options.label,
	    address   = options.address;

	// Clean the name inputs
	label = label.replace(/-/g, '+');

	// Assign and build HTML
	var modal   = buildDonateModalHtml(currency, iso, address, label),
	    btnHtml = buildDonateButtonHtml(type, currency);

	$(btn).replaceWith(btnHtml);
	$('#frame').append(modal);


	$('.swipe').click( function() {
		$(this).animate({
			marginTop: '-40px',
			opacity: '0.6'
		}, 200);
	});
	// Watch donation input field
	$('#donate-form input[name="donation-amount"]').keyup( function() {
		var amount = $(this).val();
		generateDonationPayment(currency, address, amount, label, iso);
	});
}

function generateDonationPayment(currency, address, amount, label, iso) {
	// Update DOM values, donation URI, and generate QR code.
	var uri = currency+":"+address+"?amount="+amount+"&label="+label;

	// Replace DOM with new values
	$('#donate-form .span-uri').attr('href',uri);
}

function buildDonateButtonHtml(type, currency) {
	// Build out the donation button
	var html = '<a class="donate-btn '+currency+' swipe">'+type+' '+currency+'</a>';
	return html;
}

function buildDonateModalHtml(currency, iso, address, label) {
	// Set the donation amounts for each currency and generate the modal.

	var html;
	var show_options = true;

	// Set donation amounts
	if (currency === "bitcoin") {
		var amount = 0.0005;
	} else if (currency === "dogecoin") {
		var amount = 500;
	} else if (currency === "kittehcoin") {
		var amount = 5000;
	} else if (currency === "gamecredits") {
		var amount = 0.0001;	
	} else {
		var amount = '';
	}

	// Generate modal html, using Bootstrap.
	// Assign default donation values to supported coins.
	// Hide prefilled options for unsupported coins.
	html = '<div id="donate-form"><input type="text" class="form-control" name="donation-amount" id="donation-amount" size="4" value="" placeholder="'+amount+'"><span>'+iso+'</span><a href="'+currency+':'+address+'?amount='+amount+'&label='+label+'" class="span-uri donate-btn btn"><img src="/img/icon-send.png" alt="" width="24" height"24"/></a></div>';

	return html;
}
