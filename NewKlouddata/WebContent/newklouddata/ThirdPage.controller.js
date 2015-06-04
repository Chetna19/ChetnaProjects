sap.ui.controller("newklouddata.ThirdPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf newklouddata.ThirdPage
*/
	onInit: function() {
    var list= this.byId("FlightList");
	list.setModel(oModel);		
	},
	
	handleDetailPress: function(evt){
		console.log("pressed");
		var context = evt.getSource().getBindingContext();
		app.to("idFourthPage1", context);
	},
	actBack:function(){
		app.to("idSecondPage1");
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf newklouddata.ThirdPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf newklouddata.ThirdPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf newklouddata.ThirdPage
*/
//	onExit: function() {
//
//	}

});