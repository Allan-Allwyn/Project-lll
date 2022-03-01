Prediction_1 = "victrory";
Prediction_2 = "thumbs up";

Webcam.set({
    width :350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo_clicked" src="'+data_uri+'">';
    });
}


console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vs1T09xuZ/.json',modelLoaded);

function modelLoaded(){
    console.log('model loaded!');
}

function speak(){
var synth = window.speechSynthesis;
speak_data_1="The first prediction is "+Prediction_1;
speak_data_2="And the second prediction is "+Prediction_2;
var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(utterThis);
}