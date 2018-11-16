if ('serviceWorker' in navigator) {
	navigator.serviceWorker
  .register('./sw.js')
	.catch(function() {
		console.log('SW Registration Failed');
	});
}
