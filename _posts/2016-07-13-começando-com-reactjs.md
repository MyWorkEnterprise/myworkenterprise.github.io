---
layout: post
title: Começando com ReactJs
date:   2016-07-13 14:29:55 -0300
description: Entendendo o ReactJs e seus conceitos
image: halfeld-igor-luíz/começando-com-reactjs/react.svg
author: Igor Luíz
author_desc: Desenvolvedor front-end, apesar de as vezes pegar uns trabalhos de back, curte muito javascript e compartilhar os paranauês que sabe. Um dos criadores desse blog lindão =).
photo: halfeld-igor-luiz.jpg
github: halfeld
codepen: halfeld
---

Introdução
==========

Hey galera, as vezes demora um pouco pra postar mas sai ein xD  
Mas deixando isso de lado que tal falarmos sobre React hoje?

Este post vai ser fortemente baseado em um outro post do [scotch.io](https://scotch.io/tutorials/learning-react-getting-started-and-concepts){:target="_blank"}


O que é React?
==============

React é um biblioteca desenvolvida para facilitar a criação de interativas, "mantenivéis" e reusavéis componentes de UI. É usando no Facebook em produção, e no Instagram sendo escrito todo em React.

Um de seus paranauês mais lokos é de não ser só processado no _client-side_, mas também é possível ser processado no _server-side_ podendo juntar as duas formas para trabalhar juntas.

Ele também usa um conceito chamado Virtual DOM que processa seletivamente uma virtualização do DOM, que com base nas alterações de estado, faz uma comparação e renderiza o que é necessário.


Mas como esse Virtual DOM funciona?
===================================

Imagine que você vai renderizar sua interface feita em React com headers, inputs, buttons..., antes dessa interface ir para o DOM do browser ela passa por um DOM virtual que é um objeto javascript.  
Assim sempre que houver mudança, o Virtual DOM vai redenrizar para a representação virtual e fazer a comparação com a representação antiga(caso não esteja sendo renderizado pela primeira), vendo somente o mínimo que precisa ser mudado, e depois fazer a troca de só o que mudou no DOM do browser.

Então o React acaba sendo muito rápido porquê o DOM do browser é muito lento.

Começando...
===========

Para começar você precisa ter o `react.js`, `react-dom.js` e  o `JSXTransformer.js` inclusos na página, seja baixando pelo site do [React](https://facebook.github.io/react/downloads/react-15.2.1.zip){:target="_blank"} com o `React Starter Kit` ou pelo [Bower](https://bower.io/){:target="_blank"}, e na tag script colocar `text/jsx` no type. É claro que em uma situação real você vai usar `browserify` ou `webpack`, mas em nossos exemplos vamos usar algo desse tipo, até porquê fica mais didático:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu App</title>
    <script src="build/react.js"></script>
    <script src="build/react-dom.js"></script>
    <script src="build/JSXTransformer.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/jsx">
      // Code...
    </script>
  </body>
</html>
```

O Básico
--------

Vamos construir um elemento em React:

```html
<script type="text/jsx">
    /** @jsx React.DOM */
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('app');
    );
</script>
```

se você nunca viu o `jsx`, é provável que esteja se perguntado:

> Peraí mano, isso aí é HTML dentro do Javascript?!

### JSX

É chamado JSX, _Javascript XML syntax transform_, ele permite escrever tags HTML(com algumas exceções) dentro do Javascript.
Eu disse com algumas exceções porquê temos que trocar o atributo `class` por exemplo por `className`, o `for` pelo `htmlFor`. Isso se dá pois class, for são palavras reservadas do Javascript.

Você não precisa usar o JSX, mas é mais recomendado tanto por escrever mesnos código, seguir um fluxo melhor, dentre outras coisas...

Componentes
-----------

Quando usamos o método render, nosso primeiro  argumento é o componente para ser renderizado, e o segundo argumento é onde ele vai ser montado. Nós vamos usar o método `createClass` para criar o componente, estender criar uma classe e estender o React component mas para esse exemplo vamos usar o `createClass` mesmo.

```javascript
// Criamos o componente
var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, world!</h1>
        );
    }
});

// Rederizamos o componente
ReactDOM.render(
    <MyComponent/>,
    document.getElementById('app')
);
```

Props
-----

Quando nós usamos componentes, podemos adiconar atributos chamados `props`. Esse atributos estão disponíveis no nosso componente como `this.props` e podemos usar também em nosso método render para informações dinâmicas.


```javascript
var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, {this.props.name}!</h1>
        );
    }
});

ReactDOM.render(<MyComponent name="Igor" />, document.getElementById('app'));
```

 Specs, Ciclo de Vida e State
-------------------------

O método `render` é o único necessário para criar o componente, mas existem vários outros para usar que são poderosos e úteis para o seu componente.

### Métodos de cliclo de Vida

  + `componentWillMount` – Invocado uma vez, no lado cliente e no server antes da renderização ocorrer.
  + `componentDidMount` – Invocado uma vez, no lado cliente, depois da renderização ocorrer.
  + `shouldComponentUpdate` – Retorna o valor determinado que o componente deveria atualizar.
  + `componentWillUnmount` – Invocado antes do componente ser desmontado.

### Specs

  + `getInitialState` – Retorna o valor inicial para o State.
  + `getDefaultProps` – Defini um valor caso o `props` não seja passado.
  + `mixins` – Um array de objetos, usando para estender a atual funcionalidade do componente.

Existem vários outros métodos de Specs e Clico de Vida, que você pode dar um confere marotado [aqui](http://facebook.github.io/react/docs/component-specs.html)


### State

Todo componente tem um objeto de State e de Props. State é definido usando o método `setState`, chamando ele você atualiza a interface, se você quiser definir um State inicial antes de qualquer interação, basta usar o método `getInitialState`, vamos dar uma olhada no código abaixo:

```javascript
var MyComponent = React.createClass({
    getInitialState: function(){
        return {
            count: 5
        }
    },
    render: function(){
        return (
            <h1>{this.state.count}</h1>
        )
    }
});
```

Eventos
-------

React tem um sistema de eventos _cross browser_. Os eventos são anexados como propriedades do componente e podem ser disparados, vamos ver isso fazendo esse exemplo.

```javascript
/** @jsx React.DOM */
var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

ReactDOM.render(<Counter/>, document.getElementById('app'));
```

e como resultado:

<iframe height="310" frameborder="0" style="width: 100%; overflow: hidden;" class="cp_embed_iframe " title="CodePen Embed" name="CodePen Embed" allowfullscreen="true" allowtransparency="true" scrolling="no" src="//codepen.io/kenwheeler/embed/kxrDu?user=kenwheeler&amp;default-tab=result&amp;slug-hash=kxrDu&amp;theme-id=2089&amp;height=310" id="cp_embed_kxrDu"></iframe>

Fluxo de dados unidirecional
============================

Em React, o fluxo de informações é unidirecional ao contrário do _two-way binding_ que existem bibliotecas/frameworks como o Angular. Isso quer dizer que em uma hierarquia múltiplos componentes, um parente comum deveria manusear o State e passa-lo para baixo na cadeia de componentes via Props.

Seu State deveria ser atualizado com o método `setState` para garantir que a interface atualize, se necessário.

Veja esse exemplo abaixo para entender o conceito em prática:

```javascript
/** @jsx React.DOM */
var FilteredList = React.createClass({

  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
       initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
});

ReactDOM.render(<FilteredList/>, document.getElementById('app'));
```

e como resultado:

<iframe height="475" frameborder="0" style="width: 100%; overflow: hidden;" class="cp_embed_iframe " title="CodePen Embed" name="CodePen Embed" allowfullscreen="true" allowtransparency="true" scrolling="no" src="//codepen.io/kenwheeler/embed/jDKEo?user=kenwheeler&amp;default-tab=result&amp;slug-hash=jDKEo&amp;theme-id=2089&amp;height=475" id="cp_embed_jDKEo"></iframe>

Encerramento
============

Bem isso é tudo pessoal, espero que tenham pegado o jeito da parada :D  
qualquer coisa comenta aí, deixando alguma dúvida, crítica, um opinião do post, tudo é válido.
