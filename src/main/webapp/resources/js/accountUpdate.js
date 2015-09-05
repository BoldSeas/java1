/**
 * It provides for the accountUpdate.jsp .
 */
	/**
	* 文本框成功样式
	*/
	function showSuccessStyle(divId){
		$(divId).removeClass("has-error").addClass("has-success");
	}
	/**
	* 文本框错误样式
	*/
	function showErrorStyle(divId){
		$(divId).removeClass("has-success").addClass("has-error");
	}
	/**
	* 显示提示信息
	*/
	function showErrorNotice(divId,content){
		$(divId).html(content);
	}
	/**
	*切换文本框后面的图标
	*/
	function changeGlyphicon(divId,removeIcon,addIcon){
		$(divId).removeClass(removeIcon).addClass(addIcon);
	}
	
	/**
	 *  查看旧的密码是不是空的
	 */
	function checkOldPwd(){
		var oldPwd = $("#inputPassword").val();
		if(oldPwd.length==0){
			showErrorStyle("#pwdDiv");
			changeGlyphicon("#pwdDivSpan","glyphicon-ok","glyphicon-remove");
			showErrorNotice("#pwdDivMsg","请输入您的旧密码！");
			return false;
		}else{
			showSuccessStyle("#pwdDiv");
			changeGlyphicon("#pwdDivSpan","glyphicon-remove","glyphicon-ok");
			showErrorNotice("#pwdDivMsg","");
			return true;
		}
	}
	
	/**
	 * 填写的新的密码的空的校验
	 */
	function checkNewPwd(){
		var newPwd = $("#inputPasswordNew1").val();
		if(newPwd.length==0){
			showErrorStyle("#newPwdDiv");
			changeGlyphicon("#newPwdDivSpan","glyphicon-ok","glyphicon-remove");
			showErrorNotice("#newPwdDivMsg","请输入您的新密码！");
			return false;
		}else if(newPwd.length<6){
			showErrorStyle("#newPwdDiv");
			changeGlyphicon("#newPwdDivSpan","glyphicon-ok","glyphicon-remove");
			showErrorNotice("#newPwdDivMsg","请输入6位及以上的密码！");
			return false;
		}else{
			showSuccessStyle("#newPwdDiv");
			changeGlyphicon("#newPwdDivSpan","glyphicon-remove","glyphicon-ok");
			showErrorNotice("#newPwdDivMsg","");
			return true;
		}
	}
	
	function checkNewPwd2(){
		var pwd2 = $("#inputPasswordNew2").val();
		if(pwd2.length==0){
			showErrorStyle("#newPwdDiv2");
			changeGlyphicon("#newPwdDiv2Span","glyphicon-ok","glyphicon-remove");
			showErrorNotice("#newPwdDiv2Msg","请输入您的确认新密码！");
			return false;
		}else if(pwd2.length<6){
			showErrorStyle("#newPwdDiv2");
			changeGlyphicon("#newPwdDiv2Span","glyphicon-ok","glyphicon-remove");
			showErrorNotice("#newPwdDiv2Msg","请输入6位及以上的确认新密码！");
			return false;
		}else{
			checkpwd();
		}
	}
	
	function checkpwd(){
		var pwd1 = $("#inputPasswordNew1").val();
		var pwd2 = $("#inputPasswordNew2").val();
		if(pwd1 == pwd2){
			showSuccessStyle("#newPwdDiv");
			showSuccessStyle("#newPwdDiv2");
			changeGlyphicon("#newPwdDiv2Span","glyphicon-remove","glyphicon-ok");
			showErrorNotice("#newPwdDiv2Msg","");
			return true;
		}
		else{
			showErrorStyle("#newPwdDiv");
			showErrorStyle("#newPwdDiv2");
			changeGlyphicon("#newPwdDiv2Span","glyphicon-ok","glyphicon-remove");
			showErrorNotice("#newPwdDiv2Msg","两次填写的密码不一致，请重新输入！");
			return false;
		}
	}
	
	function submit(){
		var flag = false;
		flag = (checkOldPwd() && checkNewPwd() && checkNewPwd2());
		if(flag){
			$("#up-form").submit();
		}
		else{
			return ;
		}
	}