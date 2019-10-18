var id1 = 0;
  var id2 = 0;
  var elem = document.getElementById("box1");   
  var elem2 = document.getElementById("box2");
  var d = document.getElementById("container");
  var pedid=document.getElementById("pedido");
  var t = 0;
  var score=0;
  var cores1=0, cores2=0;
  var randomm=0;
  var clique1 = 0;
  var clique2 = 0;
  var finish = 0, level=1, acertos=0, tim=10;
  var levels=0, intervalo=2000;
    
 function myMove(){
    var pos = 0, pos2 = 0;
    finish = 0;  
    tim=10;
    if(t != 0){
      clearInterval(t);
    }
    if(id1!=0){
        clearInterval(id1);  clique1 = 0;
    }
     if(id2!=0){
        clearInterval(id2);  clique2 = 0;
    }
    
    t = setInterval(timer, 10000);
    id1 = setInterval(frame1, intervalo);
    id2 = setInterval(frame2, intervalo);
    tempo=setInterval(temporizador, 905);
    levels=setInterval(aumentos, 500);
     
     function frame1() {
      pos = Math.floor(Math.random()*350);
      pos2 = Math.floor(Math.random()*350);
      elem.style.top   = pos + 'px'; 
      elem.style.left  = pos2 + 'px';
      cores1=Math.floor(Math.random()*3);
      switch(cores1){
        case 0: elem.style.backgroundColor="black"; break;
        case 1: elem.style.backgroundColor="white"; break;
        case 2: elem.style.backgroundColor="gray"; break;
        }
      }
    function frame2() {
      pos = Math.floor(Math.random()*350);
      pos2 = Math.floor(Math.random()*350);
      elem2.style.top  = pos + 'px'; 
      elem2.style.left = pos2 + 'px';
      cores2=Math.floor(Math.random()*3);
      switch(cores2){
        case 0: elem2.style.backgroundColor="black"; break;
        case 1: elem2.style.backgroundColor="white"; break;
        case 2: elem2.style.backgroundColor="gray"; break;
        }
    }
     if(randomm==3) randomm = 0;
     switch(randomm){
            case 0: document.getElementById("msg").innerHTML = "Clique na cor Preta";
                    pedid.style.backgroundColor="black";
                    break;
            case 1: document.getElementById("msg").innerHTML = "Clique na cor Branca"; 
                    pedid.style.backgroundColor="white";
                    break;
            case 2: document.getElementById("msg").innerHTML = "Clique na cor Cinzenta"; 
                    pedid.style.backgroundColor="gray";
                    break;
            default:document.getElementById("msg").innerHTML = "Cor nao existe"; 
                    pedid.style.backgroundColor="red";
                    break;
            }
         randomm =randomm+1;
  }
    function temporizador(){
        document.getElementById("temp").innerHTML = "Tempo: "+tim+"s";
        tim=tim-1;
    }
    function aumentos(){
        if(acertos==4){
            intervalo=intervalo-500;
            acertos=0;
            level=level+1;
            document.getElementById("level").innerHTML = "Level: "+level;
        }
        if(level==4){
            document.getElementById("msg").innerHTML = "Parabens voce terminou o jogo parabens!";
            intervalo=2000;
            pedid.style.backgroundColor="Blue";
            acertos=0;
            timer();
        }
        
    }
  function clicar1(){
      if (finish == 1) return;
      if (cores1==randomm-1){ 
       clique1 = 1;
       score=score+10;
       document.getElementById("scoreId").innerHTML = "Score: "+score;
       elem.style.backgroundColor="red";
       clearInterval(id1);
         if(clique2 == 1){ finish = 1;
         clearInterval(t);
        acertos=acertos+1;
         document.getElementById("msg").innerHTML = "Voce Venceu!";
        clearInterval(tempo);
        myMove();
        }
     }}
/*function levels(){}*/
  function clicar2() {
      if (finish == 1) return;
      if (cores2==randomm-1){
        clique2 = 1;
        score=score+10;
        document.getElementById("scoreId").innerHTML = "Score: "+score;
        elem2.style.backgroundColor="red";
        clearInterval(id2);
          if(clique1==1){ finish = 1;
          acertos=acertos+1;
          clearInterval(t);
          document.getElementById("msg").innerHTML = "Voce venceu!";
            clearInterval(tempo);
                         myMove();
       }
     }}
  
  function timer(){
      clearInterval(tempo);
        finish = 1;
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(t);
        document.getElementById("msg").innerHTML = "Acabou o Tempo!";
}