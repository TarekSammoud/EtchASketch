function removeallchildnodes(parent)
{
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild) ;
    }
}


function setBoxSize(boxNB)
{
    const container = document.querySelector('.container') ; 
    const contHeight = parseInt(getComputedStyle(container).height) ;
    const contWidth= parseInt(getComputedStyle(container).width);
    


    var boxlength = Math.sqrt((contHeight*contWidth  / boxNB ))   ; 


    const squares= document.querySelectorAll('.box')

    squares.forEach(square => { 

            square.style.width = `${boxlength}px` ; 
            square.style.height = `${boxlength}px` ; 

   
    } ) ;


}


function createGrid(boxNB)
{
    const main=document.querySelector('.container') ; 
    removeallchildnodes(main)

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

