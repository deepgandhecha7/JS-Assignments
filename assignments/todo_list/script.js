var but=document.getElementsByTagName("button")[0];
var ip=document.getElementsByTagName("input")[0];
var docc=document.getElementsByClassName("todos")[0];
let cnt=0;
but.addEventListener("click",()=>{
    var tex=ip.value;
    console.log(tex);
    let p=document.createElement("p");
    p.setAttribute("key",cnt++);
    console.log(p);
    p.textContent=tex;
    docc.appendChild(p);

    // p.addEventListener("click",()=>{
    //     remove(this);
    // })
    p.addEventListener("click",function(){remove(this)},false)




})

function remove(x){
    x.remove();
}