const keyElement = document.getElementById("key");
const messageElement = document.getElementById("plainText");

const keyDElement = document.getElementById("keyD");
const ciphertextElement = document.getElementById("ciphertext");

let encodedText="";
let decodedText="";

let alpahabets=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


$("#encode").on("click",function(){
    let key=keyElement.value;
    let text=messageElement.value;
    text=text.toLowerCase();
    encodedText=encodeText(key,text);
    $(".encodedTextField").text(`Caesar Cipher - Shift by ${key}`);
    document.getElementById("encodedText").value=encodedText;

});

function replaceCharAtPosition(str, position, newChar) {
    if (position < 0 || position >= str.length) {
      return str; // Invalid position, return the original string
    }
  
    const newStr = str.substring(0, position) + newChar + str.substring(position + 1);
    return newStr;
  }
  
function encodeText(key,text){
    let string=text;
    for(let i=0;i<text.length;i++){
        for(let j=0;j<alpahabets.length;j++){
            if(text.charAt(i)===alpahabets[j]){
                string=replaceCharAtPosition(string,i,alpahabets[(j+ + key)%26]);
            }
        }
    }

    return string;


 }

 $("#decode").on("click",function(){
     let keyD=keyDElement.value;  
     let cipherText=ciphertextElement.value; 
     cipherText=cipherText.toLowerCase();
     decodedText=decodeText(keyD,cipherText);
     $(".decodedTextField").text(`Caesar Cipher - Shift by ${keyD}`);
     document.getElementById("decodedText").value=decodedText;
 });

 function decodeText(key,text){
    let string=text;
    for(let i=0;i<text.length;i++){
        for(let j=0;j<alpahabets.length;j++){
            if(text.charAt(i)===alpahabets[j]){
                string=replaceCharAtPosition(string,i,alpahabets[((j-key) +26)%26]);
            }
        }
    }
    return string;


 }



