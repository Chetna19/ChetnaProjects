sap.ui.controller("newklouddata.CreatePage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf newklouddata.CreatePage
*/
//	onInit: function() {
//
//	},
//	onInit: function() {
//		var appid="com.sap.myflight";
//		var context={
//				serverHost:"192.168.0.77",
//				serverPort:"8080",
//				https:"false",
//		}
//	},	
//	onCreate: function(){
//		 var serviceUrl = "/TravelagencyCollection";  
//         //var oModel = new sap.ui.model.odata.ODataModel(serviceUrl,false,"p1794163851","Anjali1#", null,null, null,false);	
//         console.log(oModel);
//         //sap.ui.getCore().setModel(oModel);
//         var parameters={
//        		 "agencynum":"00000698",
//        		 "NAME":"chetna",
//        		 "URL":"www.gma.com",
//        		 "LANGU":"G"	 
//         }
//         
//         oModel.create("/TravelagencyCollection",parameters);
//	},
	
	onPressBack:function(){
		app.to("idFourthPage1");
	},
	 
	onPress:function(){}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf newklouddata.CreatePage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf newklouddata.CreatePage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf newklouddata.CreatePage
*/
//	onExit: function() {
//
//	}

});