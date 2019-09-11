
//Convert the given number into a roman numeral.


function convertToRoman(i){
    // i will be an int
    
    let number = "";
    let n = [1,4,5,9,10,40,50,90,100]; 
    let letter = ["I","IV","V","IX","X","XL","L","XC","C"]; 
    let count = 8;
     while(i>0) 
     {
       let div = i/n[count]; 

       i = i%n[count]; 
       while(div>1) 
       { 
         div--;
         number+=letter[count]; 
       }
       if(i<=0)
         number+=letter[count];
       count--; 
     } 
     return number;
}

document.write(convertToRoman(2)+"<br>");
document.write(convertToRoman(83)+"<br>");