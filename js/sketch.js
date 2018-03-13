var shadow;
var theata = 0;
var myCanvas;
var stars = [];

function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight);
    background(10,10,10);
    for(var i = 0; i < 4001;i++){
        stars[i] = new Star();
    }
}

function draw() {
    background(options.Background[0],options.Background[1],options.Background[2],30);//
    if(options.isPNG == true){
        clear();
    }

    for(var i = 0; i < width; i++){
        for(var j = 0; j < width; j++){
            
        }
    }

    if(options.Direction == 'Center'){
        translate(width/2,height/2);
    }else if (options.Direction == 'Right'){
        translate(0,height/2);
    }else if (options.Direction == 'Left'){
        translate(width,height/2);
    }else if (options.Direction == 'Down'){
        translate(width/2,0);
    }else if (options.Direction == 'Up'){
        translate(width/2,height);
    }
   
    for (var i = 0; i < options.Points; i++){
        stars[i].display();
        stars[i].update();
    }
}

function Star(){
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(width*2,width*4);
    this.pz = this.z;
    this.px = this.x;
    this.py = this.y;

    this.angle = 0;

    this.display = function(){

        var sx = map(this.x/this.z/2, -1, 1, -width, width);
        var sy = map(this.y/this.z/2, -1, 1, -height, height);

        var r = map(dist(sx,sy,this.px,this.py),0,width*3,options.minSize,options.maxSize);

        var percent = norm(dist(sx,sy,0,0), 0, options.Range);
        from = color(options.Color1[0],options.Color1[1],options.Color1[2]);
        to = color(options.Color2[0],options.Color2[1],options.Color2[2]);
        between = lerpColor(from, to, percent);
  
        stroke(between);
        strokeWeight(r);

        if(this.z >= 1 && sx <= width && sx > -width && sy > -height && sy < height ){
             line(this.px,this.py,sx,sy);   
             this.px = sx;     
             this.py = sy; 
        }          
    }

    this.update = function(){
        this.z -= options.Speed;    
        if(this.z < 1){
            this.z = random(width*1.5,width*2);
            this.x = random(-width,width);
            this.y = random(-height*2,height*2);
            this.px = map(this.x/this.z/2, -1, 1, -width, width);
            this.py = map(this.y/this.z/2, -1, 1, -height, height);
        }
    }

}
