function calcular() {
    
        var element = document.querySelector ("div#res")
        element.classList.add("res")
    
    var txtv =window.document.querySelector('input#txtvel')
    var res =window.document.querySelector('div#res')
    var vel= Number(txtv.value) 
    var genero = ""
    var fpre = document.getElementsByName('presenca') 
    if(fpre[0].checked){
        presenca=' presencial  '
        
    }else if(fpre[1].checked){
        presenca="online"
    }
    var fsex = document.getElementsByName('genero') 
    if(fsex[0].checked){
        genero=' A aluna  '
        
    }else if(fsex[1].checked){
        genero="O Aluno"
    } 
         
    if(vel <0){
        window.alert('[erro] Verifique a nota do aluno e tente novamente1')
    }    
    else{
    if(vel < 1){
        res.innerHTML = '<p style="color:Red;"> Rodou</p>  ' 
    }
    if(vel >= 1 && vel <29){
        res.innerHTML = '<p style="color:#ff5e00;">  voce não entregou os trabalhos </p> <h1 style="color:red;">Insatisfatório</h1>' 
    }
  
    if(vel>= 30 && vel <=49){
        res.innerHTML = '<p style="color:orange;">Passou ali <h1 style="color:Orange;">Regular</h1> </p>  ' 
    }

    if(vel >= 60 &&  vel <=79){
        res.innerHTML = ` <p style="color:Green;"> ${genero} comparece as aulas ${presenca}.Apresentou parcialmente as atividades conclúida.Deu retorno de apenas ${vel}% das atividade conclídas obtendo  uma progregrão parcial nos conteúdos trabahlahos no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.mas é uma ${genero} tem condicoes de melhorar seu rendimento no proximo sementre <h1 style="color:Green;">Bom</h1> </p>`
        
    }
    if(vel >=80 && vel <= 100){
        res.innerHTML =  ` <p style="color:blue; margin:10px"> ${genero} comparece as aulas ${presenca}.Apresentou parcialmente as atividades conclúida.Deu retorno de apenas ${vel}% das atividade concluídas obtendo  uma progregrão parcial nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:Green;margin:10px">Ótimo</h1>` ;
              
    }
    if(vel > 100){
        window.alert('[erro] Verifique a nota do aluno e tente novamente')
        res.innerHTML = '<p class="res" style="color:Red;font-size:45px; font-weight:900;""> Nota invalida, colocar nota até 100</p> ';
    }
     
}

return
}

