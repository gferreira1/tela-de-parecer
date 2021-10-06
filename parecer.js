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
         
    if (vel ==="0" )
    {
        res.innerHTML = `<div style="color:red; margin:10px; background-color: white;"> <p> ${genero} teve todas as aulas disponibilizadas de forma remota, porém não deu retorno das mesmas, tendo assim concluído ${vel}%) das atividades pedagógicas proposta </p>  <h1 style="color:red;margin:10px;">Insatisfatório</h1> </div>`
    }

      if(vel <0){
        window.alert('[erro] Verifique a nota do aluno  valor inferior')
        
    }
       
    else{
    if(vel < 1){
        res.innerHTML = `<div style="color:red; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}. Sua atividades foram raramente apresentadas com capricho e dedicação. Deu retorno de ${vel}% das atividade concluídas obtendo  uma progressão minima nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:red;margin:10px;">Insatisfatório</h1> </div>` 
    }
    if(vel >= 1 && vel <=20){
        res.innerHTML = `<div style="color:red; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}. Apresentou parcialmente as atividades conclúida. Deu retorno de  ${vel}% das atividade realizadas sendo que as mesmas  foram raramente apresentadas com capricho e dedicação, obtendo  uma progressão mínma nos conteúdos trabalhados no trimentres. ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:red;margin:10px;">Insatisfatório</h1> </div>` 
    }
  
    if(vel>= 21 && vel <=50){
        res.innerHTML = `<div style="color:yellow; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}. A atividades conclúida. Deu retorno de ${vel}% das atividade concluídas obtendo  uma progressão parcial nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:yellow;margin:10px;">Regular</h1> </div>`
    }

    if(vel >= 51 &&  vel <=80){
        res.innerHTML = ` <div style="color:orange; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}. Apresentou parcialmente as atividades conclúida. Deu retorno de ${vel}% das atividade concluídas obtendo  uma progressão sastisfatória nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:orange;margin:10px;">Bom</h1> </div>`
        
    }
    if(vel >=81 && vel <= 100){
        res.innerHTML =  ` <div style="color:green; margin:10px; background-color: white;"> <p> ${genero} comparece as aulas ${presenca}. Apresentou parcialmente as atividades conclúida. Deu retorno de ${vel}% das atividade concluídas obtendo  uma progressão sastisfatória nos conteúdos trabalhados no trimentres. Observa-se que precisa da ajuda do professor na realização das atividades pois demostra algumas dificuldades.Pois ${genero} tem condicoes de melhorar seu rendimento no proximo sementre </p>  <h1 style="color:Green;margin:10px;">Ótimo</h1> </div>` ;
              
    }
    if(vel > 100){
        window.alert('[erro] Verifique a nota do aluno e tente novamente')
    }
     
}

return
}

function somar() {
    
  var nota1 = parseFloat(document.getElementById("nota1").value);
     var nota2 = parseFloat(document.getElementById("nota2").value);
     var nota3 = parseFloat(document.getElementById("nota3").value);
     var res =window.document.querySelector('div#res')

     
    


     var media = (nota1 + nota2 + nota3)/3 ;

     if(media >= 7)
      if(media==10)
       alert("Uau! Aprovado com distin��o");

      else
       alert("Parabens, aprovado! Media "+media);
     else
      alert("Reprovado!")
      res.innerHTML = ` <div <h1>Ótimo</h1></div>` ;

    }


