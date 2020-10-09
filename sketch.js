var flower1;
var flower2;
var flower3;
var happyflower1;
var happyflower2;
var happyflower3;
var sadflower;
var neutralflower1;
var neutralflower2;
var neutralflower3;
var happyflower;
var digustedflower1;
var disgustedflower2;
var disgustedflower3;
var surprisedflower1;
var surprisedflower2;
var surprisedflower3;
var angryflower1;
var angryflower2;
var angryflower3;
var rain;
var lightning;
var puddle;
var snow;


let fr = 30;
let sfr = 26;
let afr = 30;
let ssfr = 28;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;

var emotions;



function preload(){
  happysky = loadImage('images/happysky.jpg');
  sadsky = loadImage ('images/sadsky.jpg');
  angrysky = loadImage ('images/angrysky.jpg');
  neutralsky = loadImage ('images/neutralsky.jpg');
  surprisedsky = loadImage ('images/surprisedsky.jpg');
  disgustedsky = loadImage ('images/disgustedsky.jpg');
  
  
neutralflower1 = loadAnimation('nf/nf1.png','nf/nf2.png','nf/nf3.png','nf/nf4.png','nf/nf5.png','nf/nf6.png','nf/nf7.png','nf/nf7.png','nf/nf8.png','nf/nf8.png','nf/nf9.png','nf/nf10.png','nf/nf11.png','nf/nf12.png','nf/nf13.png','nf/nf14.png','nf/nf15.png','nf/nf16.png','nf/nf17.png','nf/nf18.png','nf/nf19.png','nf/nf20.png','nf/nf21.png','nf/nf22.png','nf/nf23.png');
neutralflower2 = loadAnimation('nf/nf1.png','nf/nf2.png','nf/nf3.png','nf/nf4.png','nf/nf5.png','nf/nf6.png','nf/nf7.png','nf/nf7.png','nf/nf8.png','nf/nf8.png','nf/nf9.png','nf/nf10.png','nf/nf11.png','nf/nf12.png','nf/nf13.png','nf/nf14.png','nf/nf15.png','nf/nf16.png','nf/nf17.png','nf/nf18.png','nf/nf19.png','nf/nf20.png','nf/nf21.png','nf/nf22.png','nf/nf23.png');
neutralflower3 = loadAnimation('nf/nf1.png','nf/nf2.png','nf/nf3.png','nf/nf4.png','nf/nf5.png','nf/nf6.png','nf/nf7.png','nf/nf7.png','nf/nf8.png','nf/nf8.png','nf/nf9.png','nf/nf10.png','nf/nf11.png','nf/nf12.png','nf/nf13.png','nf/nf14.png','nf/nf15.png','nf/nf16.png','nf/nf17.png','nf/nf18.png','nf/nf19.png','nf/nf20.png','nf/nf21.png','nf/nf22.png','nf/nf23.png');
// flower = loadAnimation('images2/flower1.png','images2/flower2.png','images2/flower3.png','images2/flower4.png','images2/flower5.png','images2/flower6.png','images2/flower7.png','images2/flower8.png','images2/flower9.png','images2/flower10.png','images2/flower11.png','images2/flower12.png','images2/flower13.png','images2/flower14.png','images2/flower15.png','images2/flower16.png','images2/flower17.png','images2/flower18.png');
  
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

rain = loadAnimation('rain/rain1.png','rain/rain2.png','rain/rain3.png');
puddle = loadAnimation('puddle/puddle1.png','puddle/puddle2.png','puddle/puddle3.png','puddle/puddle4.png','puddle/puddle5.png','puddle/puddle6.png');
lightning = loadAnimation('lightning/lightning1.png','lightning/lightning2.png','lightning/lightning3.png');
snow = loadAnimation('snow/snow1.png','snow/snow2.png','snow/snow3.png');

}

function setup() {
  // createCanvas(640, 480);
  // createCanvas(windowWidth,windowHeight);
  // createCanvas(1000,751);
  createCanvas(900,675);
button1 = createButton('happy');
button1.position(20,20);
// button1.mousePressed()

button2 = createButton('sad');
button2.position(20,40);
// button2.mousePressed()

button3 = createButton('angry');
button3.position(20,60);
// button3.mousePressed()

button4 = createButton('disgusted');
button4.position(20,80);
// button4.mousePressed()

button5 = createButton('neutral');
button5.position(20,100);
// button5.mousePressed()

button6 = createButton('surprised');
button6.position(20,120);
// button6.mousePressed()
}

function draw() {
  background(220);
  

// image(happysky,0,0);
// // happysky.resize(640,480);
// // happysky.resize(windowWidth,windowHeight);
// happysky.resize(900,675);
  
  
// image(sadsky,0,0);
// sadsky.resize(900,675);
  
//  image(angrysky,0,0);
//  angrysky.resize(900,675);
  
// image(neutralsky,0,0);
// neutralsky.resize(900,675);
  
  
// image(surprisedsky,0,0);
// surprisedsky.resize(900,675);
  
  
image(disgustedsky,0,0);
disgustedsky.resize(900,675);
  
 // image(flower,100,200);
 // flower.resize(100,150);
  
 // image(flower,250,250);
 // flower.resize(100,150);
  
 // image(flower,400,200);
 // flower.resize(100,150);

//  animation(flower,100,100);
// flower.resize(10,10);


// animation(snow,450,330);
// animation(neutralflower1,180,400);
// animation(neutralflower2,450,300);
// animation(neutralflower3,700,400);
  
// //happy flower animation
// animation(happyflower1,180,400);
// animation(happyflower2,450,300);
// animation(happyflower3,700,400);

// //happy flower stop looping
// happyflower1.looping = false;
// happyflower2.looping = false;
// happyflower3.looping = false;
// frameRate(fr);

//disgusted flower animation
animation(disgustedflower1,180,400);
animation(disgustedflower2,450,300);
animation(disgustedflower3,700,400);



// //surprised flower animation
// animation(surprisedflower1,180,400);
// animation(surprisedflower2,450,300);
// animation(surprisedflower3,700,400);

// frameRate(sfr);

// animation(lightning,450,330);
// animation(angryflower1,10,410);
// animation(angryflower2,250,320);
// animation(angryflower3,480,410);

// //angry flower looping
// angryflower1.looping = false;
// angryflower2.looping = false;
// angryflower3.looping = false;
// frameRate(afr);


//sad flower
// animation(rain,450,330);
// animation(puddle,450,330);
// animation(flower1,180,400);
// animation(flower2,450,300);
// animation(flower3,700,400);


// //sad flower looping
// flower1.looping = false;
// flower2.looping = false;
// flower3.looping = false;
// frameRate(ssfr);




}

// function mousePressed(){

//   if  'happy' button is clicked on then show (these animations)
// } 