javascript:(function(){
  var win=window.open(window.location.href.substring(0,window.location.href.indexOf('.html')) +  ".html?partner=rss&emc=rss&pagewanted=all", '_self');
	win.focus();
})();
