let i = 1;
function visibl(){
    
    i++;
    if(i%2==0){
        document.getElementById('nagydb').style = 'display:block;visibility:visible;'
    }
    else{
        document.getElementById('nagydb').style = 'display:none;visibility:hidden;'
    }
    console.log(i)
}