

init()

async function init() {

    // -- 1. carica i modelli -----------------------------------------
    const MODELS_URI = './lib/face-api/weights'
    await loadModels(MODELS_URI)
    console.log('Tutti i modelli sono stati caricati.')

    // -- 2. inizializza la webcam ------------------------------------
    const webcam = document.querySelector('video');
    startVideoStream(webcam)

    // -- 3. avvia l’app ----------------------------------------------
    webcam.addEventListener('play', function() {
        console.log('Webcam inizializzata e avviata.')
        webcam.width = webcam.videoWidth
        webcam.height = webcam.videoHeight
        run()
    })

    async function loadModels(uri) {

        console.log('Carico ssdMobilenetv1...')
        await faceapi.nets.ssdMobilenetv1.loadFromUri(uri)

        console.log('Carico ageGenderNet...')
        await faceapi.nets.ageGenderNet.loadFromUri(uri)
    }

    // -------------------------------------------------------------

    function startVideoStream(el) {
        if (navigator.mediaDevices.getUserMedia) {
            return navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                el.srcObject = stream
            }).catch(function(error) {
                console.warn('C’è stato un problema con la webcam!')
                console.log(error)
            })
        }
    }

    // -------------------------------------------------------------

    function getMaxValue(obj) {
        let max = 0
        let key = ''
        for (const k in obj) {
            if (obj[k] > max) {
                max = obj[k]
                key = k
            }
        }
        return {
            key : key,
            value : max
        }
    }

    function run() {
        const canvas = document.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        const pre = document.querySelector('pre')

        const displaySize = { width: webcam.videoWidth, height: webcam.videoHeight }

        canvas.width = webcam.videoWidth
        canvas.height = webcam.videoHeight

        setInterval(async function() {

        // Riconosce i tratti del volto
            const detections = await faceapi.detectSingleFace(webcam).withAgeAndGender()

            if (detections) {
                const data = faceapi.resizeResults(detections, displaySize)

            // -- cancelliamo il canvas ------------------------
                ctx.fillStyle = 'rgb(220,220,220)'
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                ctx.fillStyle = 'rgb(0,0,0)'
                text = 'avatar'

            // -- età e sesso ----------------------------------
                // pre.innerHTML = '<br>età\n' + Math.round(data.age) + '<br>avatar in base agli anni'
                pre.innerHTML = 'Qualcosa è andato storto. <br>Tastiera non trovata. Connessione alla tastiera assente. <br>Guasto allo schermo: caduta pixel! <br><br>Prova a salvarti usando solo mouse e webcam.'

                if (data.age > 50) {
                    ctx.fillStyle = 'rgb(220,220,220)'
                    ctx.fillRect(0, 0, canvas.width, canvas.height)

                    document.getElementById("pulsante1").style.display = "none"
                    document.getElementById("pulsante2").style.display = "none"
                    document.getElementById("pulsante3").style.display = "block"

                //limite
                    ctx.fillStyle = 'rgb(0,0,0)'
                //testa
                    ctx.fillRect(160, 40, 160, 20)
                    ctx.fillRect(140, 60, 140, 20)
                    ctx.fillRect(300, 60, 40, 20)
                    ctx.fillRect(140, 80, 200, 60)
                    ctx.fillRect(240, 140, 100, 20)
                    ctx.fillRect(180, 160, 160, 20)
                //busto
                    ctx.fillRect(260, 180, 100, 20)
                    ctx.fillRect(260, 200, 120, 20)
                    ctx.fillRect(220, 220, 180, 20)
                    ctx.fillRect(220, 240, 20, 20)
                    ctx.fillRect(260, 240, 160, 20)
                    ctx.fillRect(260, 260, 260, 40)
                    ctx.fillRect(260, 300, 240, 20)
                    ctx.fillRect(280, 320, 200, 20)
                    ctx.fillRect(300, 340, 160, 20)
                    ctx.fillRect(320, 360, 120, 20)
                //zampe
                    ctx.fillRect(320, 380, 40, 20)
                    ctx.fillRect(320, 380, 40, 20)
                    ctx.fillRect(400, 380, 40, 20)
                    ctx.fillRect(320, 400, 20, 20)
                    ctx.fillRect(420, 400, 20, 20)
                    ctx.fillRect(300, 420, 40, 20)
                    ctx.fillRect(400, 420, 40, 20)
                //coda
                    ctx.fillRect(460, 240, 60, 20)
                    ctx.fillRect(480, 220, 40, 20)
                    ctx.fillRect(500, 180, 20, 40)

                } else if (data.age > 20){
                    document.getElementById("pulsante1").style.display = "none"
                    document.getElementById("pulsante2").style.display = "block"
                    document.getElementById("pulsante3").style.display = "none"

                    ctx.fillStyle = 'rgb(220,220,220)'
                    ctx.fillRect(0, 0, canvas.width, canvas.height)
                //limite
                    ctx.fillStyle = 'rgb(0,0,0)'
                //occhi
                    ctx.fillRect(270, 160, 20, 40)
                //bocca
                    ctx.fillRect(290, 280, 60, 20)
                    ctx.fillRect(270, 300, 20, 20)
                    ctx.fillRect(350, 300, 20, 20)
                //faccia
                    ctx.fillRect(210, 100, 20, 280)
                    ctx.fillRect(410, 160, 20, 220)
                    ctx.fillRect(210, 100, 160, 20)
                    ctx.fillRect(230, 360, 200, 20)
                //piega
                    ctx.fillRect(330, 100, 20, 100)
                    ctx.fillRect(330, 180, 100, 20)
                    ctx.fillRect(370, 120, 20, 20)
                    ctx.fillRect(390, 140, 20, 20)

                } else {
                    ctx.fillStyle = 'rgb(220,220,220)'
                    ctx.fillRect(0, 0, canvas.width, canvas.height)

                    document.getElementById("pulsante1").style.display = "block"
                    document.getElementById("pulsante2").style.display = "none"
                    document.getElementById("pulsante3").style.display = "none"

                //limite
                    ctx.fillStyle = 'rgb(0,0,0)'
                //testa
                    ctx.fillRect(160, 140, 20, 200)
                    ctx.fillRect(180, 120, 80, 20)
                    ctx.fillRect(280, 120, 80, 20)
                    ctx.fillRect(260, 140, 20, 20)
                    ctx.fillRect(360, 140, 20, 20)
                    ctx.fillRect(260, 160, 180, 20)
                    ctx.fillRect(440, 180, 20, 160)
                    ctx.fillRect(180, 320, 260, 20)

                //bocca
                    ctx.fillRect(280, 280, 80, 20)
                    ctx.fillRect(300, 280, 80, 20)
                    ctx.fillRect(380, 300, 20, 20)

                //occhi
                    ctx.fillRect(380, 220, 20, 20)
                    ctx.fillRect(400, 200, 20, 20)
                    ctx.fillRect(400, 240, 20, 20)
                    ctx.fillRect(360, 240, 20, 20)
                    ctx.fillRect(360, 200, 20, 20)

                    ctx.fillRect(220, 220, 20, 20)
                    ctx.fillRect(200, 200, 20, 20)
                    ctx.fillRect(240, 200, 20, 20)
                    ctx.fillRect(200, 240, 20, 20)
                    ctx.fillRect(240, 240, 20, 20)
                }
            }
        }, 60)
    }
}