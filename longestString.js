
// Write a function that returns the extension of a file name

function longestString(i) {
	// i will be an array.
    	// return the longest string in the array
	var max = i[0];
    i.forEach(function(element){
    	if(max.length < element.length)
        	max = element;
    })
    return max;
}

let a = ["test", "test123", "test2", "test3"];
document.write(longestString(a)+"<br>");
