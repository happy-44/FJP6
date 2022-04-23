const FileType = require('file-type');

(async () => {
	console.log(await FileType.fromFile('Unicorn.png'));
	//=> {ext: 'png', mime: 'image/png'}
})();