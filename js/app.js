let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let arrPessoas = []



function cadastrar() {

      let pessoa = {
      nome: document.getElementById('nome').value,
      sobrenome: document.getElementById('sobrenome').value,
      categoria: document.getElementById('categoria').value,
      peso: document.getElementById('peso').value,
      altura: document.getElementById('altura').value,

    }

    arrPessoas.push(pessoa)
    console.log(arrPessoas);

    imprimirDados()
  
    //div.innerHTML = "<p> Nome: " + nome + " sobrenome: " + sobrenome + " Categoria: " + categoria + " IMC: " + imc.toFixed(2) +" - "

   
        
     console.log(pessoa.nome,pessoa.sobrenome,pessoa.categoria,pessoa.peso,pessoa.altura);

    classificacao (imc) 
}

   function calcularImc(peso, altura) {
  return peso / Math.pow(peso, 2)
    } 
    
    function classificacao(imc) {

    
 
    if(imc <= 18.5) {
        return " Abaixo do Normal "
      } else if (imc <= 24.9) {
        return " Normal "
      } else if (imc <= 29.9) {
        return " Sobre peso "
      } else if (imc <= 34.9) {
        return " Obesidade grau 1 "
      } else if (imc <= 39.9) {
        return " Obesidade grau 2 "
      } else {
        return " Obesidade grau 3 "
      }
       }
      function imprimirDados(){
 
        div.innerHTML=''
        for(let i = 0; i < arrPessoas.length; i++){
          div.innerHTML +=`  
                        <tr>
                            <td>${arrPessoas[i].nome} ${arrPessoas[i].sobrenome}</td>
                            <td> ${arrPessoas[i].categoria}</td>
                            <td> ${calcularImc(arrPessoas[i].peso, arrPessoas[i].altura).toFixed(2)}
                            ${classificacao(calcularImc(arrPessoas[i].peso, arrPessoas[i].altura))}</td>
                        </tr>
                           `
                         }
                        }
                      

      btn.addEventListener('click',cadastrar)   