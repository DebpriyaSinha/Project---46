function Hammer(){
    hammer = createSprite(thor.x,thor.y,50,75);
    hammer.addImage("shoot",hammer_img);
    hammer.scale=0.16
    hammer.velocityX=20;
    hammer.lifetime=500;
    hammerGroup.add(hammer);
}

function Villain(){
    if(frameCount%60===0){
    

        villain = createSprite(width+10,Math.round(random(0,900)),20,200);
        villain.scale=0.16;

        rand=Math.round(random(1,4));
        switch(rand){
            case 1: villain.addImage(loki);
            break;
            case 2: villain.addImage(thanos);
            break;
            case 3: villain.addImage(hela);
            break;
            default : break;
        }

        villain.velocityX=-10;
        villain.lifetime=500;
        villainGroup.add(villain);
    }
}