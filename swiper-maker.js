class swiperMaker{
	constructor(config = {}, swiperConfig = {}) {
		this._defaults = {
			selector: '.slideshow',
			playCls: 'playing',
			pausedCls: 'paused'
		};
		this._swiperDefaults = {
			loop: true,
			autoplay: {
				delay: 5000,
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

		this.options = Object.assign({}, this._defaults, config);
		this.swiperOptions = Object.assign({}, this._swiperDefaults, swiperConfig);		
		this.slideshows = document.querySelectorAll(this.options.selector);
	}
	
	init(){
		let parent = this;
		
		this.slideshows.forEach((slideshow) => {
			let currentSwiper;
			console.log(this.swiperOptions);
			
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
			currentSwiper = new Swiper(slideshow, this.swiperOptions);
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

module.exports = swiperMaker;