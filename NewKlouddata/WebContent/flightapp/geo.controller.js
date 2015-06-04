var Loc = { lastPosition: { longitude: null, latitude: null, address: null } };

sap.ui.controller("flightapp.geo", {

    init: function () {

        this.router = sap.ui.core.UIComponent.getRouterFor(this);
        this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
       
    },

    _handleRouteMatched: function (evt) {
        //this.findme();
    },
    findme: function () {
        this.locate();
    },
    goBack: function () {
        console.log("back");
        history.back();
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
          console.log('Error getting location');
      }, { maximumAge: 3000, timeout: 70000, enableHighAccuracy: true });

        this.updatePosition();
    },

    updatePosition: function () {

        var apiKey = "AhTTNOioICXvPRPUdr0_NAYWj64MuGK2msfRendz_fL9B1U6LGDymy2OhbGj7vhA";
        var url = "http://dev.virtualearth.net/REST/v1/Locations/" + Loc.lastPosition.latitude + ","
            + Loc.lastPosition.longitude + "?o=json&key=" + apiKey;
        $.ajax({
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

                if (address != null) {
                    Loc.lastPosition.address = address;
                }
            }

            var locationOutput = document.getElementById("__xmlview3--txtLocation");
            locationOutput.value = Loc.lastPosition.address;

            //used bing map
            var map = new Microsoft.Maps.Map(document.getElementById("__xmlview3--mapDiv"),
                          {
                              credentials: "AhTTNOioICXvPRPUdr0_NAYWj64MuGK2msfRendz_fL9B1U6LGDymy2OhbGj7vhA",
                              center: new Microsoft.Maps.Location(Loc.lastPosition.latitude, Loc.lastPosition.longitude),
                              mapTypeId: Microsoft.Maps.MapTypeId.road,
                              zoom: 7
                          });

            //map.entities.clear();
            var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
            map.entities.push(pushpin);
            //search_createMapPin(result, map);

        }, function (e) {
            console.log("Request to Bing Maps failed, using coordinates directly");
            if (Loc.lastPosition != null) {
                var locationOutput = document.getElementById("__xmlview3--txtLocation");
                locationOutput.value = Loc.lastPosition.address;
            }
        });
    },

   GetMap:function(){
   
      

   }


})