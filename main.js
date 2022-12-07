Webcam.set({
    width: 400,
    height: 300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    })
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qCwQbe7x1/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model is loaded');
}

function speak(){
    var synth  = window.speechSynthesis;
    speakdata1 = "The first prediction is: "+prediction1;
    speakdata2 = "The second prediction is: "+prediction2;
    var utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterthis);
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
     if(error)
     {
         console.log(error);
     }
     else{
         console.log(results);
         document.getElementById("result_gesture_name").innerHTML = results[0].label;
         document.getElementById("result_gesture_name1").innerHTML = results[1].label;
         prediction1 = results[0].label;
         prediction2 = results[1].label;
         speak();

         if(results[0].label=="Ok")
         {
             document.getElementById("update_gesture").innerHTML;
         }

         if(results[0].label=="ThumbsUp")
         {
             document.getElementById("update_gesture").innerHTML;
         }

         if(results[0].label=="Pointer")
         {
             document.getElementById("update_gesture").innerHTML;
         }

         if(results[1].label=="Ok")
         {
             document.getElementById("update_gesture1").innerHTML;
         }

         if(results[1].label=="ThumbsUp")
         {
             document.getElementById("update_gesture1").innerHTML;
         }

         if(results[1].label=="Pointer")
         {
             document.getElementById("update_gesture1").innerHTML;
         }
     }
}