
sap.ui.controller("flightapp.camerapage", {
    goBack: function () {
        console.log("back");
        history.back();
    },
    pickme: function () {
      
        this.capture();
        
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
            var image = document.getElementById('__xmlview3--pic');
            image.src = lastUri;
            image.style.margin = "10px";
            image.style.display = "block";
            
            
        };
        function onFailure(message) {
            console.log("camera failed");
        };
        
         
         
    },
   
});