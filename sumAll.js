
//Sum all the integers you find, anywhere in the nest of arrays. can be multilevel

function sumAll(i){
    // i will be an array, containing integers, strings and/or arrays like itself.
   // Sum all the integers you find, anywhere in the nest of arrays.  
   let sum = 0;
   i.forEach(function(element){
       if(typeof element == 'number')
       sum+=element;
   else if(Array.isArray(element))
     sum+=sumAll(element);
   })
   return sum;
}

let a = [1, [2,[3, "5",[4,[5, "teste"]]]]];
document.write(sumAll(b)+"<br>");