
                 	$(function () {
                 		var upload_file_name;
                 		var upload_file_size;
                 		var upload_file_type;
			            var $upload_drop = $(".dropbox");
			            //抑制瀏覽器原有的拖拉操作效果
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
			                    //只留下type為image/*者，例如: image/gif, image/jpeg, image/png...
			                    upload_file_type = f.type;
			                    return f;

			                });
			                if($("#h2_content")!= null)
			                {
			                	$("#h2_content").remove();
			                }

 							var files = e.originalEvent.dataTransfer.files;
			                var imageFiles = $.map(files, function (f, i) {
			                    //只留下type為image/*者，例如: image/gif, image/jpeg, image/png...
			                    return f;
			                });

			                //清除ViewModel
			                //vm.images.removeAll(); vm.currImage(null);
			                //逐一讀入各圖檔，取得DataURI，顯示在網頁上
			                $.each(imageFiles, function (i, file) {
			                    //使用File API讀取圖檔內容轉為DataUri
			                    
			                    upload_file_name = file.name;
			                	upload_file_size = file.size;
			                });


			                var div_content = '<div class="border m-2 d-inline-block p-4"><h5 class="pt-0">' + upload_file_name + ' ' + (upload_file_size/1024).toFixed(2) + 'KB' + '</h5> <h5 class="pt-0">'  + upload_file_type + ' </h5> <div "class="progress" id = "progress_content"><div class = "aa"><div class="progress-bar progress-bar-striped progress-bar-animated  change_value background_animation style="width : 100%">0%</div></div></div></div>';
			                

			          		$(".dropbox").append(div_content);
			          		
			          		var element = document.getElementsByClassName("change_value");
			          		var time = 0;
			          		var id = window.setInterval(time_going,6);
			          		function time_going(){
			          			time = time + 1;
			          			element[element.length - 1].innerHTML = time + "%";
			          			// element[element.length - 1].style.width = time + "%";
			          			if(time == 100)
			          			{
			          				clearInterval(id);
			          				time = 0;
			          			}
			          				
			          		}
			          			
			            });
        			});
        		