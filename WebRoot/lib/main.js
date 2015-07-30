require.config({
	
	urlArgs : "timestamp=" + (new Date()).getTime(),
	
	waitSeconds: 60,
	
	paths : {
		
		//lib
		jquery : "jquery-1.11.1",
		underscore : "underscore",
		backbone : "backbone",
		bootstrap : "bootstrap",
		
		// util
		testUtil : "util/testUtil",
		
		//model and collection
		studentModel :"models/studentModel",
		classModel :"models/classModel",
		studentCollecion: "collections/studentCollection",
		classCollection : "collections/classCollection",

		// view
		classMainView : "views/classMainView",
	},
	
	shim : {
		
        bootstrap : {
             deps : [ "jquery" ],
             exports : "$.fn.popover"
        },
        
   }
});

require(["jquery","bootstrap",  "backbone" , "underscore" , "classMainView" , "testUtil" ],
		function($, bootstrap, Backbone , _ , ClassMainView , TestUtil) {

	//覆盖backbone的ajax , 重要点
	Backbone.ajax = TestUtil.ajax;
	
	var view = new ClassMainView({
		el : "#layout-content"
	});
	
	view.render();
	
	// TODO
	
});