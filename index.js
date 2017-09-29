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
				var $ = cheerio.load(content);
				var image = $('img').eq(0).attr('src');

				var article = {
					id: id,
					title: title,
					content: content,
					url: url,
					image: image
				};
				articles.append(article);
			});
		});
});
