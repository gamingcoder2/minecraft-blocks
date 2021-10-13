var canvas= new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_Image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
 function my_keydown(e){
     var keypressed=e.keyCode;

     if(keypressed=='84'){
         new_Image('trunk.jpg');
         console.log('t');
     }
         if(keypressed=='68'){
            new_Image('dark_green.png');
            console.log('d');
         }

         if(keypressed=='76'){
            new_Image('light_green.png');
            console.log('l');
         }

         if(keypressed=='71'){
            new_Image('ground.png');
            console.log('g');
         }

         if(keypressed=='82'){
            new_Image('roof.png');
            console.log('r');
         }

         if(keypressed=='85'){
            new_Image('unique.png');
            console.log('u');
         }

         if(keypressed=='87'){
            new_Image('wall.png');
            console.log('w');
         }

         if(keypressed=='89'){
            new_Image('yellow_wall.png');
            console.log('y');
         }

         if(keypressed=='67'){
             new_Image('cloud.jpg')
             console.log('c')
         }

        

         if(e.shiftkey==true&&keypressed=='80'){
             console.log('P and Shift pressed together.')
             block_image_width=block_image_width+10;
             block_image_height=block_image_height+10
             document.getElementById("current_width").innerHTML=block_image_width;
             document.getElementById("current_height").innerHTML=block_image_height;}

             if(e.shiftkey==true&&keypressed=='77'){
                console.log('M and Shift pressed together.')
                block_image_width=block_image_width-10;
                block_image_height=block_image_height-10
                document.getElementById("current_width").innerHTML=block_image_width;
                document.getElementById("current_height").innerHTML=block_image_height;

         }
        
         if(keypressed=='38'){
             up();
         }
         if(keypressed=='40'){
            down();
        }
        if(keypressed=='37'){
            left();
        }
        if(keypressed=='39'){
            right();
        }
 }