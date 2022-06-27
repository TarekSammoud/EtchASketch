let boxNB = 16 ; 

function howManyBoxes ()
{

    const input = document.getElementById("size") ; 
    input.addEventListener('input',function () {
        boxNB = this.value ; 
        console.log(boxNB) ;
    })

}

function setBoxSize()
{
    const container = document.querySelector('.container') ; 
    const contHeight = parseInt(getComputedStyle(container).height) ;
    const contWidth= parseInt(getComputedStyle(container).width);
    
    var boxlength = Math.sqrt((contHeight*contWidth  / boxNB )) - 3  ; 
    const squares= document.querySelectorAll('.box')

    squares.forEach(square => { 

            square.style.width = `${boxlength}px` ; 
            square.style.height = `${boxlength}px` ; 

   
    } ) ;


}


function createGrid()
{
    const main=document.querySelector('.container') ; 
    howManyBoxes ()
    for (let i =0 ;i<boxNB ; i++)
    {
        const newT = document.createElement('div') ; 
        newT.classList.add("box")
        main.appendChild(newT) ;
    }
}

function changeColor()
{
    const squares= document.querySelectorAll('.box')

    squares.forEach(square => { 
        square.addEventListener('mouseover', function(e)  {
            console.log(e) ;
            square.style.backgroundColor = 'black' ; 
    
        }) ;
    } ) ;


}
