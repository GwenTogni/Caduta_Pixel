let centerX = 0.5;
//let centerY;
let isFace = false


//il gioco non si avvia fino a quando non è partita la webcam pt. 1
async function init(callback) {

// Variabili per le coordinate del centro del volto (0.0..1.0)
    let centerX //centerY

// Boolean: il volto è stato individuato (true / false)
    let isFace = false
    //const canvas = document.querySelector('canvas')
    //const ctx = canvas.getContext('2d')

// -- CARICA I MODELLI --------------------------------------

    const MODELS_URI = './lib/face-api/weights'
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODELS_URI)
    //console.log('Tutti i modelli sono stati caricati.')

// -- AVVIA WEBCAM ---------------------------------

    const webcam = document.querySelector('video');

    webcam.addEventListener('play', function() {
        //console.log('Webcam inizializzata e avviata.')
        webcam.width = webcam.videoWidth / 2
        webcam.height = webcam.videoHeight / 2
        avviaFaceDetect(webcam)
    //il gioco non si avvia fino a quando non è partita la webcam pt. 2
        if (typeof callback == 'function') callback()
    })

// -- AVVIA APP -------------------------------------------

    if (navigator.mediaDevices.getUserMedia) {
        return navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            webcam.srcObject = stream
        }).catch(function(error) {
            console.warn('C’è stato un problema con la webcam!')
            console.log(error)
        })
    }
}
// -- FUNZIONI APP ----------------------------------------

    // function setup() {

    // requestAnimationFrame(loop)

    // canvas.width = webcam.videoWidth
    // canvas.height = webcam.videoHeight
    // centerX = 0.5
    // }

    // function loop() {

    // requestAnimationFrame(loop)

    // const width = canvas.width + 200
    // const height = canvas.height

    // // COLORE CANVAS
    // ctx.fillStyle = 'rgb(0,0,0)'
    // // DIMENSIONI CANVAS
    // ctx.fillRect(0, 0, width, height)
    // }

function avviaFaceDetect(videoSrc) {
    console.log('FaceDetect avviato.')

    setInterval(async function() {
        const detections = await faceapi.detectSingleFace(videoSrc, new faceapi.TinyFaceDetectorOptions())
        
        const debug = document.querySelector("#debug")
        
        if (detections) {
            const box = detections.box

            // debug.innerHTML = "width: " + box._width + "<br/>" + "x: " + box._x

        // centerX e centerY sono normalizzati!
            centerX = (box._x + box._width / 2) / videoSrc.videoWidth
            //centerX = (- box._x + box._width * 2) / videoSrc.videoWidth
            //centerY = (box._y + box._height / 2) / videoSrc.videoHeight
            isFace = true
        } else {
            isFace = false
        }
    }, 100) 
} 
