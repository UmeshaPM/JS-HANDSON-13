//Closures -

//Q-1:-

//Print output:

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var Counter = counter();
// alert(Counter());
// alert(Counter());
// alert(Counter());
// alert(Counter());

//Output - PopUp alert is shown on screen for 4 times.

//............................................................................................................................................................................

//Q-2:-

//Print output:

let count = 0;
(function immediate() {
    if (count === 0) {
      let count = 1;
      console.log(count); 
    }
    console.log(count); 
  })();

//Output - 1 , 0

//............................................................................................................................................................................

//Q-3:-

//Print output:

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); 
    }, 1000);
  }


//Output: 3(3) - it will run setTimeOut for 3 times which will print value of i which is now 3 and 3 times.

//............................................................................................................................................................................

//Q-4:-

//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function areaOfRec(a,b){
    let length = a;
    return function(){
      let breadth = b;
      area = length * breadth;
      console.log(`The area of rectangle is ${area}`);
    }
}
let rectangle = areaOfRec(4,8);
rectangle();

//Output - The area of rectangle is 32

//............................................................................................................................................................................

//Q-5:-

//Take a variable in outer function and create an inner function to increase the counter every time it is called

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`)
    };
};

const bookie = ticketBooking()
bookie(); //the passenger count is 1
bookie(); //the passenger count is 2
bookie(); //the passenger count is 3
bookie(); //the passenger count is 4

//............................................................................................................................................................................

//Q-6:-

//Print output:

var a = 12;
(function () {
  alert(a);
})();

//Output - This page says 12 [ PopUp alert ]

//............................................................................................................................................................................

//Q-7:-

//Print output:

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//Output - This page says 12 [ PopUp alert ]

//............................................................................................................................................................................

//Q-8:-

//Print output:

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar =" + globalVar);
 
    })(456);
})(123);

//Output :-

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar =xyz
