---
layout: post                        
title: "A importância dos algoritmos"        
date: 2016-04-12 16:55:00 -0300    
description: Importância uma solução algoritmica antes mesmo de programar.
author: Bruno Malhano                    
author_desc: Sou Analista de Sistemas, desenvolvedor Front e Back End, professor de Nível técnico, na área de Informática. Sou apaixonado pela Aline Jordão, por tecnologia e a integração dela com sistemas. Atuo em projetos com arduíno e com BI. Sou também o fundador da My Work e um dos idealizadores deste Blog Lindão :)
photo: malhano.jpg                 
github: BrunoMalhano          
linkedin: bruno-malhano-83912a66      
---



Introdução
==========

Este post tem o intuito de abrir os olhos do desenvolvedor seja ele novato ou não, sobre o quão importante é elaborar uma solução algoritmica antes mesmo de programar em uma linguagem. Aos novatos, é importante aprender a lógica de programação, afinal para aqueles que sabem programar, uma nova linguagem é como um livro ainda não lido.

Nos dias atuais olhamos para todos os lados e vimos algum tipo de tecnologia implantada, ou sendo utilizada. Acordamos com um barulho estranho vindo de um smartphone, seja como um despertador ou qualquer tipo de notificação de uma rede social, já estamos conectados. Pegamos um ônibus e nossa passagem é debitada de um cartão ao encostar em uma máquina. Já estamos dependentes de tecnologia, precisamos estar conectados seja por satisfação própria ou por motivos de trabalho ou comunicação.

Com tudo, as áreas de TI vêm crescendo absurdamente, com uma grande demanda de profissionais. Cursos técnicos, faculdades, cursos EAD com cada vez mais alunos. O mercado de TI está necessitando de profissionais capacitados.

Uma das disciplinas que tem maior índice de reprovação são as de Fundamentos de Programação, Lógica, etc. Os Algoritmos são os mais temidos!

Programar na Unha!
==================

Todo grande sistema antes de ser desenvolvido, codificado e implementado seja qual for a linguagem é concebido de um algoritmo ou de uma solução algorítmica, ou ao menos a maior parte (Pelo menos seria o ideal). Explicarei o porquê.

E afinal, o que é um Algoritmo?
-------------------------------

O termo Algoritmo se refere a uma sequência de passos, tarefas, ações, regras que de forma finita e organizada permite solucionar um problema. Podemos classificar os algoritmos como computacionais e não computacionais.

Algoritmos Não Computacionais
================

Os não computacionais são aqueles que representam uma sequência de passos para uma tarefa como um manual de montagem, uma receita, etc... Tarefa esta que não pode ser processada por um computador, ao menos que ele seja escrito em um formato computacional.

**Algoritmo Fazer Café**

1 – Colocar água para esquentar  
2 – Esperar a água esquentar  
3 – Adicionar pó de café  
4 – Passar no coador  
5 – Colocar açúcar  
6 – Beber  

Neste exemplo utilizei uma tarefa simples (Para aqueles que sabem fazer café). Mas este é um algoritmo, pois representa uma sequência de passos finita e organizada de forma lógica, para executar uma determinada tarefa. Poderíamos detalhar mais este algoritmo:

**Algoritmo Fazer Café _v2_**  

1.	Pegar recipiente para esquentar água  
2.	Colocar água no recipiente  
3.	Acender o fogo  
4.	Esperar a água ferver  
5.	Pegar o pó de café  
6.	Colocar o pó no coador  
7.	Adicionar a água aos poucos no coador  
8.	Escolher açúcar ou adoçante  
	+ a.	Açúcar  
		+ i.	Adoçar com açúcar  
	+ b.	Adoçante  
		+ i.	Adoçar com adoçante  
9.	Beber o café  


Mas além do tamanho, qual a diferença entre eles?
-------------------------------------------------

Os dois tem a mesma função, **fazer café**. A grande questão é que cada pessoa pode ter a sua maneira particular para fazer o café, e isso não define se está certo ou errado e sim o resultado final: O café pronto. Poderíamos ficar aqui criando soluções para fazer café até as 22:30h mas sería desagradável (_Créditos ao: Mestre Anderson Nascimento_).

O segundo algoritmo está mais detalhado e poderia estar ainda mais. Não existe o certo, existe o **EFICIENTE**.

Qual seria o algoritmo mais eficiente para esta determinada situação? É necessário avaliar e definir.


Algoritmos Computacionais
================

O computador não executa nada. Para que ele faça alguma tarefa como por exemplo **acessar a internet** é necessário que ele execute um programa.

Um programa é um conjunto de instruções que indicam ao computador o que ele precisa fazer. Logo, um programa é do que um algoritmo
computacional descrito em uma linguagem de programação.

Abaixo estarei escrevendo um simples problema para que nós possamos implementá-lo utilizando a sintaxe do Português estruturado, e em seguida utilizaremos duas linguagens de programação **Java** e **Python**.


Para existir uma solução é preciso de um problema!
--------------------------------------------------

**Temos um problema!**

> Srº Manoel é dono de uma padaria e toda vez que vai calcular o salário dos funcionários acaba demorando horas, um dos motivos é que Srº Monoel veio de Portugal bem cedo e faltou a aula sobre porcentagem.  
Cada funcionário tem um salário mensal mais 3% de comissão em relação as suas vendas no mês, ele precisa de um programa que calcule o salário do funcionário.  
O programa precisa receber como entrada de dados o **Nome do Funcionário**, o **Salário fixo** e o **Total de vendas** feitas por ele no mês, após receber as entradas o programa deverá calcular o salário e exibir o nome do funcionário e o seu salário final, exibindo-o de forma detalhada.


Come on!
=======

Para executar uma tarefa o computador precisa de uma entrada de dados, sendo assim ele processa esta informação e retorna uma saída, podendo também armazenar a informação.


![Processamento de Dados](/assets/img/BrunoMalhano-bruno-malhano/importancia-de-um-algoritmo/pd.gif)


Precisamos identificar as entradas de dados, alguém precisa nos informar o **Nome do Funcionário**, **Salário Fixo** e **Total de Vendas** e esse alguém é o usuário.

Inicialmente precisaremos entender os conceitos básicos de fundamentos de programação sugiro buscar algum material na web, de fonte segura e com dados consistentes, ou pode acessar o [Curso em Vídeo](http://www.cursoemvideo.com){:target="_blank"} e buscar o curso de algoritmos.

Vamos criar um algoritmo não computacional para esboçar o problema:

1 - Receber o nome do funcionário.  
2 - Receber o salário do funcionário.  
3 - Receber o total de vendas.  
4 - Calcular a porcentagem.  
5 - Somar valor calculado de porcentagem ao salário.  
6 - Exibir as informações  

**Obs: Precisaremos de algumas variáveis uma para o nome, uma para o salario, outra para o valor de vendas e por fim a comissão.**


Criando o algoritmo
===================

Utilizando o programa [Visualg](http://www.apoioinformatica.inf.br/produtos/visualg){:target="_blank"}:  

```
algoritmo "Calcular Slário"

// Função : Calcular o salário líquido dos funcionários da padaria.
// Autor : Bruno Malhano
// Data : 12/04/2016

var
	nome: caracter
	salario, vendas, comissao: real

inicio

	escreval("Digite o nome do funcionário: ") // Conteúdo exibido na tela
	leia(nome)	// Função que "pega" o valor digitado pelo usuário e armazena na variável nome.

	escreval("Digite o salário do funcionário: ")
	leia(salario)

	escreval("Digite o valor de vendas do funcionário: ")
	leia(vendas)

	comissao <- vendas * 0.03 // ou comissao <- (vendas*3)/ 100 , aqui calculamos a porcentagem que ele ganhará em cima das vendas.

	salario <- salario + comissao // somamos o salario com a comissao, armazenando na mesma variável.

	//Exibindo os resultados

	escreval("Funcionário: ", nome)
	escreval("Salário líquido: ", salario)

fimalgoritmo
```
Ao executar com o atalho **F9** o resultado é:

![Prompt de execução](/assets/img/BrunoMalhano-bruno-malhano/importancia-de-um-algoritmo/Capturar.png)



Vamos ao café, ops ao Java
==========================

Nada complicado, ja entendemos o algoritmo e todas as etapas da sua construção atendendo as necessidades do Srº Manoel,
e uma hora dessas já realizou todos os pagamentos utilizando este protótipo! :)

```java
import java.util.Scanner;//Importando a classe Scanner

public class ProgramaCalcularSalario {

	public static void main(String[] args) {

		/**
		 * O objeto System.in é o que faz a leitura do que se escreve no teclado.
		 * A classe Scanner tem como objetivo separar a entrada dos textos.
		 */

		Scanner entrada = new Scanner(System.in); //Lê a partir da linha de comando

		/**
		 * Declarando as variáveis
		 */

		String nome;
		double comissao, salario, vendas;

		/**
		 * Recebendo as entradas do usuário
		 */

		System.out.println("Qual o nome do funcionário?");
		nome = entrada.next();

		System.out.println("Qual o salário do funcionário?");
		salario = entrada.nextFloat();

		System.out.println("Qual o total de vendas do funcionário?");
		vendas = entrada.nextFloat();

		comissao = (vendas * 0.03);
		salario = salario + comissao;


		System.out.println("Funcionário: " + nome +"\n" + "Salário Líquido: "+salario);

	}

}
```

O resultado é esse...  

![Prompt de execução](/assets/img/BrunoMalhano-bruno-malhano/importancia-de-um-algoritmo/Capturar2.png)


Python é Vida!
=============

Em Python tudo fica mais simples, e assim você consegue escrever um programa utilizando menos linhas de código e em alto nível.

Utilizando a IDLE, da propria instalação do Python.

```python
en = input("Digite o nome do Funcionário: ")
nome = en

en = input("Digite o salário do Funcionário: ")
salario = float(en)

en = input("Digite as vendas do Funcionário: ")
vendas = float(en)

comissao = vendas * 0.03

salario = salario + comissao

print("Funcionário: ", nome)
print("Salário líquido: ", salario)
```

o resultato é esse:

![Prompt de execução](/assets/img/BrunoMalhano-bruno-malhano/importancia-de-um-algoritmo/Capturar3.png)


Conclusão
=========

Então é isso galera, quis mostrar a todos que a linguagem de programação que se está utilizando não é o mais importante, e sim a  sua lógica para desenvolver, e resolver o problema em questão de forma rápida e eficiente.

Hoje para estar bem colocado no mercado precisamos saber mais de uma linguagem(saber mesmo), porém como já disse aprender outra é questão de tempo e estudo é claro. Estar aberto ao novo é fundamental, e hoje, o bom profissional de TI é aquele que está aberto a novidades, não se pode parar de estudar.

Lembrem-se o melhor algoritmo é o mais eficiente, ou seja o menor custo computacional.

Deixo aqui meu grande abraço. Até o próximo post!
