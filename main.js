//https://teachablemachine.withgoogle.com/models/mJYGykrMh/model.json

//its about drive its about power we stay hungry we devour

function startRecognizing()
{
    navigator.mediaDevices.getUserMedia({audio: true});
   classifier =  ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mJYGykrMh/model.json", modelReady());
}

function modelReady()
{
    classifier.classify(gotresults());
}

function gotresults()
{
    console.log("Results have been loaded!");
    console.log("GL :D");
}