if ('serviceWorker' in navigator) {
	navigator.serviceWorker
  .register('js/sw.js')
	.catch(function() {
		console.log('SW Registration Failed');
	});
}
