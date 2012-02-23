$.extend({
	jqcached: function (selectors, context) {
		context = (typeof context == 'object') ? context : $;

		if (context.ss === undefined) {
			context.ss = {};
		}

		var i;
		for (i in selectors) {
			context.ss[i] = selectors[i];
		}

		return context.ss;
	}
});