

let schermo = -1;
let y = -20;
let x = 500;
let velocità = 2.5;
let punteggio = 0;
let vite = 3;
let ominoX = 0;
let ominoY = 0;
let audio;

function setup (){
    createCanvas(windowWidth - 90, windowHeight - 200)

    init(function(){
        schermo = 1
    })
}

function windowResized () {
    resizeCanvas(windowWidth - 90, windowHeight - 200)
}

function draw (){
    if(schermo == 0){
        schermataInizio()
    }else if(schermo == 1){
        schermataGioco()
    }else if(schermo == 2){
        schermataGameOver()
    }else if(schermo == 3){
        schermataWin()
    }
}

function schermataInizio () {
    background(50, 50, 150)
    fill(255)
    textAlign(CENTER);
    text('LIVELLO 1', width / 2, height / 2 - 20)
    text('Muoviti spostando la faccia.', width / 2, height / 2 + 20);
    text('Prendi 10 pixel verdi!', width / 2, height / 2 + 40);
    text('Clicca per iniziare.', width / 2, height / 2 + 80);
    ripristina();
}

function schermataGioco () {

    y+=velocità

    background(0)

// verde
    noStroke()
    fill(0,255,0)
    rect(x, y + velocità, 20, 20)

// omino
    fill(200)
    rectMode(CENTER)

    const cx = constrain(map(centerX, 0.7, 0.3, 0, width), 0, width)
    ominoX = ominoX + (cx - ominoX) * 0.1

    ominoY = height-50

    //zampe
    rect(ominoX, ominoY, 5, 5)
    rect(ominoX - 5, ominoY, 5, 5)
    rect(ominoX + 10, ominoY, 5, 5)
    rect(ominoX + 15, ominoY, 5, 5)

    rect(ominoX, ominoY - 5, 5, 5)
    rect(ominoX + 15, ominoY - 5, 5, 5)
    rect(ominoX, ominoY - 10, 5, 5)
    rect(ominoX + 15, ominoY - 10, 5, 5)

    //busto
    rect(ominoX + 10, ominoY - 10, 5, 5)
    rect(ominoX + 5, ominoY - 10, 5, 5)

    rect(ominoX - 10, ominoY - 15, 5, 5)
    rect(ominoX - 5, ominoY - 15, 5, 5)
    rect(ominoX, ominoY - 15, 5, 5)
    rect(ominoX + 5, ominoY - 15, 5, 5)
    rect(ominoX + 10, ominoY - 15, 5, 5)
    rect(ominoX + 15, ominoY - 15, 5, 5)
    rect(ominoX + 20, ominoY - 15, 5, 5)

    rect(ominoX - 15, ominoY - 20, 5, 5)
    rect(ominoX - 10, ominoY - 20, 5, 5)
    rect(ominoX - 5, ominoY - 20, 5, 5)
    rect(ominoX, ominoY - 20, 5, 5)
    rect(ominoX + 5, ominoY - 20, 5, 5)
    rect(ominoX + 10, ominoY - 20, 5, 5)
    rect(ominoX + 15, ominoY - 20, 5, 5)
    rect(ominoX + 20, ominoY - 20, 5, 5)
    rect(ominoX + 25, ominoY - 20, 5, 5)

    rect(ominoX - 15, ominoY - 25, 5, 5)
    rect(ominoX - 10, ominoY - 25, 5, 5)
    rect(ominoX - 5, ominoY - 25, 5, 5)
    rect(ominoX, ominoY - 25, 5, 5)
    rect(ominoX + 5, ominoY - 25, 5, 5)
    rect(ominoX + 10, ominoY - 25, 5, 5)
    rect(ominoX + 15, ominoY - 25, 5, 5)
    rect(ominoX + 20, ominoY - 25, 5, 5)
    rect(ominoX + 25, ominoY - 25, 5, 5)
    rect(ominoX + 30, ominoY - 25, 5, 5)

    rect(ominoX - 15, ominoY - 30, 5, 5)
    rect(ominoX - 10, ominoY - 30, 5, 5)
    rect(ominoX - 5, ominoY - 30, 5, 5)
    rect(ominoX, ominoY - 30, 5, 5)
    rect(ominoX + 5, ominoY - 30, 5, 5)
    rect(ominoX + 10, ominoY - 30, 5, 5)
    rect(ominoX + 15, ominoY - 30, 5, 5)
    rect(ominoX + 20, ominoY - 30, 5, 5)
    rect(ominoX + 25, ominoY - 30, 5, 5)
    rect(ominoX + 30, ominoY - 30, 5, 5)

    rect(ominoX - 15, ominoY - 35, 5, 5)
    rect(ominoX - 10, ominoY - 35, 5, 5)
    rect(ominoX - 5, ominoY - 35, 5, 5)
    rect(ominoX, ominoY - 35, 5, 5)
    rect(ominoX + 5, ominoY - 35, 5, 5)

    //testa
    rect(ominoX - 35, ominoY - 40, 5, 5)
    rect(ominoX - 30, ominoY - 40, 5, 5)
    rect(ominoX - 25, ominoY - 40, 5, 5)
    rect(ominoX - 20, ominoY - 40, 5, 5)
    rect(ominoX - 15, ominoY - 40, 5, 5)
    rect(ominoX - 10, ominoY - 40, 5, 5)
    rect(ominoX - 5, ominoY - 40, 5, 5)
    rect(ominoX, ominoY - 40, 5, 5)

    rect(ominoX - 20, ominoY - 45, 5, 5)
    rect(ominoX - 20, ominoY - 45, 5, 5)
    rect(ominoX - 15, ominoY - 45, 5, 5)
    rect(ominoX - 10, ominoY - 45, 5, 5)
    rect(ominoX - 5, ominoY - 45, 5, 5)

    rect(ominoX - 40, ominoY - 50, 5, 5)
    rect(ominoX - 35, ominoY - 50, 5, 5)
    rect(ominoX - 30, ominoY - 50, 5, 5)
    rect(ominoX - 25, ominoY - 50, 5, 5)
    rect(ominoX - 20, ominoY - 50, 5, 5)
    rect(ominoX - 15, ominoY - 50, 5, 5)
    rect(ominoX - 10, ominoY - 50, 5, 5)
    rect(ominoX - 5, ominoY - 50, 5, 5)

    rect(ominoX - 40, ominoY - 55, 5, 5)
    rect(ominoX - 35, ominoY - 55, 5, 5)
    rect(ominoX - 30, ominoY - 55, 5, 5)
    rect(ominoX - 25, ominoY - 55, 5, 5)
    rect(ominoX - 20, ominoY - 55, 5, 5)
    rect(ominoX - 15, ominoY - 55, 5, 5)
    rect(ominoX - 10, ominoY - 55, 5, 5)
    rect(ominoX - 5, ominoY - 55, 5, 5)

    rect(ominoX - 40, ominoY - 60, 5, 5)
    rect(ominoX - 35, ominoY - 60, 5, 5)
    rect(ominoX - 30, ominoY - 60, 5, 5)
    rect(ominoX - 25, ominoY - 60, 5, 5)
    rect(ominoX - 20, ominoY - 60, 5, 5)
    rect(ominoX - 10, ominoY - 60, 5, 5)
    rect(ominoX - 5, ominoY - 60, 5, 5)

    rect(ominoX - 35, ominoY - 65, 5, 5)
    rect(ominoX - 30, ominoY - 65, 5, 5)
    rect(ominoX - 25, ominoY - 65, 5, 5)
    rect(ominoX - 20, ominoY - 65, 5, 5)
    rect(ominoX - 15, ominoY - 65, 5, 5)
    rect(ominoX - 10, ominoY - 65, 5, 5)

    //coda
    rect(ominoX + 30, ominoY - 35, 5, 5)
    rect(ominoX + 25, ominoY - 35, 5, 5)
    rect(ominoX + 20, ominoY - 35, 5, 5)

    rect(ominoX + 25, ominoY - 40, 5, 5)
    rect(ominoX + 30, ominoY - 40, 5, 5)
    rect(ominoX + 30, ominoY - 45, 5, 5)
    rect(ominoX + 30, ominoY - 50, 5, 5)

    //braccio
    rect(ominoX - 20, ominoY - 25, 5, 5)
    rect(ominoX - 25, ominoY - 25, 5, 5)
    rect(ominoX - 25, ominoY - 20, 5, 5)

    if(schermo == 1){

        //se PRENDI il VERDE
            if(y > ominoY - 60 && x > ominoX - 25 && x < ominoX + 25){
                background(100, 255, 100)

                audio = createAudio('assets/prendi_pixel.mp3');
                audio.autoplay(true);
                
                punteggio+=1
                y = -20
                x = random(20, width-20)
            }
        
        //se NON prendi il VERDE
            if (y > height) {
                y = -20
                x = random(20, width-20)
            }

        //se VINCI
            if (punteggio >= 10){

                audio = createAudio('assets/vittoria.wav');
                audio.autoplay(true);

                document.getElementById("pulsante").style.display = "block"
                schermo = 3
            }
    } 

    fill(255)
    text("punteggio " + punteggio, 70, 30)
}

function schermataWin(){
    background(50, 150, 50)
    textAlign(CENTER);
    fill(255)
    text('MISSIONE COMPIUTA!', width / 2, height / 2 - 20)
    text("punteggio = " + punteggio, width / 2, height / 2 + 20)
    text('Vai al livello 2!', width / 2, height / 2 + 80);
}

class Ostacoli {

    constructor (altezza, velocità, colore) {
        this.x = 0
        this.y = 0
        this.altezza = altezza
        this.velocità = velocità
        this.colore = colore
        this.resetta ()
    }
    
    muovi () {
        this.y += this.velocità
    }

    disegna () {
        noStroke()
        fill(this.colore)
        rect(this.x, this.y, this.altezza)
    }

    resetta () {
        this.y = -20
        this.x = random(20,width-20)
    }
}

function mousePressed(){
    if(schermo == 0){

        audio = createAudio('assets/pulsante.wav');
        audio.autoplay(true);

          schermo = 1
    } else if(schermo == 2){

        audio = createAudio('assets/pulsante.wav');
        audio.autoplay(true);

        schermo = 0
    }
}

function ripristina(){
    punteggio = 0;
    vite = 3;
}