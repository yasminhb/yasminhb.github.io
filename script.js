var result;
var happysky, sadsky, angrysky, neutralsky, surprisedsky, disgustedsky, fearsky;
var rain, lightning, puddle, snow, rainbow;
var happyflower1, happyflower2, happyflower3;
var flower1, flower2, flower3;
var neutralflower1, neutralflower2, neutralflower3;
var angryflower1, angryflower2, angryflower3;
var surprisedflower1, surprisedflower2, surprisedflower3;
var digustedflower1, disgustedflower2, disgustedflower3;
var happysound, sadsound, angrysound, disgustedsound, neutralsound;
var mode;
var landingpage;
var sound, button, input;


const video = document.getElementById('video');

function preload(){
  
landingpage= loadImage ('landing page.jpg');

  happysky = loadImage('images/happysky.jpg');
    sadsky = loadImage ('images/sadsky.jpg');
    angrysky = loadImage ('images/angrysky.jpg');
    neutralsky = loadImage ('images/neutralsky.jpg');
    surprisedsky = loadImage ('images/surprisedsky.jpg');
    disgustedsky = loadImage ('images/disgustedsky.jpg');
    fearsky = loadImage('images/fearsky.jpg');

    neutralflower1 = loadAnimation('nf/nf1.png','nf/nf2.png','nf/nf3.png','nf/nf4.png','nf/nf5.png','nf/nf6.png','nf/nf7.png','nf/nf7.png','nf/nf8.png','nf/nf8.png','nf/nf9.png','nf/nf10.png','nf/nf11.png','nf/nf12.png','nf/nf13.png','nf/nf14.png','nf/nf15.png','nf/nf16.png','nf/nf17.png','nf/nf18.png','nf/nf19.png','nf/nf20.png','nf/nf21.png','nf/nf22.png','nf/nf23.png');
    neutralflower2 = loadAnimation('nf/nf1.png','nf/nf2.png','nf/nf3.png','nf/nf4.png','nf/nf5.png','nf/nf6.png','nf/nf7.png','nf/nf7.png','nf/nf8.png','nf/nf8.png','nf/nf9.png','nf/nf10.png','nf/nf11.png','nf/nf12.png','nf/nf13.png','nf/nf14.png','nf/nf15.png','nf/nf16.png','nf/nf17.png','nf/nf18.png','nf/nf19.png','nf/nf20.png','nf/nf21.png','nf/nf22.png','nf/nf23.png');
    neutralflower3 = loadAnimation('nf/nf1.png','nf/nf2.png','nf/nf3.png','nf/nf4.png','nf/nf5.png','nf/nf6.png','nf/nf7.png','nf/nf7.png','nf/nf8.png','nf/nf8.png','nf/nf9.png','nf/nf10.png','nf/nf11.png','nf/nf12.png','nf/nf13.png','nf/nf14.png','nf/nf15.png','nf/nf16.png','nf/nf17.png','nf/nf18.png','nf/nf19.png','nf/nf20.png','nf/nf21.png','nf/nf22.png','nf/nf23.png');

    happyflower1 = loadAnimation('hf/hf1.png','hf/hf2.png','hf/hf3.png','hf/hf4.png','hf/hf5.png','hf/hf6.png','hf/hf7.png','hf/hf8.png','hf/hf9.png','hf/hf10.png','hf/hf11.png','hf/hf12.png','hf/hf13.png','hf/hf14.png','hf/hf15.png','hf/hf16.png','hf/hf17.png','hf/hf18.png');
    happyflower2 = loadAnimation('hf/hf1.png','hf/hf2.png','hf/hf3.png','hf/hf4.png','hf/hf5.png','hf/hf6.png','hf/hf7.png','hf/hf8.png','hf/hf9.png','hf/hf10.png','hf/hf11.png','hf/hf12.png','hf/hf13.png','hf/hf14.png','hf/hf15.png','hf/hf16.png','hf/hf17.png','hf/hf18.png');
    happyflower3 = loadAnimation('hf/hf1.png','hf/hf2.png','hf/hf3.png','hf/hf4.png','hf/hf5.png','hf/hf6.png','hf/hf7.png','hf/hf8.png','hf/hf9.png','hf/hf10.png','hf/hf11.png','hf/hf12.png','hf/hf13.png','hf/hf14.png','hf/hf15.png','hf/hf16.png','hf/hf17.png','hf/hf18.png');

    flower1 = loadAnimation('images2/flower1.png','images2/flower2.png','images2/flower3.png','images2/flower4.png','images2/flower5.png','images2/flower6.png','images2/flower7.png','images2/flower8.png','images2/flower9.png','images2/flower10.png','images2/flower11.png','images2/flower12.png','images2/flower13.png','images2/flower14.png','images2/flower15.png','images2/flower16.png','images2/flower17.png','images2/flower18.png');
    flower2 = loadAnimation('images2/flower1.png','images2/flower2.png','images2/flower3.png','images2/flower4.png','images2/flower5.png','images2/flower6.png','images2/flower7.png','images2/flower8.png','images2/flower9.png','images2/flower10.png','images2/flower11.png','images2/flower12.png','images2/flower13.png','images2/flower14.png','images2/flower15.png','images2/flower16.png','images2/flower17.png','images2/flower18.png');
    flower3 = loadAnimation('images2/flower1.png','images2/flower2.png','images2/flower3.png','images2/flower4.png','images2/flower5.png','images2/flower6.png','images2/flower7.png','images2/flower8.png','images2/flower9.png','images2/flower10.png','images2/flower11.png','images2/flower12.png','images2/flower13.png','images2/flower14.png','images2/flower15.png','images2/flower16.png','images2/flower17.png','images2/flower18.png');

    disgustedflower1 = loadAnimation('df/df1.png','df/df2.png','df/df3.png','df/df4.png','df/df5.png','df/df6.png','df/df7.png','df/df8.png','df/df9.png','df/df10.png','df/df11.png','df/df12.png');
    disgustedflower2 = loadAnimation('df/df1.png','df/df2.png','df/df3.png','df/df4.png','df/df5.png','df/df6.png','df/df7.png','df/df8.png','df/df9.png','df/df10.png','df/df11.png','df/df12.png');
    disgustedflower3 = loadAnimation('df/df1.png','df/df2.png','df/df3.png','df/df4.png','df/df5.png','df/df6.png','df/df7.png','df/df8.png','df/df9.png','df/df10.png','df/df11.png','df/df12.png');

    surprisedflower1 = loadAnimation('sf/sf1.png','sf/sf2.png','sf/sf3.png','sf/sf4.png','sf/sf5.png','sf/sf6.png','sf/sf7.png','sf/sf8.png','sf/sf9.png');
    surprisedflower2 = loadAnimation('sf/sf1.png','sf/sf2.png','sf/sf3.png','sf/sf4.png','sf/sf5.png','sf/sf6.png','sf/sf7.png','sf/sf8.png','sf/sf9.png');
    surprisedflower3 = loadAnimation('sf/sf1.png','sf/sf2.png','sf/sf3.png','sf/sf4.png','sf/sf5.png','sf/sf6.png','sf/sf7.png','sf/sf8.png','sf/sf9.png');

    angryflower1 = loadAnimation('af/af1.png','af/af2.png','af/af3.png','af/af4.png','af/af5.png','af/af6.png','af/af7.png','af/af8.png','af/af9.png','af/af10.png','af/af11.png','af/af12.png','af/af13.png','af/af14.png','af/af15.png','af/af16.png','af/af17.png','af/af18.png','af/af19.png','af/af20.png','af/af21.png','af/af22.png','af/af23.png','af/af24.png','af/af25.png','af/af26.png','af/af27.png','af/af27.png','af/af28.png','af/af29.png','af/af30.png','af/af31.png','af/af32.png','af/af33.png','af/af34.png','af/af35.png','af/af36.png','af/af37.png','af/af38.png','af/af39.png','af/af40.png','af/af41.png','af/af42.png','af/af43.png','af/af44.png','af/af45.png','af/af46.png','af/af47.png');
    angryflower2 = loadAnimation('af/af1.png','af/af2.png','af/af3.png','af/af4.png','af/af5.png','af/af6.png','af/af7.png','af/af8.png','af/af9.png','af/af10.png','af/af11.png','af/af12.png','af/af13.png','af/af14.png','af/af15.png','af/af16.png','af/af17.png','af/af18.png','af/af19.png','af/af20.png','af/af21.png','af/af22.png','af/af23.png','af/af24.png','af/af25.png','af/af26.png','af/af27.png','af/af27.png','af/af28.png','af/af29.png','af/af30.png','af/af31.png','af/af32.png','af/af33.png','af/af34.png','af/af35.png','af/af36.png','af/af37.png','af/af38.png','af/af39.png','af/af40.png','af/af41.png','af/af42.png','af/af43.png','af/af44.png','af/af45.png','af/af46.png','af/af47.png');
    angryflower3 = loadAnimation('af/af1.png','af/af2.png','af/af3.png','af/af4.png','af/af5.png','af/af6.png','af/af7.png','af/af8.png','af/af9.png','af/af10.png','af/af11.png','af/af12.png','af/af13.png','af/af14.png','af/af15.png','af/af16.png','af/af17.png','af/af18.png','af/af19.png','af/af20.png','af/af21.png','af/af22.png','af/af23.png','af/af24.png','af/af25.png','af/af26.png','af/af27.png','af/af27.png','af/af28.png','af/af29.png','af/af30.png','af/af31.png','af/af32.png','af/af33.png','af/af34.png','af/af35.png','af/af36.png','af/af37.png','af/af38.png','af/af39.png','af/af40.png','af/af41.png','af/af42.png','af/af43.png','af/af44.png','af/af45.png','af/af46.png','af/af47.png');

    fearflower1 = loadAnimation ('ff/ff1.png','ff/ff2.png','ff/ff3.png','ff/ff4.png','ff/ff5.png','ff/ff6.png','ff/ff7.png','ff/ff8.png');
    fearflower2 = loadAnimation ('ff/ff1.png','ff/ff2.png','ff/ff3.png','ff/ff4.png','ff/ff5.png','ff/ff6.png','ff/ff7.png','ff/ff8.png');
    fearflower3 = loadAnimation ('ff/ff1.png','ff/ff2.png','ff/ff3.png','ff/ff4.png','ff/ff5.png','ff/ff6.png','ff/ff7.png','ff/ff8.png');

    rain = loadAnimation('rain/rain1.png','rain/rain2.png','rain/rain3.png');
    puddle = loadAnimation('puddle/puddle1.png','puddle/puddle2.png','puddle/puddle3.png','puddle/puddle4.png','puddle/puddle5.png','puddle/puddle6.png');
    lightning = loadAnimation('lightning/lightning1.png','lightning/lightning2.png','lightning/lightning3.png');
    snow = loadAnimation('snow/snow1.png','snow/snow2.png','snow/snow3.png');
    rainbow = loadAnimation('rainbow/rainbow1.png','rainbow/rainbow2.png','rainbow/rainbow3.png','rainbow/rainbow4.png','rainbow/rainbow5.png','rainbow/rainbow6.png','rainbow/rainbow7.png','rainbow/rainbow8.png','rainbow/rainbow9.png','rainbow/rainbow10.png','rainbow/rainbow11.png','rainbow/rainbow12.png','rainbow/rainbow13.png','rainbow/rainbow14.png','rainbow/rainbow15.png','rainbow/rainbow16.png','rainbow/rainbow17.png','rainbow/rainbow18.png','rainbow/rainbow19.png');

    happysound = loadSound ('sounds/happy sound.mp3');
    sadsound = loadSound ('sounds/sad sound.mp3');
    neutralsound = loadSound('sounds/neutral sound.mp3');
    angrysound = loadSound('sounds/angry sound.mp3');
    disgustedsound = loadSound('sounds/disgusted sound.mp3');

}

    function setup() {
        createCanvas(windowWidth,windowHeight);
        mode = 0; 
        // textSize(21);
        // createButton('Sound');
        // button.position(20,40);
        // button.mousePressed


    }

    function draw(){
      if (mode==0){
        push();
        scale(0.3,0.3);
        image(landingpage,0,0);
        pop();

        // scale(windowWidth,windowHeight);
        
        
        // image(image1,0,0);
        // // ellipse(100,100);
        // // fill(385);
        // text('Hi there!',windowWidth/2,windowHeight/3);
        // text('Welcome the Garden of Pathetic Fallacy!',windowWidth/6,windowHeight/2);
        // text('To access the garden, make sure you allow this page to access your webcam, also make sure you are using chrome as a browser!',windowWidth/6,windowHeight/4);
        // text('Your facial expressions will be analysed via your webcam and will help you to interact with the garden', windowWidth/6, windowHeight/5);
        // text('Try to make a bunch of different facial expressions and have fun!',windowWidth/6,windowHeight/6);
        // text('Press ENTER to start',windowWidth/6,windowHeight/7);

        // happysky.hide();
        // neutralsky.hide();
        

  
        
    
        
   

        // Hi there!

        // Welcome to the Garden!
        
        // To access the garden, make sure you allow this page access to your webcam.
        
        // Your facial expressions will be analysed via your webcam and help you to interact with the garden.
        
        // Have fun!
        
        // Press ENTER to start


        fill(0);
      }

    }

    function keyPressed(){
      if (keyCode===ENTER){
        mode=1;
        clear(landingpage);
        // clear(text);
        // clear(rect);
      }
    }

  

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
  
}


video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    // console.log(resizedDetections);
    // console.log(detections[0].expressions);
    var expressions = detections[0].expressions;
    // var array = [expressions.happy, expressions.sad, expressions.neutral, expressions.angry, expressions.surprised, expressions.digust]
    

    var values = {1:expressions.happy, 2:expressions.sad, 3:expressions.neutral, 4:expressions.angry, 5:expressions.surprised, 6:expressions.disgusted, 7:expressions.fearful};
    result = Object
      .keys(values)
      .sort(function (a,b){ return values [b] - values[a]; })
      .slice(0,10)
      .map(Number)

      console.log(result[0]);
    
      // if(result[0] == 1){
      //   ellipse(random(width), random(height),10,10);
      // }

      // if(result[0] == 1){
      //   image(happysky,0,0);
      // }

     

      // let er = 
      //   showResults(er)
        
      // function showResults(results){ 

      //   if(result[0]!==undefined){
      //     if(result[0]==1){
      //       fill(0);
      //       ellipse(random(width),random(height),10,10);
            
      //     }

      // }
     
    
      // }


      // if (result[0] = 1){
      //   ellipse(100,100);
      //   fill(0);
      // }


  // if(result[0] = 1){
  //   console.log("happy")
  // } else if(result[0] !=1){
  //   console.log("not happy")
  // }

  

  if(result[0] == 1){
    image(happysky,0,0);
    happysky.resize(900,675);


    // push(); 
    // // scale(2,2);
    // image(happysky,0,0,happysky.width*0.5, happysky.height*0.5);
    // pop();
    // var x=happysky.width*0.5*0.25
    // // happysky.resize(900,675);

    // animation(happyflower1,x,400);
    // animation(happyflower2,2*x,300);
    // animation(happyflower3,3*x,400);

    animation(happyflower1,180,400);
    animation(happyflower2,450,300);
    animation(happyflower3,700,400);
    
    // happyflower1.looping = false;
    // happyflower2.looping = false;
    // happyflower3.looping = false;
  }

  if(result[0] == 2){
    image(sadsky,0,0);
    sadsky.resize(900,675);
    animation(rain,450,330);
    animation(puddle,450,330);
    animation(flower1,180,400);
    animation(flower2,450,300);
    animation(flower3,700,400);
  }

  if(result[0] == 3){
    image(neutralsky,0,0);
    neutralsky.resize(900,675);
    animation(snow,450,330);
    animation(neutralflower1,180,400);
    animation(neutralflower2,450,300);
    animation(neutralflower3,700,400);
  }

  if(result[0] == 4){
    image(angrysky,0,0);
    angrysky.resize(900,675);
    animation(lightning,450,330);
    animation(angryflower1,10,410);
    animation(angryflower2,250,320);
    animation(angryflower3,480,410);
  }

  if(result[0] == 5){
    image(surprisedsky,0,0);
    surprisedsky.resize(900,675);
    animation(surprisedflower1,180,400);
    animation(surprisedflower2,450,300);
    animation(surprisedflower3,700,400);
  }

  if(result[0] == 6){
    image(disgustedsky,0,0);
    disgustedsky.resize(900,675);
    animation(disgustedflower1,180,400);
    animation(disgustedflower2,450,300);
    animation(disgustedflower3,700,400);
  }

  if(result[0] == 7){
    image(fearsky,0,0);
    fearsky.resize(900,675);
    animation(rainbow,450,330);
    animation(fearflower1,180,400);
    animation(fearflower2,450,300);
    animation(fearflower3,700,400);
  }



  // }else if(result[0] !==1){
  //   happysky.hide;
  // }



    // console.log(array);
    // expressions.happy 
    // console.log(expressions.happy)
    // expressions.sad
    // expressions.neutral
    // expressions.angry
    // expressions.surprised
    // expressions.disgust
    // expressions.fearful

    // shows the live list of facial expressions on face
    // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    // faceapi.draw.drawDetections(canvas, resizedDetections)
    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 100)
})

function mousePressed(){

// if(result[0]==1){
// sound = happysound

}

// sadsound.play();
  // if(result[0] == 2){
  //   sadsound.isPlaying();
  //   }else{
  //     sadsound.stop();
  //   }
  // }

  // var sound;



  // if(result[0]==1){
  //   sound = happysound;
  // } 

  // if(button clicked= true)
  // sound.play

  if(result[0]==1){
    happysound.play();
  } else {
  happysound.stop();
  }

if(result[0]==2){
  sadsound.play();
} else {
sadsound.stop();
}

if(result[0]==3){
  neutralsound.play();
} else {
neutralsound.stop();
}

if(result[0]==4){
  angrysound.play();
} else {
angrysound.stop();
}

if(result[0]==6){
  disgustedsound.play();
} else {
disgustedsound.stop();
}







  // if (sadsound.isPlaying()){ // checks if the song is playing
  //   sadsound.stop();
  // }


  // if (song.isPlaying()){ // checks if the song is playing
  //   song.stop(); // if it is, then stop the song
  //   fill(0,255,0);
  // } 
  // else{
  //   fill(255,0,0); // changes the fill to red
  //   song.play(); // if it isn't then play the song

// if(result[0] == 1){
//     happysound.isPlaying();
//     }else{
//       happysound.stop();
//     }
//   }


// }


// if(angrysound.isPlaying()){
//   angrysound.stop();
// }

// function keyPressed(){
//   title loading screen will say 'welcome to the garden of _____, garden takes about 10 seconds to load, if you so desire you may click the screen to enable sound, try to be as expressive with your facial features as you possibly can, press any key to enter'
// }

// }

// function draw() {
//     background(220);
    
//     if(result[0] == 1){
//           image(happysky,0,0);
//           happysky.resize(900,675);
//         }
//       }
