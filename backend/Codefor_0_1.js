let str="0101011010101";
for (let i = 0; i < str.length; i++) {
    console.log((str[i]-'0'));
    console.log("aaa ");

    console.log((str[i]-'0')^1);
 str[i]=(str[i]-'0')^1+'0';
}
// for(let ch of str){
   console.log(str);
// }


