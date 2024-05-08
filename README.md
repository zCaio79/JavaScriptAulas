
# **Tópicos JavaScript**

> Aluno : ***Caio Henrique Faria Mendes*** | :shipit:

### **Conteúdos Abordados** :

- [ IF , Else IF e Else ]
- [ Switch Case ]
- [ For loop ]
- [ While loop ]

> [!NOTE] ***Exemplos completos estão no arquivo -->** `topics.js`

---
### _IF_
> Estrutura Condicional baseada em comparação composta por (`if` , `else if` , `else`), seja calculos, estados booleanos, etc ... 

### _If Else_

```JavaScript
    //Caso a condição seja Verdadeira a ação é disparada.

    if (condição) { ação } 

    //Caso nenhuma condição seja Falsa outra ação é disparada.
    else { outra ação } 
```
### _Else If_

```JavaScript
    if (condição) { ação } 

    //Caso a primeira condição não seja Verdadeira, podemos adicionar uma segunda comparação, que dispara outra ação.

    else if (segunda condição) { outra ação }
    //Caso nenhuma das condições seja satisfeita o Else dispara outra ação.

    else { outra ação }
```
### _Swicth Case_
```JavaScript
    //Utilizado quando temos varias condições de comparação, substituindo o uso do If.

    Switch(alvo){

        //Observa se o alvo satisfaz alguma condição e então dispara seu respectivo bloco de codigo presente no case.

        case (condição):
            bloco de ação
            break
        case (outra condição):
            bloco de ação
            break
        case (outra condição):
            bloco de ação
            break

        //Caso alvo não satisfaça nenhuma condição case, o default dispara uma ultima opção de ação. Obs: Break serve para quebrar a execução das comparações assim que uma é satisfeita.

        default:
            bloco de ação
            break
    }
```
---


| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/129559720?s=400&u=00e5ce096d7d7820bf6eab559b6ed448e7ebce60&v=4" width="130px;"><br><sub> Caio Mendes </sub>](https://github.com/zCaio79)
|:-:|