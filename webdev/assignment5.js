$(document).ready(function() {
    var hunger = 200;
    function refreshFace() {
        var eyeNum = parseInt(Math.random() * 15 + 1);
        var eyeFileName = "images/eye" + eyeNum + ".png";
        $('#eyes').attr('src',eyeFileName);

        var mouthNum = parseInt(Math.random() * 13 + 1);
        var mouthFileName = "images/mouth" + mouthNum + ".png";
        $('#mouth').attr('src',mouthFileName);
        var newHunger = hunger;

        hunger -= 5;
        //console.log(newHunger);
        $('#hunger').css('width', hunger + 'px');

        $('#background1').click(function(event) {
            $('#container').css('background-image', "url('images/background1.png')");
        });

        $('#background2').click(function(event) {
            $('#container').css('background-image', "url('images/background2.png')");  
        });

        $('#background3').click(function(event) {
            $('#container').css('background-image', "url('images/background3.png')");  
        });

        $('#background4').click(function(event) {
            $('#container').css('background-image', "url('images/background4.png')");  
        });
        
        window.localStorage.setItem('lastBackground',$('#container').css('background-image'));
        var lastBackground = window.localStorage.getItem('lastBackground');
        $('#container').css('background-image', lastBackground); 
        /*if(lastBackground !== null) {
           $('#container').css('background-image', lastBackground);  
           console.log(lastBackground);
        }   
        else {
           //set default bkgd
           $('#container').css('background-image', "url('images/background2.png')");
        }*/
         //put hunger back into localstorage
         window.localStorage.setItem('hunger', hunger);
         var lastHunger = window.localStorage.getItem('hunger');
         if(lastHunger !== null) {
            $('#hunger').css('width', lastHunger + 'px');
         }
         else {
             $('#hunger').css('width', hunger + 'px');
         }

        if(hunger == 0) {
             $('#eyes').attr('src','images/eyes_dead.png');
             $('#mouth').attr('src','images/mouth_dead.png');
         }
         else {
             setTimeout(refreshFace,1000);
         }

        $('#fastfood').click(function(event) {
            newHunger = parseInt(hunger) + 15;
            $('#hunger').css('width', newHunger +'px');
            //console.log(newHunger);
        });

        $('#cherry').click(function(event) {
            newHunger = parseInt(hunger) + 10;
            $('#hunger').css('width', newHunger +'px');
            //console.log(newHunger);
        });

        $('#carrot').click(function(event) {
            newHunger = parseInt(hunger) + 5;
            $('#hunger').css('width', newHunger +'px');
            //console.log(newHunger);
        });
    
        $('#fastfood').hover(
            //hover begins
            function(event) {
            $('#fastfood').attr('src','images/food_button_over.png');
            },
            
            //hover ends
            function(event) {
                $('#fastfood').attr('src','images/food_button.png');
            }
        );

        $('#cherry').hover(
            //hover begins
            function(event) {
            $('#cherry').attr('src','images/cherry_button_over.png');
            },
            
            //hover ends
            function(event) {
                $('#cherry').attr('src','images/cherry_button.png');
            }
        );

        $('#carrot').hover(
            //hover begins
            function(event) {
            $('#carrot').attr('src','images/carrot_button_over.png');
            },
            
            //hover ends
            function(event) {
                $('#carrot').attr('src','images/carrot_button.png');
            }
        );

        $('#background1').hover(
            
            //hover begins
            function(event) {
                $('#background1').css('border', '4px solid black');
            },
            
            //hover ends
            function(event) {
                $('#background1').css('border', '');
            }
        );

        $('#background2').hover(
            
            //hover begins
            function(event) {
                $('#background2').css('border', '4px solid black');
            },
            
            //hover ends
            function(event) {
                $('#background2').css('border', '');
            }
        );

        $('#background3').hover(
            
            //hover begins
            function(event) {
                $('#background3').css('border', '4px solid black');
            },
            
            //hover ends
            function(event) {
                $('#background3').css('border', '');
            }
        );

        $('#background4').hover(
            
            //hover begins
            function(event) {
                $('#background4').css('border', '4px solid black');
            },
            
            //hover ends
            function(event) {
                $('#background4').css('border', '');
            }
        );  
    }
    refreshFace();
});