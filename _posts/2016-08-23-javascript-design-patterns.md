---
title: Javascript Design Patterns
layout: post
date: '2016-08-23 16:47:49 -0300'
description: Introdução da serie Design Patterns em Javascript
image: halfeld-igor-luíz/javascript-design-patterns/dp.png
author: Igor Luíz
author_desc: Desenvolvedor front-end, apesar de as vezes pegar uns trabalhos de back,
  curte muito javascript e compartilhar os paranauês que sabe. Um dos criadores desse
  blog lindão =).
photo: halfeld-igor-luiz.jpg
github: halfeld
codepen: halfeld
---

# Introdução
E aí galera, estava pensando e apesar de ter que arrumar tempo no dia-a-dia e tals, achei que seria legal fazer uma serie aqui sobre **design patterns**  em javascript e neste primeiro post eu vou introduzir o assunto e nos seguintes já começamos como os primeiros patterns :D

# O que teremos nessa serie?
+ [Constructor Pattern](https://blog.mywork.art.br/constructor-pattern/)
+ Module Pattern
+ Revealing Module Pattern
+ Singleton Pattern
+ Observer Pattern
+ Mediator Pattern
+ Prototype Pattern
+ Command Pattern
+ Facade Pattern
+ Factory Pattern
+ Mixin Pattern
+ Decorator Pattern

# Pre-requisitos
Bem... basicamente você precisa saber o básico da linguagem e como funciona sua cadeia de prototipos.

# O que é Design Pattern?

> In software engineering, a software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system._wikipédia_

Design Pattern é uma solução para ser aplicada para resolver problemas no [Design de Software](https://en.wikipedia.org/wiki/Software_design){:target="_blank"}, outra forma de ver é pensar que são templates que resolvem diferentes problemas.

Resaltando aqui dois de seus beneficios:

+ **Solução para problemas**: Eles oferecem diversas abordagens para resolver problemas que por sua vez, pela experiência do desenvolvedor irá adaptar qual pattern lhe convém para a melhor situação.
+ **Facilidade de reuso de código**:  Um pattern lhe permite ter soluções _out-off-the-box_ fazendo com que você consiga adapta-lo para sua necessidade e com isso entrando no mérito do [D.R.Y. ](https://pt.wikipedia.org/wiki/Don%27t_repeat_yourself){:target="_blank"}


# Já usamos patterns!
Um exemplo bacana do nosso cotidiano é o jQuery que usa o _Facade pattern_, para por exemplo saber qual seletor usar, sabendo se pode usar o `getElementsByClassName` que não funciona em versões menores que a 9 do IE ou usar o `querySelectorAll`...

# Encerramento 
Design Pattern são sem dúvida alguma, muito úteis para diversas coisas,  então vamos começar a aprender eles para melhorar nosso código e nos ajudar a resolver nossos problemas do dia-a-dia :D

É isso ae pessoal, espero que estejam anciosos com a serie como eu estou, vou fazer de tudo pra conseguir escrever todos os patterns, e mesmo que não consiga, a própria comunidade pode fazer isso <3 