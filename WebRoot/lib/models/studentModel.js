define(["backbone"],function(Backbone){
	
	var model = Backbone.Model.extend({
		defaults : {
			id : null,
			name : null,
		}
	});
	return model;
});