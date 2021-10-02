function calcular() {
    
        var element = document.querySelector ("div#res")
        element.classList.add("res")
    
    var txtv =window.document.querySelector('input#txtvel')
    var res =window.document.querySelector('div#res')
    var vel= Number(txtv.value) 
    var genero = ""
    var fpre = document.getElementsByName('presenca') 
    if(fpre[0].checked){
        presenca=' online '
        
    }else if(fpre[1].checked){
        presenca="presenciais"
    }
    var fsex = document.getElementsByName('genero') 
    if(fsex[0].checked){
        genero=' A aluna  '
        
    }else if(fsex[1].checked){
        genero="O Aluno"
    } 

    if(!vel){
        window.alert('[erro] Verifique campo vazio')
        return 
    } 
         
    if(vel <0){
        window.alert('[erro] Verifique a nota do aluno  valor inferior')
        return 
    }
       
    else{
    if(vel < 1){
        res.innerHTML = `<div style="color:red; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}. Apresentou parcialmente as atividades conclúida.Deu retorno de apenas ${vel}% das atividade concluídas obtendo  uma progregrão parcial nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:red;margin:10px;">Insatisfatório</h1> </div>` 
    }
    if(vel >= 1 && vel <=29){
        res.innerHTML = `<div style="color:red; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}.Apresentou parcialmente as atividades conclúida.Deu retorno de apenas ${vel}% das atividade concluídas obtendo  uma progregrão parcial nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:red;margin:10px;">Insatisfatório</h1> </div>` 
    }
  
    if(vel>= 30 && vel <=49){
        res.innerHTML = `<div style="color:yellow; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}.Apresentou parcialmente as atividades conclúida.Deu retorno de apenas ${vel}% das atividade concluídas obtendo  uma progregrão parcial nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:yellow;margin:10px;">Regular</h1> </div>`
    }

    if(vel >= 60 &&  vel <=79){
        res.innerHTML = ` <div style="color:orange; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}.Apresentou parcialmente as atividades conclúida.Deu retorno de apenas ${vel}% das atividade concluídas obtendo  uma progregrão parcial nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:orange;margin:10px;">Bom</h1> </div>`
        
    }
    if(vel >=80 && vel <= 100){
        res.innerHTML =  ` <div style="color:green; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}.Apresentou parcialmente as atividades conclúida.Deu retorno de apenas ${vel}% das atividade concluídas obtendo  uma progregrão parcial nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:Green;margin:10px;">Ótimo</h1> </div>` ;
              
    }
    if(vel > 100){
        window.alert('[erro] Verifique a nota do aluno e tente novamente')
    }
     
}

return
}

