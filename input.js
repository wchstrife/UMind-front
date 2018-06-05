$(document).ready(function(){
	fileType = 'json';
	data = {"root":{"data":{"id":"blz4v2r539c0","created":1528186387713,"text":"中心主题"},"children":[{"data":{"id":"blz4v536zrc0","created":1528186392795,"text":"分支主题"},"children":[{"data":{"id":"blz4v5s8h1k0","created":1528186394309,"text":"分支主题"},"children":[{"data":{"id":"blz4v62en7c0","created":1528186394924,"text":"分支主题"},"children":[{"data":{"id":"blz4v6bslkw0","created":1528186395492,"text":"分支主题"},"children":[]}]}]}]}]},"template":"default","theme":"fresh-blue","version":"1.4.43"};
	var content = JSON.stringify(data);
	editor.minder.importData(fileType, content).then(function(data){
		console.log(data)
			
			});
  });

