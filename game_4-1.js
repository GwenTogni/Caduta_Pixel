

let palline = []
let schermo = -1;
let y2 = -10000;
let x2 = 0;
let velocità = 2.5;
let punteggio = 0;
let vite = 3;
let ominoX = 0
let ominoY = 0

function setup (){
    createCanvas(windowWidth -90, windowHeight - 200)

    init(function(){
        schermo = 0
    })

//le palline cadono a caso
    for (let i=0; i<5; i++){
        palline[i] = new Ostacoli (
            random(50, 200),
            random(0.5, 3),
            color(0,255,0)
        )
    }
}

function windowResized () {
    resizeCanvas(windowWidth -90, windowHeight - 200)
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
    text('LIVELLO BONUS', width / 2, height / 2 - 20)
    text('Prendi tutti i megapixel verdi che riesci!', width / 2, height / 2 + 20);
    text('Clicca per iniziare.', width / 2, height / 2 + 80);
    ripristina();
}

function schermataGioco () {

    y2+=velocità

    background(0)

//arrivo
    fill(50)
    rectMode(CENTER)
    rect(x2,y2,windowWidth*2,windowHeight)

// omino
    fill(200)
    rectMode(CENTER)

    const cx = constrain(map(centerX, 0.7, 0.3, 0, width), 0, width)
    ominoX = ominoX + (cx - ominoX) * 0.2

    const ominoY = height-50

    //faccia
    rect(ominoX + 35, ominoY, 5, 5)
    rect(ominoX + 30, ominoY, 5, 5)
    rect(ominoX + 25, ominoY, 5, 5)
    rect(ominoX + 20, ominoY, 5, 5)
    rect(ominoX + 15, ominoY, 5, 5)
    rect(ominoX + 10, ominoY, 5, 5)
    rect(ominoX + 5, ominoY, 5, 5)
    rect(ominoX, ominoY, 5, 5)
    rect(ominoX - 5, ominoY, 5, 5)
    rect(ominoX - 10, ominoY, 5, 5)
    rect(ominoX - 15, ominoY, 5, 5)
    rect(ominoX - 20, ominoY, 5, 5)
    rect(ominoX - 25, ominoY, 5, 5)
    rect(ominoX - 30, ominoY, 5, 5)
    rect(ominoX - 35, ominoY, 5, 5)

    rect(ominoX - 35, ominoY - 5, 5, 5)
    rect(ominoX - 35, ominoY - 10, 5, 5)
    rect(ominoX - 35, ominoY - 15, 5, 5)
    rect(ominoX - 35, ominoY - 20, 5, 5)
    rect(ominoX - 35, ominoY - 25, 5, 5)
    rect(ominoX - 35, ominoY - 30, 5, 5)
    rect(ominoX - 35, ominoY - 35, 5, 5)
    rect(ominoX - 35, ominoY - 40, 5, 5)
    rect(ominoX - 35, ominoY - 45, 5, 5)

    rect(ominoX + 35, ominoY - 5, 5, 5)
    rect(ominoX + 35, ominoY - 10, 5, 5)
    rect(ominoX + 35, ominoY - 15, 5, 5)
    rect(ominoX + 35, ominoY - 20, 5, 5)
    rect(ominoX + 35, ominoY - 25, 5, 5)
    rect(ominoX + 35, ominoY - 30, 5, 5)
    rect(ominoX + 35, ominoY - 35, 5, 5)

    rect(ominoX - 30, ominoY - 50, 5, 5)
    rect(ominoX - 25, ominoY - 50, 5, 5)
    rect(ominoX - 20, ominoY - 50, 5, 5)
    rect(ominoX - 15, ominoY - 50, 5, 5)

    rect(ominoX - 5, ominoY - 50, 5, 5)
    rect(ominoX, ominoY - 50, 5, 5)
    rect(ominoX + 5, ominoY - 50, 5, 5)
    rect(ominoX + 10, ominoY - 50, 5, 5)

    rect(ominoX - 10, ominoY - 45, 5, 5)
    rect(ominoX + 15, ominoY - 45, 5, 5)

    rect(ominoX - 10, ominoY - 40, 5, 5)
    rect(ominoX - 5, ominoY - 40, 5, 5)
    rect(ominoX, ominoY - 40, 5, 5)
    rect(ominoX + 5, ominoY - 40, 5, 5)
    rect(ominoX + 10, ominoY - 40, 5, 5)
    rect(ominoX + 15, ominoY - 40, 5, 5)
    rect(ominoX + 20, ominoY - 40, 5, 5)
    rect(ominoX + 25, ominoY - 40, 5, 5)
    rect(ominoX + 30, ominoY - 40, 5, 5)

    //occhi
    rect(ominoX - 20, ominoY - 25, 5, 5)
    rect(ominoX - 25, ominoY - 30, 5, 5)
    rect(ominoX - 25, ominoY - 20, 5, 5)
    rect(ominoX - 15, ominoY - 30, 5, 5)
    rect(ominoX - 15, ominoY - 20, 5, 5)

    rect(ominoX + 20, ominoY - 25, 5, 5)
    rect(ominoX + 25, ominoY - 20, 5, 5)
    rect(ominoX + 25, ominoY - 30, 5, 5)
    rect(ominoX + 15, ominoY - 20, 5, 5)
    rect(ominoX + 15, ominoY - 30, 5, 5)

    //bocca
    rect(ominoX + 5, ominoY - 10, 5, 5)
    rect(ominoX + 10, ominoY - 10, 5, 5)
    rect(ominoX, ominoY - 10, 5, 5)
    rect(ominoX - 5, ominoY - 10, 5, 5)
    rect(ominoX + 15, ominoY - 5, 5, 5)

    if(schermo == 1){

        for (let i=0; i<palline.length; i++) {

            palline[i].muovi()
        
        //se schivi il VERDE
            if (palline[i].y>height + palline[i].altezza){
                palline[i].resetta ()
            }
        
        //se prendi il VERDE
            if (palline[i].y > ominoY - palline[i].altezza && palline[i].y < ominoY && palline[i].x >= ominoX - palline[i].altezza && palline[i].x < ominoX + palline[i].altezza){
                background(0, 255, 100)
                audio = createAudio('assets/prendi_pixel.mp3');
                audio.autoplay(true);
                palline[i].resetta ()
                punteggio+=1
            }
            
        //aumenta la velocità quando aumenta il punteggio
            if (punteggio>=3) {
                palline[i].velocità += 0.01
            }
            
        //la velocità si resetta
            if (punteggio<1) {
                palline[i].velocità = random(0.5, 2)
            }
        
        //vittoria
            if (y2 + 500 >= ominoY){
                audio = createAudio('assets/vittoria.wav');
                audio.autoplay(true);

                document.getElementById("pulsante1").style.display = "block"
                document.getElementById("pulsante2").style.display = "block"
                document.getElementById("pulsante3").style.display = "block"
                schermo = 3
            }
    
            palline[i].disegna ()
        }
    } 

    fill(255)
    text("punteggio " + punteggio, 70, 30)
    text("vite " + vite, 250,30)
}

function schermataGameOver(){
    background(80)
    textAlign(CENTER);
    fill(255)
    text('GAME OVER', width / 2, height / 2 - 20)
    text("punteggio = " + punteggio, width / 2, height / 2 + 20)
    text('Clicca per provare di nuovo.', width / 2, height / 2 + 80);
}

function schermataWin(){
    background(50, 150, 50)
    textAlign(CENTER);
    fill(255)
    text('MISSIONE COMPIUTA!', width / 2, height / 2 - 20)
    text("punteggio = " + punteggio, width / 2, height / 2 + 20)
    text('Complimenti! Hai completato il gioco!', width / 2, height / 2 + 80);
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
        this.y+=this.velocità
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
    punteggio=0;
    vite=3;
    y2=-5000
}
