var video = document.querySelector('#video');
var canvas = document.querySelector('#canvas');
var width = 640;
var height = 360;
var cameraStream;

//camera_subDef
function cameraOn() {
          navigator.getMedia = ( navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia ||
                                 navigator.msGetUserMedia);

        navigator.getMedia(
            {
				video: true,
				audio: false
            },
            function(stream) {
                cameraStream = stream;
                if (navigator.mozGetUserMedia) {
                    video.mozSrcObject = stream;
                } else {
                    var vendorURL = window.URL || window.webkitURL;
                    video.src = vendorURL.createObjectURL(stream);
                }
                video.play();
            },
            function(err) {
                console.log("An error occured! " + err);
                window.alert("An error occured! " + err);
            }
        );
}
function cameraOff() {
    cameraStream.stop();
    hasRunOnce = false;
    takepicture();                  // blank the screen to prevent last image from staying
}
video.addEventListener('canplay', function(ev){
    if (!hasRunOnce) {
        height = video.videoHeight / (video.videoWidth/width);
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        hasRunOnce = true;
    }
}, false);
function takepicture() {
    canvas.width = width;
    canvas.height = height;

    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);   
 
    var data = canvas.toDataURL('image/jpeg');
    var imageMessage = new ROSLIB.Message({
        format : "jpeg",
        data : data.replace("data:image/jpeg;base64,", "")
    });

    imageTopic.publish(imageMessage);
}