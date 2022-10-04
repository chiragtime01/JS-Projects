let a=document.getElementById("a");
let b=document.getElementById("b");
let btm=document.getElementById("btn");
let ans=document.getElementById("Ans");
let result;
function add(){
    result=parseInt(a.value)+parseInt(b.value);
    //console.log(result)
    ans.innerHTML=`
    <h3>value of a =${a.value}</h3>
    <h3> value of b=${b.value}</h3>
    <h1>Result=${result}</h1>
    `

}
btm.addEventListener("click",add);