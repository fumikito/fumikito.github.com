jQuery(document).ready(function($){
	$.ajax({
		url: 'https://api.github.com/users/fumikito/repos',
		dataType: 'jsonp',
		jsonp: 'callback',
		success: function(result){
			$.each(result.data, function(index, elt){
				markup = '<div class="span4"><div>' +
					'<h4>' + elt.name + '</h4>' + 
					'<p>' + elt.description + '</p>' + 
					'<p><a href="' + elt.html_url + '" class="btn btn-small btn-info">See Project</a></p>' + 
					'</div></div>';
				$('.projects').append(markup);
			});
			$('.projects').removeClass('loading');
			$('.projects').masonry({
				itemSelector: '.span4',
				columnWidth: function( containerWidth ) {
				    return containerWidth / 3;
				  }
			});
		}
	});
});
