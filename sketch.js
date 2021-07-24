var num1, num2; 

var b1, b2, b3, b4;

var n1, n2;

function setup() {
  createCanvas(400, 400); 
  num1 = createInput();
  num1.position(5, 60); 
  
  num2 = createInput();
  num2.position(200, 60);
}

function draw() 
{
  background(220);

  text ("Number 1", 71, 50);
  text ("Number 2", 271, 50);

  n1 = parseInt (num1.value ())
  n2 = parseInt (num2.value ())

  b1 = createButton("ADD");
  b1.position(10, 200);
  b1.mousePressed(add);

  b2 = createButton("MULTIPLY");
  b2.position(100, 200); 
  b2.mousePressed(mul)

  b3 = createButton("SUBTRACT");
  b3.position(200, 200); 
  b3.mousePressed(sub)

  b4 = createButton("DIVIDE");
  b4.position(300, 200); 
  b4.mousePressed(division_numbers);
}

function add (){
console.log (n1 +n2);
}

function sub (){
  console.log (n1 - n2);
  }

function mul (){
  console.log (n1 * n2);
 }

function division_numbers (){
  console.log (n1 / n2);
}