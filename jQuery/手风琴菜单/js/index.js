$(function() {
	var Accordion = function(el, multiple) {
		//检查对象是否为真来决定是否执行下面的函数
		this.el = el || {};
		//multiple控制是否可以打开多个菜单
		this.multiple = multiple || false;
		//查找下面的子级
		var links = this.el.find('.link');
		//如果link被点击，则执行下拉效果
		links.on('click', {el: this.el, multiple:
		this.multiple}, this.dropdown)
	}
	//prototype有能力添加属性或代码的属性
	Accordion.prototype.dropdown = function(e) {
		//data可以把数据添加到el
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		//slideToggle在显示和隐藏状态之间切换
		$next.slideToggle();
		//toggleClass可以是一个元素在下拉和上拉切换
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});