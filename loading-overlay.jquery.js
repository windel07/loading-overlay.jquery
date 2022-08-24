(function ($) {
	$.fn.loadingOverlay = function (status = true, options = {}) {
		var settings = $.extend(
			{
				icon: null,
				backgroundColor: '#ffffff',
				opacity: 0.85,
			},
			options
		);

		const loadingEl = $(this);
		const loadingOverlay = $(`<div class="loading__overlay"></div>`);
		const loadingIcon = $('<span class="loading__icon"></span>');

		loadingOverlay.css({
			backgroundColor: settings.backgroundColor || '#ffffff',
			opacity: settings.opacity || 0.75,
			position: ['HTML', 'BODY'].includes(loadingEl.prop('tagName'))
				? 'fixed'
				: 'absolute',
		});

		if (settings.icon)
			loadingIcon.css({
				backgroundImage: `url(${settings.icon})`,
			});

		loadingIcon.appendTo(loadingOverlay);

		if (status) loadingEl.addClass('loading').prepend(loadingOverlay);
		else loadingEl.removeClass('loading').children().eq(0).remove();
	};
})(jQuery);
