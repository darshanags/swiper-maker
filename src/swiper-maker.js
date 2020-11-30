let assign = require('lodash.assign');
let forEach = require('lodash.foreach');;

class swiperMaker{
	constructor(swiper, config = {}, swiperConfig = {}) {
		this.swiper = swiper;
		this._defaults = {
			selector: '.slideshow',
			playCls: 'playing',
			pausedCls: 'paused'
		};
		this._swiperDefaults = {
			loop: true,
			autoplay: {
				delay: 5000
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			navigation: {
				nextEl: '.controls .next',
				prevEl: '.controls .prev'
			}			
		}

		this.options = assign({}, this._defaults, config);
		this.swiperOptions = assign({}, this._swiperDefaults, swiperConfig);		
		this.slideshows = document.querySelectorAll(this.options.selector);
	}
	
	init(){
		let parent = this;
		
		forEach(this.slideshows, (slideshow) => {
			let currentSwiper;
			
			if(this.options.playpause){
				let playPauseBtn = slideshow.querySelector(this.options.playpause);
				this.swiperOptions.on = {
					init: function(){					
						
						playPauseBtn.addEventListener('click', () => {
							if(this.autoplay.running === true){
								this.autoplay.stop();
								parent._removeClass(playPauseBtn, parent.options.playCls);
								parent._addClass(playPauseBtn, parent.options.pausedCls);
							}else{
								this.autoplay.start();
								parent._removeClass(playPauseBtn, parent.options.pausedCls);
								parent._addClass(playPauseBtn, parent.options.playCls);
							}
						});
						
					}
				}
			}
			currentSwiper = new this.swiper(slideshow, this.swiperOptions);
		});
	}

	_addClass(element, cls){
		element.className += ' ' + cls;
	}
	
	_removeClass(element, cls){
		let currentCls = element.className;
		let regex = new RegExp('\s?' + cls, 'g');
		element.className = currentCls.replace(regex, '');
	}
}

export default swiperMaker;