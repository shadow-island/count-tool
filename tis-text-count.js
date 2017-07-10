<html class="no-js" lang="ko">
<meta charset="utf-8">
<body onkeydown='on_key_down()'>

<style type="text/css">
	.main >* {
		vertical-align: top; // Align children to middle of line
	}
	.input_box {	
		border-color: Red;  
		border-style: solid;
		border-width: 1px;			
		width: -moz-fit-content;		
	}
	.column {			
		width:	40%;
		display:inline-block;		
		
		border-color: Red;  
		border-style: solid;
		border-width: 1px;
		
		margin: 15px;
		padding: 5px;					
		font-size: 20px;		    
	}
	.border {			
		width:	90%;		
		border-color: Blue;  
		border-style: solid;
		border-width: 1px;
		
		margin: 15px;
		padding: 5px;					
		font-size: 20px;		    
	}
</style>	
<script>

function on_key_down() {
	var keycode = event.keyCode;
	// q
	if ( keycode == 81) {
		copy()
	}	
}	


function copy() {		
	//-- 클립보드의 내용 가져오기
	var a = window.clipboardData.getData('Text');
	document.getElementById('input').innerHTML = a;	
	move();
}	

function move() {	
	var input_doc = document.getElementById('input').value;        
	var output_container = document.getElementById('output1');
	var output_container2 = document.getElementById('output2');
		
	
	
	//전체 문장 1차공백제거 
	input_doc = input_doc.replace(/^[\s\u00a0]+|[\s\u00a0]+$/g, '');
	
	
	//
	var message = input_doc;
	message = message.replace(/\s/g, "");	
	document.getElementById('Result').innerHTML = message.length;
	//~
	
	
	split_key = "euk"
	i = input_doc.indexOf(split_key);
	if (i == -1) {
		output_container.innerHTML = input_doc;
			
		//alert(output_container.innerHTML.length)
	}
	else {
		output_container.innerHTML = input_doc.substring(0,i);
		output_container2.innerHTML = input_doc.substring(i + split_key.length);
	}
	
	calc();
}

function calc() {	
	var output_container = document.getElementById('output1');
	//document.getElementById('count_char').innerHTML = output_container.innerHTML.length;		
	
	checkByteWO_Space(output_container.innerHTML);	
	
	var output_container2 = document.getElementById('output2');
	checkByteWO_Space2(output_container2.innerHTML);
}

// textarea에 입력된 문자의 바이트 수를 체크
function checkByte(frm) {
   
	var totalByte = 0;
	var message = frm;

	for(var i =0; i < message.length; i++) {
		var currentByte = message.charCodeAt(i);
		if(currentByte > 128) 
			totalByte += 2;	
		else 
			totalByte++;
	}
	return totalByte;
}

function checkByteWO_Space(frm) {
   
	var totalByte = 0;
	var message = frm;	
	message = message.replace(/\s/g, "");	
	document.getElementById('count_no_space_char').innerHTML = message.length;
	
	limit = 999;	
	var divider_text = message.substr(limit, 4); 
	document.getElementById('divider').innerHTML = divider_text;
}

function checkByteWO_Space2(frm) {
   
	var totalByte = 0;
	var message = frm;
	
	message = message.replace(/\s/g, "");
	
	document.getElementById('count_no_space_char2').innerHTML = message.length;
}

</script>



<div class='input_box'>‘A sound mind in a sound body.’ </div>
<button onclick="copy()" type="button">클립보드에서 복사하기(IE전용)</button>
<textarea name="content" id="input" cols="77" rows="17" onkeyup="move()"></textarea>
<button onclick="move()" type="button">calc</button>
<br>

<div  id="divider">??</div>
Result:
<div id="Result" data-value="0"></div>
<!-- 양쪽 -->
<div class='main'>
	<div class='column'>	
		Character:
		<div id="count_char" data-value="0"></div>
		NoSpaceCharacter:
		<div id="count_no_space_char" data-value="0"></div>
		Byte:
		<div id="count_byte" data-value="0"></div>
		No space Byte:
		<div id="count_byte_no_space" data-value="0"></div>
		
		<div  class='border' id="output1"></div>
	</div>
	
	<div class='column'>
		NoSpaceCharacter:
		<div id="count_no_space_char2" data-value="0"></div>	
		
		<div  class='border' id="output2"></div>
	</div>	
</div>

</body>
</html>
