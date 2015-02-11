write a function called simpleSymbols that takes in a string parameter and determines if it is an acceptable sequence by either returning the string true or false. The str paramter will be a composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

var simpleSymbols = function(str) {
	
}


var simpleSymbols = function (s) {
    for (var i = 0, length = s.length; i < length; i++) {
        if ( s[i] >= 'a' && s[i - 1] != '+' && s[i + 1] != '+' ) {
            return false;
        }
    }
    return true;
}


=================


var str = "++d+===+c++=";

var simpleSymbols = function(str) {
for (var i = 0; i < str.length; i++) {
  if (str.charAt(i) !== "+" && str.charAt(i) !== "=") {
    if (str.charAt(i - 1) !== "+" || str.charAt(i + 1) !== "+") {
        return false;
    };
  };
};
    return true;
}

simpleSymbols(str);

==============================================

Given an arbitrary input string, return the first non-repeated character in the string. For example: firstNonRepeatedCharacter('ABA'); // => 'B'      or firstNonRepeatedCharacter('AABABD'); // => 'C'



var noRepeat = function(str) {
	var newWord = str.split('');
		if (newWord.indexOf() > -1 {
			alert newWord;
		})
		else {
			alert("No duplicate")
		}


function(str) {
	for( var i = 0; i < str.length; i++) {
		var re = new RegExp(stri[i], 'g')
		if(str.match(rd).length === 1) {
		return str[i];
		}
	}
	return null;
	}


=========================



write a function called ABCheck that takes a string parameter and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.



var abCheck = function(str){
var arr = str.toLowerCase().split("");
for (var i = 0; i < arr.length; i++){
if (arr[i] === "a" && arr[i + 4] === "b" || arr[i - 4] === "b"){
return true;
} 
} 
return false;
}

ABCheck("lane borrowed");



======================================

Write a function that generates an array of integers of the Fibonacci sequence, up to i = 100. The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers in the sequence are 0 and 1. Write a function to check if a given number is in the Fibonacci sequence, return "yes" if it is, if not return the string "no".




fib = function(numMax){
    for(i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        console.log(x);
    }
}

fib(10)
=============

var fibn = function(num) {
	var array = [0,1];
	var total = 0;
		var i = 2;
		while(total < num) {
		total = array[i - 2] + array[i - 1];
		array.push(total);
		i++;
		}
		if(array.indexOf(num) !== -1){
		return true;
		}
		return false;
		}


function fib(num) {
	var fbnArray = [0,1];
	for(var i = 0; i < 99; i++)
}

		}
}

=====================

find the only item that occurs an even number of times in an array. If there is more than one item that occurs an even number of times, just return one of them. If there are no items that occur an even number of times, return null.
var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
console.log(onlyEven); // 4

var onlyEven = evenOccurence([1, 1, 3, 4, 1]);
console.log(onlyEven); // null



var onlyEven = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
			numEven.push(arr[i]);
		}
	}
	else (numOdd.push(arr[i]) {

	}
}

answer:

   var evenOccurance = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    var occurs = 0; 
    for(var j = 0; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        occurs++;
    }
  }
  if(occurs %2 === 0) {
    return arr[i];
}
}
};

============================


write a function that accepts a number, n, and returns the nth Fibonacci number. 
Use a recursive solution to this problem; if you finish with time leftover, implement an iterative solution.

var recursiveFib = function(n) {
	if(n <= 2) {
		return 1;
	}
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

==============

create a functio that takes in three strings as a prameters. The goal is to swap all x characters in the string for Y characters. For example: 

swapper('some string', 's', 'z')  returns zome ztring. 

var replace = function(a,b,c) {
	var newString = a.split('')b.split('')c.split('');
	for (var i = 0; i < newString.length; i++) {
		if ('x' === 'x') {

		}
	}
}
==================

write a function that accepts a multi dimensional array and returns a flattened version.
flatten([1, 2, [3, [4], 5, 6], 7]) [1, 2, 3, 4, 5, 6, 7];


var arrays = [["$6"], ["$12"], ["$25"], ["$25"], ["$18"], ["$22"], ["$10"], ["$0"], ["$15"],["$3"], ["$75"], ["$5"], ["$100"], ["$7"], ["$3"], ["$75"], ["$5"]];
var merged = [];
merged = merged.concat.apply(merged, arrays);
merged.concat(["$6"], ["$12"], …, ["$75"], ["$5"]);

merged = merged.concat.apply(merged, arrays);


var flattenerCam = function(arr) {
	var str = arr.join('[');
	var newArr = [];
	fr(var i = 0; i < str.length; i++) {
		if(str[i] !== '[' && str[i] !== ","){
			newArr.push(+str[i])
		}
	}
	return newArr;
};


================================

http://jsfiddle.net/cahlan/2ub9u8fj


==================

http://jsfiddle.net/sf6z5x0c/

solution http://jsfiddle.net/sf6z5x0c/9/


