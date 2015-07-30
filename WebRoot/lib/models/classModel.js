define(["backbone"],function(Backbone){
	
	var model = Backbone.Model.extend({
		defaults : {
			id : null,
			name : null,
			students : null,
		}
	});
	return model;
});