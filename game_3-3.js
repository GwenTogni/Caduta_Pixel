

let palline = [];
let schermo = -1;
let y1 = -20;
let x1 = 300;
let velocità = 1;
let punteggio = 0;
let vite = 3;
let ominoX = 0
let ominoY


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
            color(255,0,0)
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
    text('LIVELLO 3', width / 2, height / 2 - 20)
    text('Schiva i megapixel rossi!', width / 2, height / 2 + 20);
    text('Salva 10 pixel verdi!', width / 2, height / 2 + 40);
    text('Clicca per iniziare.', width / 2, height / 2 + 80);
    ripristina();
}

function schermataGioco () {

    y1+=velocità

    background(0)

// verde
    noStroke()
    fill(0,255,0)
    rect(x1, y1 + velocità, 20, 20)

// omino
    fill(200)
    rectMode(CENTER)

    const cx = constrain(map(centerX, 0.7, 0.3, 0, width), 0, width)
    ominoX = ominoX + (cx - ominoX) * 0.1
    
    const ominoY = height-50

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

            for (let i=0; i<palline.length; i++) {

                palline[i].muovi()
            
    //movimenti rosso e verde
        //se il verde cade
            if(y1 >= height){
                y1=-20
                x1=random(width/4, width-width/4)
            }

        //se prendi il verde
            if(y1 > ominoY - 60 && x1 > ominoX - 25 && x1 < ominoX + 25){
                background(100, 255, 100)

                audio = createAudio('assets/prendi_pixel.mp3');
                audio.autoplay(true);

                y1=-20
                x1=random(width/4, width-width/4)
                punteggio+= 1
            }

        //se schivi il rosso
            if (palline[i].y>height + palline[i].altezza){
                palline[i].resetta ()
            }
        
        //se prendi il rosso
            if (palline[i].y > height - 10 - palline[i].altezza && palline[i].y < height - 10 && palline[i].x >= ominoX- palline[i].altezza/2 && palline[i].x<ominoX+ palline[i].altezza/2){
                background(255, 100, 100)

                audio = createAudio('assets/scontro.wav');
                audio.autoplay(true);

                palline[i].resetta ()
                vite-=1
            }
        
        //la velocità aumenta se aumenta il punteggio
            if(punteggio>=3){
                velocità += 0.0005
                palline[i].velocità += 0.005
            }

        //sconfitta
            if(vite<1){

                audio = createAudio('assets/game_over.wav');
                audio.autoplay(true);

                schermo = 2
            }

        //la velocità si resetta
            if (punteggio<1) {
                palline[i].velocità = random(0.5, 2)
                velocità = 1
            }

        //vittoria
            if(punteggio>=10){

                audio = createAudio('assets/vittoria.wav');
                audio.autoplay(true);

                document.getElementById("pulsante").style.display = "block"
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
    text("vite restanti = " + vite, width / 2, height / 2 + 40)
    text('Vai al livello BONUS!', width / 2, height / 2 + 80);
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
        ripristina()
        schermo = 1
    }
}

function ripristina(){
    punteggio=0;
    vite=3;
    y1=-20;
    this.velocità = random (0.5, 3)
    velocità = 1
}
