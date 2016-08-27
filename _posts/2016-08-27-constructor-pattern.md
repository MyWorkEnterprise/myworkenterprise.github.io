---
title: Constructor Pattern
layout: post
date: '2016-08-27 00:54:52 -0300'
description: Entendendo o Constructor Pattern no Javascript
image: halfeld-igor-luíz/constructor-pattern/constructor.png
author: Igor Luíz
author_desc: Desenvolvedor front-end, apesar de as vezes pegar uns trabalhos de back,
  curte muito javascript e compartilhar os paranauês que sabe. Um dos criadores desse
  blog lindão =).
photo: halfeld-igor-luiz.jpg
github: halfeld
codepen: halfeld
---

Hey pessoal! Começando com nosso primeiro pattern em javascript, vamos falar do _Constructor pattern_ :D

# O que é?
Em linguagens orientadas a objeto classicas, o construtor é um método especial usado para inicializar um objeto e alocar um espaço na memória para ele, em javascript como tudo são objetos exceto o `undefined` é bem interessante essa abordagem.

# Como funciona?
Em javascript, pelo mesmo até a versão do Ecmascript 5, não existiam classes e precisavamos usar as constructor functions se quiséssemos usar esse pattern.

## Syntax do ES5

```javascript
// Função construtora
// ================
function People (name, age) {
  this.name = name
  this.age = age
}

// Criando instancia
// ==============
var aluno = new People('Igor', 18)

console.log(
  aluno.name, 
  aluno.age
  )
```

**Uma convenção das constructor functions para diferenciar das funções comuns, é usar a primeira letra maiuscula, assim só de passar o olho já sabemos do que se trata**

Como você pode ver ali, usamos o `this` para refenciar o objeto que vai ser criado, usando ele para criar os atributos do objeto iqualando-os aos paramâtros que vão chegar da instanciação. 
Outra coisa que você pode notar também é o `new`, que cria o uma nova instância.

### Factory functions vs Constructor functions 

Factory functions, criam objetos também assim como as constructor functions, a diferença é que elas não iqualam o prototipo do objeto que vai ser criado com o da função, veja o exemplo:

```javascript
// Função construtora
// ===============
function CreateConstructor (name) {
  this.name = name
}

// Criando método no prototipo
// =======================
CreateConstructor.prototype.show = function () {
  console.log(this.name)
}

// Função fábrica
// ===========
function CreateFactory (name) {
  this.name = name
}

// Criando método no prototipo
// =======================
CreateFactory.prototype.show = function () {
  console.log(this.name)
}

var peopleContructor = new CreateContructor('Igor')
var peopleFactory = CreateFactory('Halfeld')

// Iqualando o prototipo do objeto com o da função,
// caso eu não faça isso, quando chamar a função 
// `show`, iria me retornar `is not a function`
// =====================================
peopleFactory.__proto__ = CreateFactory.prototype 


// Chamando o método do prototipo
// ==========================
peopleConstructor.show() // Igor
peopleFactory.show() // Halfeld
```

**Repare que na factory function não chamamos o `new`,  apenas invocamos a função**

## Syntax do ES6

```javascript
// Class
// ====
class People {
  construtor (name, age) {
    this.name = name
    this.age = age
  }
}

// Criando instancia
// ==============
let aluno = new People('Igor', 18)

console.log(
  aluno.name, 
  aluno.age
  )
```

Apesar de agora podermos criar classes explicitamente, ainda é possivel usar a syntax antiga.

# Encerramento
Então é isso ae pessoal! espero que tenham gostado do primeiro post da serie, caso eu tenha esquecido de alguma coisa ou vocês tenham ficado com alguma dúvida, só colocar aí nos comentários qué nós :D
