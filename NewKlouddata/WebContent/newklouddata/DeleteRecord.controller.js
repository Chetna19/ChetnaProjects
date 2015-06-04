sap.ui.controller("newklouddata.DeleteRecord", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf newklouddata.DeleteRecord
*/
//	onInit: function() {
//
//	},
	onInit: function() {
		var appid="com.sap.myflight";
		var context={
				serverHost:"192.168.0.77",
				serverPort:"8080",
				https:"false",
		}
	},	
	
	onDelete: function(){
		 var serviceUrl = "/TravelagencyCollection";  
	     //var oModel = new sap.ui.model.odata.ODataModel(serviceUrl,false,"p1794163851","Anjali1#", null,null, null,false);	
	     console.log(oModel);
	     oModel.remove("/TravelagencyCollection('00000698')");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf newklouddata.DeleteRecord
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf newklouddata.DeleteRecord
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf newklouddata.DeleteRecord
*/
//	onExit: function() {
//
//	}

});