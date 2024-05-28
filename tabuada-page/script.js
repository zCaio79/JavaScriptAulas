const search = document.querySelector('#search') // Seleciona o botão de busca
const warning = document.querySelector('.warning') // Seleciona o elemento de aviso

// Adiciona evento de clique ao botão de busca
search.addEventListener('click', () => { 
    const number = document.querySelector('#number').value // Obtém o valor do input

    // Verifica se o número é maior que zero
    if (number > 0) { 

        // Remove o aviso existente
        warning.classList.remove('active') 

        // Remove todas as linhas da tabela
        for (let i = (tabela.rows.length - 1); i > 0; i--) { 
            tabela.deleteRow(i)
        }
        
        // Gera as linhas com cada conta de multiplicação e o seu resultado
        for (i = 1; i < 11; i++) { 

            const tabela = document.querySelector('#tabela')

            linha = tabela.insertRow()
            
            const conta = linha.insertCell()
            const resultado = linha.insertCell()

            // uma coluna recebe a conta
            conta.textContent = number + " x " + i + " = " 
            
            // a outra recebe o resultado
            resultado.textContent = number * i 
        }
    } else {

        // Remove linhas da tabela
        for (let i = (tabela.rows.length - 1); i > 0; i--) { 
            tabela.deleteRow(i)
        }

        // Da display em um aviso de Número inválido
        warning.classList.add('active') 
    }
})