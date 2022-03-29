function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uOzYWNzEt/model.json', modalReady);

}
function modalReady()
{
    classifier.classify(gotResults);
}