$(document).ready(function(){
	var mainAppInitialData = '<div class="btn-wrap">'+
			'<p>Find your artist below</p>'+
			'<button class="btn btn-custom" data-toggle="modal" data-target="#myModal">Search Artist</button>'+
			'<img src="img/arrow.png" />'+
		'</div>';
	
	var mainAppLoader = '<div class="loaderWrap"><img src="img/loader.gif"></div>'
	$('#mainApp').html(mainAppInitialData);
	
	// Form inut field validators
	$(document).on('input', '#artistName, #artisttrack', function(){
		var artistName = $('#artistName').val();
		var artisttrack = $('#artisttrack').val();
		if(artistName == 'Jack' && artisttrack==4) {
			$('#error').html('Awesome...!').removeClass('error').addClass('success');
		} else {
			$('#error').html('Enter correct input...').removeClass('success').addClass('error');
		}
	});

	// Form submit call
	$(document).on('click', '#searchArtist', function(){
		var artistName = $('#artistName').val();
		var artisttrack = $('#artisttrack').val();
		
		if(artistName == 'Jack' && artisttrack==4) {
			$('#mainApp').html(mainAppLoader);
	   	    $('#myModal').modal('hide');
		    $.ajax({
			   url: "http://itunes.apple.com/search?term="+artistName+"&limit="+artisttrack,
			   data: {
			      format: 'json'
			   },
			   error: function() {
			      console.log('error in api call');
			   },
			   dataType: 'jsonp',
			   success: function(data) {
			      var d= data.results.length > 0 ? '' : 'Sorry, No Result Found...Search Again...!';
			      	for(var i=0; i<data.results.length; i++) {
				      	var artistName = data.results[i].artistName;
				      	var trackName = data.results[i].trackName;
				      	var shortDescription = data.results[i].shortDescription ? data.results[i].shortDescription+'...' : 'NA';

			      		d+='<li class="clearfix"><div class="img-wrap pull-left"><img src='+
			      		data.results[i].artworkUrl100+
			      		' /></div><div class="content-wrap pull-left"><p>Artist name : '+
			      		artistName+
			      		'</p><p>Track name : '+
			      		trackName+
			      		'</p><p class="shortDesc">'+
			      		shortDescription+
			      		'</p></div></li>';
			      	}
			      var finalData = '<div class="list-container"><p class="searchHead">Search results for "'+artistName+'". <a id="clearArtist" class="clearBtn">(clear)</a></p><ul class="list-wrap">'+d+'</ul></div>';
			      $('#mainApp').html(finalData);
			   },
			   type: 'GET'
			});
		} else {
			$('#error').html('Enter correct input...')
		}
	});
	
	// Back to step 1
	$(document).on('click', '#clearArtist', function(){
		$('#mainApp').html(mainAppInitialData);
	});
});
