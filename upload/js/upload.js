
$(function () {
	var upload_file_name;
	var upload_file_size;
	var upload_file_type;
	var $upload_drop = $(".dropbox");
	
	function stopEvent(evt) {
		evt.stopPropagation();
		evt.preventDefault();
	}
	$upload_drop.bind("dragover", function (e) {
		//滑鼠經過上方時加入特效
		stopEvent(e);
		$(e.target).addClass("hover");
	}).bind("dragleave", function (e) {
		//滑鼠移開時移除特效
		stopEvent(e);
		$(e.target).removeClass("hover");
	}).bind("drop", function (e) {
		//拖放操作完成事件
		stopEvent(e);
		$(e.target).removeClass("hover");
		//由dataTransfer.files取得檔案資訊
		var files = e.originalEvent.dataTransfer.files;
		var imageFiles = $.map(files, function (f, i) {
			upload_file_type = f.type;
			return f;
		});
		if ($("#h2_content") != null) {
			$("#h2_content").remove();
		}
		var files = e.originalEvent.dataTransfer.files;
		var imageFiles = $.map(files, function (f, i) {
			return f;
		});
		$.each(imageFiles, function (i, file) {
			upload_file_name = file.name;
			upload_file_size = file.size;
		});


		var div_content = '<div class="border m-2 d-inline-block p-4"><p class="pt-0 block_font_size">' + 
							upload_file_name +' ' + (upload_file_size / 1024).toFixed(2) + 'KB' 
							+ '</p> <p class="pt-0 block_font_size">' + upload_file_type +
		  					' </p> <div "class="progress" id = "progress_content"><div class = "aa">\
		  					<div class="progress-bar progress-bar-striped progress-bar-animated  \
		  					change_value background_animation style="width : 100%">0%</div></div></div></div>';
		$(".dropbox").append(div_content);

		var element = document.getElementsByClassName("change_value");
		var time = 0;
		var id = window.setInterval(time_going, 6);
		function time_going() {
			time = time + 1;
			element[element.length - 1].innerHTML = time + "%";
			if (time == 100) {
				clearInterval(id);
				time = 0;
			}

		}

	});
});
