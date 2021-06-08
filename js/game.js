class Game {
    constructor(){
        this.button = createButton("START")
        this.playButton = createButton("PLAY")
        this.playButton.hide();
        this.newPlayButton = createButton("PLAY");
        this.newPlayButton.hide();

    }
    start(){
        background(loading_screen);
        this.button.position(880,630);
        this.button.mousePressed(() => {
            this.button.hide();
            gameState = "instructions";
        })
        this.button.addClass('buttonPlay')
    }
    instructions(){
        this.playButton.position(880,630);
        this.playButton.show();
        this.playButton.mousePressed(() => {
            gameState = "lvl_one";
            this.playButton.hide();
        })
        this.playButton.addClass('buttonPlay')
    }
    instructions2(){
        this.newPlayButton.position(880,630);
        this.newPlayButton.show();
        this.newPlayButton.mousePressed(() => {
            this.newPlayButton.hide();
            gameState = 4;
        })
        this.newPlayButton.addClass('buttonPlay')
    }

}