define(["underscore" , "backbone" , "classCollection"],function( _ ,Backbone , ClassCollection) {
			var view = Backbone.View.extend({
						initialize : function() {
							
							this.collection = new ClassCollection();
							
							this.listenTo(this.collection , "sync", this.handlerSync);
							
						},
						
						classTemplate : _.template(
								'<h3 id="<%= id %>"><%= name %></h3>'
						),
						
						studentTemplate : _.template(
								'<li id="<%= id %>" ><%= name %> </li>'
						),
						
						render : function() {
							
							this.collection.fetch({
								url : "api/classes",
								reset : true,
								wait : true,
								success : function(collection, data) {
									// 触发sync事件
								},
								error : function(collection, data) {
								
								}
							});
							
							
							return this;
						},
						
						handlerSync : function(){
							
							//　防止命名空间冲突
							var self = this;
							
							this.collection.each(function(model){
								
								self.$el.append ( self.classTemplate({
									id : model.get("id"),
									name : model.get("name")
								}) );
								
								
								var ul = $("<ul></ul>");
								this.$el.append(ul);
								
								console.log(model);
								
								$.each(model.get("students") , function(index , student){
									
									ul.append(self.studentTemplate({
										id : student.id,
										name : student.name
									}));
								});
								
							} , this);
							
						}

					});

			return view;
		});
