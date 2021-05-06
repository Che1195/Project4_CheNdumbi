$(document).ready(function () {
	$("#test-api").click(function () {
		var movieTitle = $("#movie-title").val();
		console.log(movieTitle);
		$.ajax({
			type: "GET",
			url: `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieTitle}&api-key=ssY3N2XFKTTTjy003WyXQtO21zbVPceZ`,
			// data: { name: variable },
			success: function (result) {
				// clear previous serarch results
				$("#reviews-list").empty()

				// Build output render
				var data = [];
				var length = result.results.length - 1;
				for (let i = length; i > -1; i--) {
					var title = result.results[i].display_title.toLowerCase();
					if (title.includes(movieTitle.toLowerCase())) {
						data.push(result.results[i]);
					}
				}
				console.log(result);
				console.log(result.results);
				console.log(data);

				for (let i in data) {
					var reviewTag = $('<div id="review">').appendTo("#reviews-list"); //Equivalent: $(document.createElement('img'))
					var title = $("<h1>").text(data[i].display_title).appendTo("#review")
					var heading = $("<h3>").text(data[i].headline).appendTo("#review")
					var summary = $("<p>").text(data[i].summary_short).appendTo("#review")

					// review.attr("src", data[i].multimedia.src);
					// img.appendTo("#image-container");
				}
			},
		});

		$.ajax({
			type: "GET",
			url: `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=ssY3N2XFKTTTjy003WyXQtO21zbVPceZ`,
			success: (result) => {
				console.log(result);
			},
		});
	});
});
