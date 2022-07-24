const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");

btnFormat.addEventListener("click", () => {
  
//  const formatted =  stringify(inputArea.value);
//  outputArea.value = formatted;
//  console.log(formatted);

test();
//  console.log(JSON.stringify(JSON.parse(inputArea.value),null,4));
//  usingstringfy();
  
});

btnMinify.addEventListener("click", () => {
  inputArea.value=""
  outputArea.value = "";
});
test();
function test(){
  
 const formatted =  stringify(JSON.parse(inputArea.value));
 
 outputArea.value=formatted
 console.log(JSON.stringify(JSON.parse(inputArea.value),null,4));
 
}
function usingstringfy(){
  const minified = JSON.stringify(JSON.parse(inputArea.value),null,4);
  outputArea.value=minified

}
function stringify(obj){
  if(typeof obj== "string"){
   return ` "${obj}"`;
  }
  if(typeof obj== "number"|| typeof obj== "boolean"){
   return `${obj}`;
  }
  if(Array.isArray(obj)){
   let res="\n      [";

   for(let i=0;i<obj.length;i++){
       res+=`\n    ${stringify(obj[i])}, `;
   }

   res=`${res.substring(0,res.length-1)}]`;

   return res+"\n    ";
  }
  let res=`\n    {`;
  for(let key in obj){
   res+=`\n      ${key}:${stringify(obj[key])},`;
  }
  res=`\n   ${res.substring(0,res.length-1)}`;
  return res+"\n    }";
}