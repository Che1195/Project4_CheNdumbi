$(document).ready(function () {
	var section = $(".identifier").text();
	console.log(section);

	$.ajax({
		type: "GET",
		url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=ssY3N2XFKTTTjy003WyXQtO21zbVPceZ`,
		success: (result) => {
			console.log(result);
			var articles = result.results;
			var filteredArticles = []; // empty array to hold all of the art section articles

			// go through each article and add each "art" article to the empty array
			articles.forEach((article) => {
				if (article.section == section) {
					filteredArticles.push(article);
				}
			});

			console.log(filteredArticles);

			// create a articles card using the first 5 articles
			for (let i = 0; i < 10; i++) {
				// create article card element
				var articleCard = $(
					`<a href=${filteredArticles[i].url} id="article-${i}" class="article-card" target="blank">`
				).appendTo("#articles");

				// an image of the article
				var img = $(
					`<img src=${filteredArticles[i].multimedia[2].url}>`
				).appendTo(`#article-${i}`);

				var info = $(`<div id='article-${i}-info'>`).appendTo(`#article-${i}`);

				// give article card element the title
				var title = $("<h3 class='title'>")
					.html(filteredArticles[i].title)
					.appendTo(`#article-${i}-info`);

				// the abstract
				var summary = $("<p class='summary'>")
					.html(filteredArticles[i].abstract)
					.appendTo(`#article-${i}-info`);
			}
		},
	});
});
