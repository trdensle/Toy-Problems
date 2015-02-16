//function that takes a string with parens, brackets, braces ({[< and checks to see if they have a closing bracket. 
	//example (string{stringy}) -- true  ([string]}  -- false


var closing = function(s) {
	var newString = s.split('');
	for(var i = 0; i < newString.length; i++) {
		if(newString === )
	}
}


function chip(string){
	var isValid = true; 
	var carTracker = {
		'(': 0,
		'{': 0,
		'[': 0
	};
	for (var i = 0; i < string.length; i ++ ){
		switch (string[i]){
			case '(':
			case '{':
			case '[':
				carTracker[string[i]] ++;
				if(carTracker['('] < 0) return false;
				break;
			case '(':
				carTracker[')'] --;
				break;
			case '{':
				carTracker['}'] --;
				break;
			case '[':
				carTracker['}'] --;
				break;
		}
	}
	for(var key in carTracker){
		if(carTracker[key] !== 0){
			return false
		}
	}
	return true;
}

============

http://jsfiddle.net/aycrqg7b

var checkString = function(str){
    var leftbrackets = ['(', '{', '<', '['];
    var rightbrackets = [')', '}', '>', ']'];
    var rightvalues = {
        ')': '(',
        '}': '{',
        '>': '<',
        ']': '['
    };
    var stack = [];

    for(var i = 0; i < str.length; i++){
        if(leftbrackets.indexOf(str[i]) !== -1){
            stack.push(str[i]);
        }
        if(rightbrackets.indexOf(str[i]) !== -1){
            if(stack[stack.length-1] === rightvalues[str[i]]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return (stack.length === 0) ? true :  false;
};

=========

http://jsfiddle.net/4w33kLz9/2/



