
var RectRotationY_cls = NewEffect.extend({
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//init var
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//---------------------------------------------------------
	//elements
	//---------------------------------------------------------
	$elm_0:undefined,
	$elm_1:undefined,
	//---------------------------------------------------------
	//elements
	//---------------------------------------------------------
	standRatio:.2, 
	//---------------------------------------------------------
	//string
	//---------------------------------------------------------
	classID:"RectRotationY",
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//static
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	go:function(_master_init, _dur_init, _obj_init) {
		//------------------------------------------------------
		//Init var
		//------------------------------------------------------
		var instance = new RectRotationY_cls();
		//------------------------------------------------------
		instance.preStart(_master_init, _dur_init, _obj_init);
		//------------------------------------------------------
		return instance;
	},
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//static
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////	
	start:function(){
		//--------------------------------------
		//Init var
		//--------------------------------------
		var stand;
		var duration_dis;
		var delay = this.delay;
		//--------------------------------------
		if (NumberUtil.isOdd(this.master.length)) ThrowError.go(this, "master.length must be a even number. ("+this.master.length+")");
		//--------------------------------------
		stand = this.duration * this.standRatio;
		stand_dis = stand/(this.master.length-1);
		duration_dis = (this.duration - stand) / (this.master.length-1);
		//--------------------------------------
		for (i = 0; i < this.master.length-1;i++) {
			if (i ==0) {
				this.spin(this.master[i], this.master[i+1], duration_dis,delay);
			} else {
				TweenLite.delayedCall(delay, $.proxy(this.spin, this), [this.master[i], this.master[i+1], duration_dis]);
			}
			delay += stand_dis + duration_dis;
		}
	},
	//-------------------------------------------------------------------------------------
	spin:function($elm_0, $elm_1, dur, delay) {
		if (delay == undefined) delay = 0;
		//--------------------------------------
		//Init var
		//--------------------------------------
		var $elm;
		//--------------------------------------
		$elm = $elm_1;
		//Visibility.show($elm);
		if ($elm.data("origY") == undefined) $elm.data("origY", $elm.position().top);
		TweenLite.set($elm, {rotationX:0, opacity:0,y:$elm.data("origY")});
		TweenLite.set($elm, {opacity:1, delay:delay});
		TweenLite.set($elm, {transformOrigin:"50% 50px", transformPerspective:500, transformStyle:"preserve-3d"});
		//TweenLite.set($elm, {transformOrigin:"50% 50% -20", transformStyle:"preserve-3d"});
		TweenLite.from($elm, dur, {y:-($elm.height()/2),rotationX:90,ease:Linear.none, delay:delay});
		//--------------------------------------
		$elm = $elm_0;
		//$elm.moveUp();
		//Visibility.show($elm);
		if ($elm.data("origY") == undefined) $elm.data("origY", $elm.position().top);
		TweenLite.set($elm, {rotationX:0, y:$elm.data("origY")});
		TweenLite.set($elm, {transformPerspective:500, transformStyle:"preserve-3d"});
		TweenLite.set($elm, {transformOrigin:"50% 0%", transformStyle:"preserve-3d"});
		TweenLite.to($elm, dur, {y:$elm.height()+10,rotationX:-90,ease:Linear.none, delay:delay});
		TweenLite.to($elm, 0, {opacity:0, delay:delay + dur - (dur * .4)});
	}
});
var RectRotationY = new RectRotationY_cls();
