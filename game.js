window.focus();
enchant();

var enemies = [];

window.onload = function(){
    
    var core = new Core(1110, 400);

    core.fps = 15;

    core.preload('./images/chara1.png', './images/monster/monster1.gif');
    core.onload = function(){
        var bear = new Sprite(32,32);
        bear.image = core.assets['./images/chara1.png'];
        
        bear.x = 100;
        bear.y = 0;

        var label = new Label();
        label.x = 1000;
        label.y = 5;
        label.color ='red';
        label.font ='19px "Arial"';

        for(var i = 0; i<80; i++){
            var enemy = new Sprite(50,50);
        
            enemy.image = core.assets['./images/monster/monster1.gif'];
            
            enemy.x = 800  + (i * 10);
            enemy.y = (i * 10);
            enemy.frame = 2;
            core.rootScene.addChild(enemy);

            enemy.addEventListener('enterframe',function(){

                var min = 1 ;
                var max = 3 ;
                
                var val = Math.floor( Math.random() * (max + 1 - min) ) + min ;

                switch (val) {
                    case 1:
                        this.x -= 5;
                        this.y += 2;
                        break;

                    case 2:
                        this.x += 2;
                        this.y -= 5;
                        break;

                    case 3:
                        this.x -= 2;
                        this.y += 5;
                        break;
                }

                if(this.within(bear,10)){
                    // label.text = 'HIT!'
                    var gameover = new Label();
                    gameover.x = 45;
                    gameover.y = 120;
                    gameover.color = "red";
                    gameover.font = '40px "Arial"';
                    gameover.text = 'GAME OVER';
                    // var gameOverScene = new Scene();
                    // gameOverScene.backgroundColor ='white';
                    // core.pushScene(gameOverScene);
                    core.rootScene.addChild(gameover);
                    core.stop();
                }

            })

            
        }


        

 bear.addEventListener('enterframe',function(){
            // this.y += 10;
            // if (this.y >320) {
            //     this.y = 0;
            // }

            if(core.input.left) {
                this.x -= 5;
            }
            if(core.input.right){
                this.x += 5;
            }
            if(core.input.up){
                this.y -= 5;
            }
            if(core.input.down){
                this.y += 5;
            }
            if(this.within(enemy,10)){
            // label.text = 'HIT!'
            core.pushScene(gameOverScene);
            core.stop();

            }

            bear.on('touchstart',function(){
                core.rootScene.removeChild(this);
            })

            core.rootScene.on('touchstart',function(e){
                bear.x = e.x;
                bear.y = e.y;
            })
        });
            
        core.rootScene.addChild(bear);
        

       
       
        label.on('enterframe',function(){
            label.text = core.frame;
        })

        core.rootScene.addChild(label);
    }

    core.rootScene.backgroundColor = "black";
    core.start();

};
