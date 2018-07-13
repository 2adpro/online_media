var LPOS_300x250_ContentOffers0316 = LowestPrices.extend({
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //private var
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //---------------------------------------------------------
	  //$elm
	  //---------------------------------------------------------
	  //$items:undefined,
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Constructor
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  init:function(obj, init_preStart) {
		  this._super(obj, false);
	  },
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Methods
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  step_0:function() {
		//--------------------------------------
		//Init var
		//--------------------------------------
		var delay = .3;
		var dur = dur;
		var $elm;
		//--------------------------------------
		/*$elm = this.$div.find(".circle");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, 1, {delay:delay, rotation:200, ease:Back.easeOut});
		TweenEngine.from($elm, .8, {delay:delay, scale:3, opacity:0, ease:Expo.easeOut});*/
		//--------------------------------------
		$elm = this.$gen_txtBox.find(".title0");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, .8, {delay:delay, x:"-300", ease:Expo.easeOut});
		//--------------------------------------
		$elm = this.$gen_txtBox.find(".title1");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, .8, {delay:delay, x:"-300", ease:Expo.easeOut});
		//--------------------------------------
		$elm = this.$items.children(".item_0");
		TweenEngine.set($elm, {transformOrigin:"50% 0", transformPerspective:500, transformStyle:"preserve-3d"});
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, .8, {delay:delay, x:"200",ease:Expo.easeOut});
		//TweenEngine.from($elm, 1, {delay:delay, y:"300", ease:Expo.easeInOut});
		//--------------------------------------
		delay += .3;
		$elm = this.$cta;
		TweenEngine.set(this.$div.find(".cta"), {opacity:1});
		TweenEngine.from($elm, .5, {delay:delay, scale:0, ease:Expo.easeOut});
		//--------------------------------------
		$elm = this.$div.find(".logo_0");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, 1, {delay:delay, opacity:0, ease:Expo.easeInOut});
		//--------------------------------------
		delay += 2.5;
		TweenEngine.delayedCall(delay, $.proxy(this.step_1, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  step_1:function() {
		//--------------------------------------
		//Init var
		//--------------------------------------
		var delay = 0;
		var dur = dur;
		var $elm;
		//--------------------------------------
		$elm = this.$items.children(".item_0");
		TweenEngine.set($elm, {transformOrigin:"50% "+($elm.height()/2)+"px", transformPerspective:500, transformStyle:"preserve-3d"});
		TweenEngine.to($elm, .6, {delay:delay, scale:0,opacity:0, ease:Expo.easeIn});
		//--------------------------------------
		//$elm = this.$gen_txtBox.find(".title1");
		//TweenEngine.set($elm, {opacity:1});
		//--------------------------------------
		//delay += .3;
		//RectRotationY.go([this.$gen_txtBox.find(".title0"), this.$gen_txtBox.find(".title1")],5, {standRatio: .8, delay:delay});
		//--------------------------------------
		$elm = this.$items.children(".item_1");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, 1.4, {delay:delay, x:"200",ease:Expo.easeOut});
		//--------------------------------------
		delay += 3;
		TweenEngine.delayedCall(delay, $.proxy(this.step_2, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  step_2:function() {
		//--------------------------------------
		//Init var
		//--------------------------------------
		var delay = 0;
		var dur = dur;
		var $elm;
		//--------------------------------------
		$elm = this.$items.children(".item_1");
		TweenEngine.set($elm, {transformOrigin:"50% "+($elm.height()/2)+"px", transformPerspective:500, transformStyle:"preserve-3d"});
		TweenEngine.to($elm, .6, {delay:delay, scale:0,opacity:0, ease:Expo.easeIn});
		//--------------------------------------
		//delay += .3;
		//RectRotationY.go([this.$gen_txtBox.find(".title1"), this.$gen_txtBox.find(".title0")],5, {standRatio: .8, delay:delay});
		//--------------------------------------
		$elm = this.$items.children(".item_2");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, 1.4, {delay:delay, x:"200",ease:Expo.easeOut});
		//--------------------------------------
	  }
});
