require('./stylesheet/select.css');
$(document).ready(function(){
	$(document).on("click",".xu-select>.select-show",function(e){
		var $this = $(this);
		var $list = $this.closest(".xu-select").find(".select-list");

		if($list.css("display") == "none"){
			$list.fadeIn();
		}else{
			$list.fadeOut();
		}
		e.stopPropagation();
	})

	$(document).on("click",".xu-select>.select-list a",function(e){
		var $this = $(this);
		console.log($this);
		var $myList = $this.closest(".select-list");
		$myList.fadeOut();

		e.stopPropagation();
	})

	$(document).on("click",function(){
		var $showList = $(".select-list");
		$showList.fadeOut();
	})
})