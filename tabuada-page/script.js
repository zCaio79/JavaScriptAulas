const search = document.querySelector('#search')
const warning = document.querySelector('.warning')
search.addEventListener('click', () => {
    const number = document.querySelector('#number').value
    if (number > 0) {
        
        warning.classList.remove('active')
        for (let i = (tabela.rows.length - 1); i > 0; i--) {
            tabela.deleteRow(i);
        }

        for (i = 1; i < 11; i++) {
            const tabela = document.querySelector('#tabela')
            linha = tabela.insertRow()
            const conta = linha.insertCell()
            const resultado = linha.insertCell()


            conta.textContent = number + " x " + i + " = "
            resultado.textContent = number * i
        }
    }else{
        for (let i = (tabela.rows.length - 1); i > 0; i--) {
            tabela.deleteRow(i);
        }
        warning.classList.add('active')
    }
});