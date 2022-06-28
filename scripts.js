let color = 'rainbow' ;

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
    


    var boxlength = Math.sqrt((contHeight*contWidth  / boxNB )) -3   ; 


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


    const rainbowBtn = document.getElementById('rainbowBtn') ;
    const blackBtn = document.getElementById('blackBtn');
    const clearBtn = document.getElementById('clearBtn') ; 

    clearBtn.addEventListener('click',()=>{
        squares.forEach(square =>{
            square.style.backgroundColor='#cccccc'
        })
    })

    blackBtn.addEventListener('click',()=>{
        color = 'black' ; 
    }) ;
     
    
    rainbowBtn.addEventListener('click',()=>{
        color = 'rainbow' ; 
    }) ;
     

    squares.forEach(square => { 
        square.addEventListener('mouseover', function(e)  {
            const hex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            console.log(e) ;
            if (color=='black')
            square.style.backgroundColor = 'black' ; 
            if (color=='rainbow')
            square.style.backgroundColor = hex ; 
    
        }) ;
    } ) ;


}
