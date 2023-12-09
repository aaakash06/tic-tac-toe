let tb = document.querySelector("button");

tb.addEventListener ( "click", () => {

let att = document.body.getAttribute("class");

console.log(att);

if( att == "body")
{
    document.body.setAttribute("class","body2")

}
else
{
    document.body.setAttribute("class","body")

}



    
} );