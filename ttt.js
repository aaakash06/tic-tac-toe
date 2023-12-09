let button= document.querySelectorAll(".button");
let winnerPattern= [ [0,1,2],[0,3,6],[0,4,8],[2,4,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8]   ];
let text= document.createElement("h1");
text.innerText = "Horray! you have won"
let isX = true;
button.forEach( (butt) => {

    
butt.addEventListener( "click" , ()=>{

if(isX)
{
    butt.innerText = "X";
isX= false;

}
else
{
    butt.innerText = "O";
    isX= true;

}

butt.disabled= true;


checkWinner();

});






});


const checkWinner = () => {

    for( let position of winnerPattern)
    {
    let post1 = button[position[0]].innerText;
    let post2 = button[position[1]].innerText;
    let post3 = button[position[2]].innerText;
    
    if( post1!= "" && post2!= "" && post3!= ""){
    
        if(post1==post2  && post2==post3)
        {
            console.log("winner");
            document.querySelector("body").prepend(text);
        }
    
    
    
    }}
}
