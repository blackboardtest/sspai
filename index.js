hubble.getXML('https://sspai.com/feed', function (error, response, $) {
	$('item').each(function (index, value) {

		var url = $(this).find('link').text();
		var id = url.substring(url.lastIndexOf('/') + 1);
		var dom = $(this);

		articles.get('id', id, function (article) {
			if (article) {
				return;
			}

			var title = dom.find('title').text().trim();
			var content = dom.find('description').text();
			var summary = content.replace(/<\/?[^>]*>/g,'').trim().substring(0, 50);

			var article = {
				id: id,
				title: title,
				content: content,
				summary: summary,
				url: url
			};
			articles.append(article);
		});
	});
});
