define([ "backbone", "classModel" ], 
function(Backbone, ClassModel) {

	var collection = Backbone.Collection.extend({
		model : ClassModel
	});

	return collection;
});