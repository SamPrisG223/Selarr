
const showMenu = document.getElementsByClassName('menubar')[0]
const log = document.getElementsByClassName('log')[0]
const togle = document.getElementsByClassName('collapse')[0]

togle.addEventListener('click', () => {
    if(showMenu.style.display === 'flex')    
    {
        showMenu.style.display='none';
    }

    else{
        showMenu.style.display='flex';
    }
        
    
    
})