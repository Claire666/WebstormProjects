function editCell(event){
	var currentCell;
	
	if(event == null){/*触发事件对象*/
		currentCell = window.event.srcElement;
	}else{
		currentCell = event.target;	
	}
	
	if(currentCell.tagName.toLowerCase() == "td"){/*单击单元格出文本框*/

		var input = document.createElement("textarea");
        input.type = 'checkbox';
        input.type = 'text';
        input.setAttribute('class', 'editable');
        input.value = currentCell.innerHTML;
        /*input.width = currentCell.style.width;*/

        input.onblur = function(){/*onblur事件，用户离开输入框时执行js代码*/
            currentCell.innerHTML = input.value;
            //currentCell.removeChild(input);
        };
        input.onkeydown = function(event){/*onkeydown事件，控制键盘按键*/
            if(event.keyCode == 9){/*keycode对照，tab键*/
                input.blur();/*从文本域移开焦点。*/
            }
        };

        currentCell.innerHTML = '';
        currentCell.appendChild(input);
        input.focus();
	}	
}


