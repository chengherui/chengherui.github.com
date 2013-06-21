(function () {
	var params = {};

	//Document data
	if(document) {
		params.domain = document.domain || '';
		params.url = document.URL || '';
		params.title = document.title || '';
		params.referrer = document.referrer || '';
	}

	//Window data
	if(window && window.screen) {
		params.sh = window.screen.height || 0;
		params.sw = window.screen.width || 0;
		params.cd = window.screen.colorDepth || 0;
	}

	//navigator data
	if(navigator) {
		params.lang = navigator.language || '';
	}

	//analytics _maq
	if(_maq) {
		for(var i in _maq) {
			switch(_maq[i][0]) {
				case '_setAccount':
					params.account = _maq[i][1];
				break;
				default:
				break;
			}
		}
	}

	//get args
	var args = '';
	for(var i in params) {
		if(args != '') {
			args += '&';
		}
		args += i + '=' + encodeURIComponent(params[i]);
	}

	//get backend script via Image
	var img = new Image(1, 1);
	//backend.name = servername
	img.src = 'http://backend.name/1.gif?' + args;
})();
