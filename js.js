let i = 1;
var szam1 = "";
var szam2 = "";
let jel = 0;
let jel2 = 0;
let megoldas = 0;
function visibl(){
    
    i++;
    if(i%2==0){
        document.getElementById('nagydb').style = 'display:block;visibility:visible;'
    }
    else{
        document.getElementById('nagydb').style = 'display:none;visibility:hidden;'
    }
    
}

function getValue(num ){  
    if(jel == 0){
        szam1+=num;
        console.log(szam1)}
    if(jel>0){
        
    szam2+=num;
    console.log(szam2)
    }
}


  

function getCount(nam){
    jel++;
    console.log(nam)
        switch (nam){
            case '+':               
                jel2 = 1;                
                break;
            case '-':
                jel2 = 2;
                break;
            case '/':
                jel2 = 3;
                break;
            case '*':
                jel2 = 4;
                break;
            case '=':
                switch(jel2){
                    case 1:megoldas = Number(szam1)+ Number(szam2);break;
                    case 2:megoldas = Number(szam1)- Number(szam2);break;
                    case 3:megoldas = Number(szam1)/ Number(szam2);break;
                    case 4:megoldas = Number(szam1)* Number(szam2);break;
                }
                console.log(megoldas);
                szam1 = "";
                szam2 = "";
                megoldas ="";
                jel = 0;
                jel2 =0;
                break;
            case 'C':
                megoldas = "";
                szam1 = "";
                szam2 = "";
                break;
            case 'CE':
                if(jel == 0){
                    for(i = 5;i>3;i--){
                        szam1[i] = "2";
                    }
                }
                    console.log(szam1);
                if(jel>0){

                }  
        }
    
}