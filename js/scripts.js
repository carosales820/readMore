$('article').readMore({
	moreLink: '<a href="#"><em> GET THE GOODS!</em></a>',
	lessLink: '<a href="#"><em> GET THE GOODS!</em></a>',
	speed: 1000,
	afterToggle: function(){
		alert('ITS CLOSED OPEN IT!');
	}

});