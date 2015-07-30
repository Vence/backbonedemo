<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<!--  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0"/> -->

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
	      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
	    <![endif]-->

<title>TEWorks</title>


<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css"/>
<link rel="stylesheet" type="text/css" href="css/main-layout.css"/>


<!--data-main="main"，等号右边的main指的main.js,相当于入口-->
<script type="text/javascript" data-main="lib/main" src="lib/require.js"></script>

</head>

<body >

	<div id="layout-header" class="notprint"><h2>Backbone Demo</h2></div>


	<div id="layout-wraper">
		<div id="layout-content" class="browser_print" style="overflow-y: auto;">
		</div>
	</div>

	<div id="layout-left" class="notprint"></div>

	<div id="layout-footer" class="notprint" style="z-index:1000">版权所有&copy; Copyright 王文路</div>

	<!--  提示框 -->
	<div id="test_tooltip" data-toggle="tooltip"></div>

	<!-- 弹出框 -->
	<div class="modal" id="test_dialog"></div>

</body>
</html>
