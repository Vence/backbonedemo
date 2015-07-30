define([ "backbone", "studentModel" ], 
function(Backbone, StudentModel) {

	var collection = Backbone.Collection.extend({
		model : StudentModel
	});

	return collection;
});