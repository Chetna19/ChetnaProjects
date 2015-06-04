
var Loc = { lastPosition: { longitude: null, latitude: null, address: null } };

sap.ui.controller("flightapp.details", {
  
    onInit: function () {

        this.router = sap.ui.core.UIComponent.getRouterFor(this);
        this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

    },
    _handleRouteMatched: function (evt) {
        if ("details" !== evt.getParameter("name")) {
            return;
        }

        console.log("I m handled");

        var list = this.byId("details");
        var jModel = new sap.ui.model.json.JSONModel();


        var carrid = evt.getParameter("arguments").carrid;
        var connid = evt.getParameter("arguments").connid;
        var fldate = evt.getParameter("arguments").fldate;

        var path = "/FlightCollection(carrid='" + carrid + "',connid='" + connid + "',fldate=datetime'" + fldate + "')";
        oModel.read(path, null, null, false,

            function (odata, response) {
                //console.log("data recieved" + odata.results[0].carrid);
                jModel.setData(odata);
            }

        );


        //this.getView().setModel(jModel, "airlines");
        this.getView().setModel(jModel);
        //list.setModel(jModel, "airlines");

        //list.bindItems("/airlines");
    },
    goBack: function () { },

    getDetails: function (evt) {

        var source = evt.getSource();
        var context = evt.getSource().getBindingContext();
        var uri = context.oModel.oData[0].__metadata.uri;
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router.navTo("details", { sPath: uri }, false);
    },
    pickme: function () {
        console.log("handled");
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router.navTo("camerapage", false);
        //this.capture();
    },
    capture: function () {
        navigator.camera.getPicture(onSuccess, onFailure, {
            quality: 100,
            targetWidth: 400,
            targetHeight: 400,
            destinationType: Camera.DestinationType.FILE_URL,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            correctOrientation: true
        });

        function onSuccess(imageData) {
            console.log("success");
            var lastUri = imageData;
            var image = document.getElementById('__xmlview2--pic');
            image.src = lastUri;
            image.style.margin = "10px";
            image.style.display = "block";

        };
        function onFailure(message) {
            console.log("camera failed");
        }
    },
    findme: function () {
        //this.locate();
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router.navTo("geo", false);
    },

    locate: function () {
        var loc;
        navigator.geolocation.getCurrentPosition(
      function (position) {
         

          //Loc.lastPosition = {
          //    latitude: position.coords.latitude, longitude: position.coords.longitude,
          //    address: "(" + position.coords.latitude + ", " + position.coords.longitude + ")"
          //};
          Loc.lastPosition.longitude = position.coords.longitude;
          Loc.lastPosition.latitude = position.coords.latitude;
          Loc.lastPosition.address = "(" + position.coords.latitude + ", " + position.coords.longitude + ")";
          
      },
      function () {
          consoel.log('Error getting location');
      }, { maximumAge: 3000, timeout: 70000, enableHighAccuracy: true });

        this.updatePosition();
    },
    goBack: function () {
        history.back();
    },
    updatePosition: function () {

        var apiKey = "AhTTNOioICXvPRPUdr0_NAYWj64MuGK2msfRendz_fL9B1U6LGDymy2OhbGj7vhA";
        var url = "http://dev.virtualearth.net/REST/v1/Locations/" + Loc.lastPosition.latitude + ","
            + Loc.lastPosition.longitude + "?o=json&key=" + apiKey;
        WinJS.xhr({
            url: url,
        }).done(function (result) {
            if (result.responseText) {
                var response = JSON.parse(result.responseText);
                var address = null;

                //Dig down into the JSON response for the address, checking that there's data
                //every step of the way.
                address = response && response.resourceSets && response.resourceSets[0]
                    && response.resourceSets[0].resources && response.resourceSets[0].resources[0]
                    && response.resourceSets[0].resources[0].address.formattedAddress;

                if (address != null && Loc.lastPosition != null) {
                    Loc.lastPosition.address = address;
                }
            }

            var locationOutput = document.getElementById("__xmlview2--txtLocation");
            locationOutput.value = Loc.lastPosition.address;
            var map = new Microsoft.Maps.Map(document.getElementById("__xmlview2--mapDiv"),
                          {
                              credentials: "AhTTNOioICXvPRPUdr0_NAYWj64MuGK2msfRendz_fL9B1U6LGDymy2OhbGj7vhA",
                              center: new Microsoft.Maps.Location(Loc.lastPosition.latitude, Loc.lastPosition.longitude),
                              mapTypeId: Microsoft.Maps.MapTypeId.road,
                              zoom: 7
                          });
            //search_createMapPin(result, map);

        }, function (e) {
            console.log("Request to Bing Maps failed, using coordinates directly");
            if (lastPosition != null) {
                locationOutput.value = lastPosition.address;
            }
        });
    }

});