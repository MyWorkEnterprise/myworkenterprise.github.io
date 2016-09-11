---
title: Big O Notation
layout: post
date: '2016-09-10 03:00:00'
description: Melhorando a performance/complexidade de um algoritmo
image: halfeld-igor-luíz/big-o-notation/big.png
author: Igor Luíz
author_desc: Desenvolvedor front-end, apesar de as vezes pegar uns trabalhos de back,
  curte muito javascript e compartilhar os paranauês que sabe. Um dos criadores desse
  blog lindão =).
github: halfeld
codepen: halfeld
photo: halfeld-igor-luiz.jpg
---

# Introdução

Heyy pessoal apesar de estar fazendo uma serie de [Javascript Design Patterns](https://blog.mywork.art.br/javascript-design-patterns/), resolvi escrever também sobre isso porquê é extremamente importante saber os conceitos da computação... mesmo sendo importante aprender Vue, React, <s>Angular</s>... elas morrem e o que fica é a base, ferramentas são úteis mas você nota que frequentemente aparece framework/bibliotecas mesalmente/semanalmente e elas se vão na mesma velocidade.

Logo se você quer se destacar, e realmente saber como as coisas funcionam, corra atras de algoritmos... 
Eu não comecei a faculdade, logo sempre acabei sendo meio carente desta base(falo isso porquê é lá que vemos muito), mas estou também sempre correndo atras para melhorar ela e implementar soluções cada vez melhores para os meus códigos.

Então vamos hoje falar sobre o **Big O Notation** :D

# O que é esse cara?

> In computer science, big O notation is used to classify algorithms by how they respond to changes in input size, such as how the processing time of an algorithm changes as the problem size becomes extremely large. Big O notation characterizes functions according to their growth rates: different functions with the same growth rate may be represented using the same O notation. _Wikipédia_

Big O notation é usado em computação para descrever a perfomance ou a complexidade de um algoritmo, ele especificamente descreve o **pior cenário possível** e  pode ser usado também para descrever o tempo, memória, espaço em disco... requeridos por um algoritmo.


# Entendendo esse cara

Para entender mais rápido, vamos indo exemplificando com código :D

## O(1)

Descreve um algoritmo que sempre executa no mesmo tempo/memória/espaço em disco, independentemente do tamanho do input.

```javascript
const isUndefined = v => (v === undefined)
```

## O(N)

Descreve um algoritmo que a performance esta diretamente ligada com a proporção do input, um exemplo é quando percorremos um array fazendo uma busca em algo nele, nisso é onde é visto o **pior cenário possível**,  já que a quantidades de operações cresce de acordo com a quantidade de dados na entrada.

```javascript
const brothers = [
  { name: 'lek', type: 'user' },
  { name: 'mano', type: 'admin' },
  { name: 'jão', type: 'owner' }
]

brother.forEach(bro => (bro.name === 'jão') ? bro : false)
```

**Não estou fazendo o código do jeito mais recomendado, é apenas para demonstrar o exemplo**

como você pode ver acima, eu gasto 3 operações para encontrar o `jão` e isso em uma quantidade de dados grande pode e vai se tornar um problema, nesses casos seria bacana implementar um algoritmo de [busca binária](https://en.wikipedia.org/wiki/Binary_search_algorithm){:target="_blank"} que como visto no gif abaixo se sairia melhor

![demonstração no gif de um busca binária](/assets/img/halfeld-igor-luíz/big-o-notation/binary-search.gif)

bem melhor não :D

## O(N²)

É descrito basicamente como o anterior, só que aqui irá ter iterações nas iterações...

![fecho o laptop e foda-se](/assets/img/halfeld-igor-luíz/big-o-notation/enough-internet.gif)

melhor amostrar no código né?

```javascript
const brothers = [
  { 
    name: 'lek', 
    type: 'user' ,
    friends: [1, 2, 3]
  },
  { 
    name: 'mano', 
    type: 'admin' ,
    friends: [1, 2, 3]
  },
  { 
    name: 'jão', 
    type: 'owner' ,
    friends: [1, 2, 'pimba']
  }
]

brother.forEach(bro => {
  bro.forEach(friend => (friend === 'pimba') ? friend : false)
})
```

se você entendeu o exemplo anterior, acho que você consegiu entender o problema aí só de olha...


## O(2&#8319;)

Descreve um algoritmo cuja complexidade cresce a cada iteração, um bom exemplo disso é a [Sequência de Fibonacci](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci){:target="_blank"}

```javascript
const f = n => (n === 0) ? 1 : (n * f(n - 1))
```

ou seja, é **recursivo**, caso você não saiba o que é recursividade, um exemplo muito bom que eu inclusive vi no [Front in Sampa](http://frontinsampa.com.br/){:target="_blank"} é o da latinha de royal.

Você percebe a recursividade quando você vê a latinha de royal na latinha de royal na latinha de royal...

![latinha de royal](/assets/img/halfeld-igor-luíz/big-o-notation/royal.png)


# Referências

+ [Artigo do rob-bell.net](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/){:target="_blank"}
+ [Wikipédia](https://en.wikipedia.org/wiki/Big_O_notation){:target="_blank"}

# Encerramento

Bem é isso ae pessoal, essa foi uma introdução bem básica do assunto, mas já é um inicio sobre o tema.
Agora voltamos a programação normal com a serie de patterns com js xD
