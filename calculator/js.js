let i = 1;
var szam1 = "";
var szam2 = "";
let jel = 0;
let jel2 = 0;
let megoldas = 0;
var sign = "";
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
        document.getElementById('szamter').innerHTML=szam1;}
    if(jel>0){
        
    szam2+=num;
    document.getElementById('szamter').innerHTML=szam2;
    document.getElementById('szamolt').innerHTML=szam1 +sign;
    }
}

function getCount(nam){
    jel++;
    sign = nam;
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
                document.getElementById('szamter').innerHTML=megoldas;
                szam1 = "";
                szam2 = "";
                megoldas ="";
                jel = 0;
                jel2 =0;
                break;
            case 'C':
                jel = 0;
                document.getElementById('szamter').innerHTML="0";
                document.getElementById('szamolt').innerHTML="";
                megoldas = "";
                szam1 = "";
                szam2 = "";
                break;
            case 'CE':
                if(jel == 0){
                    szam1 = "";  
                        document.getElementById('szamter').innerHTML= szam1;   
                }
                if(jel>0){
                    szam2 = "";
                    document.getElementById('szamter').innerHTML= szam2;

                }
                break;
            case'x2':
            if(jel == 0){
                document.getElementById('szamter').innerHTML= Math.pow(szam1,2)
            }
            if(jel>0){
                document.getElementById('szamter').innerHTML = Math.pow(szam2,2)
            }
            break;
        }
    
}