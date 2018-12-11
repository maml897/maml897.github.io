var app={
	//url:"http://211.159.175.225:8080/wish",
	url:"http://localhost:8881/wish",
	ajax:function(obj){
		var defaultObjt={
			url:app.url+obj.url
		}
		obj = $.extend({},obj,defaultObjt);
		$.ajax(obj);
	},
	formTarget:function(frm,fun){
		var $this= frm;
		var action= $this.attr("action");
		$this.attr("action",app.url+action);
		$this.formTarget(fun);
		$this.attr("action",action);
	}
}