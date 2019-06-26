window.focus();
enchant();

window.onload = function(){
    
    var core = new Core(1110, 400);

    core.fps = 15;

    core.preload('./images/chara2.png', './images/monster/monster1.gif');
    core.onload = function(){
        var bear = new Sprite(32,32);
        bear.image = core.assets['./images/chara2.png'];
        
        bear.x = 100;
        bear.y = 0;

        var enemy = new Sprite(50,50);
        enemy.image = core.assets['./images/monster/monster1.gif'];
        
        enemy.x = 400;
        enemy.y = 0;

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

            bear.on('touchstart',function(){
                core.rootScene.removeChild(this);
            })

            core.rootScene.on('touchstart',function(e){
                bear.x = e.x;
                bear.y = e.y;
            })
        });

        core.rootScene.addChild(bear);
        core.rootScene.addChild(enemy);

        var label = new Label();
        label.x = 1000;
        label.y = 5;
        label.color ='red';
        label.font ='19px "Arial"';
        label.text = '0';
        label.on('enterframe',function(){
            label.text = core.frame;
        })

        core.rootScene.addChild(label);
    }

    core.rootScene.backgroundColor = "black";
    core.start();

};
