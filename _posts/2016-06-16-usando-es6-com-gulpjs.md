---
layout: post                                                
title:  "Usando ES6 com GulpJs"                                           
date:   2016-06-16 20:02:25 -0300                           
description: Usando as features do ES2015
image: halfeld-igor-luíz/usando-es6-com-gulpjs/es6-gulp.png
author: Igor Luíz
author_desc: Desenvolvedor front-end, apesar de as vezes pegar uns trabalhos de back, curte muito javascript e compartilhar os paranauês que sabe. Um dos criadores desse blog lindão =).
photo: halfeld-igor-luiz.jpg
github: Halfeld
codepen: Halfeld
---


Introdução
==========

Hey galera, um post rapidex aqui xD, geralmente usamos o babel pra compilar o javascript quando queremos usar as novas _features_ do Ecmascript 2015, mas surge uma dúvida de como usar ele no gulpfile.


Como fazer?
==========

A partir da versão do 3.9 do Gulp, já podemos usar o babel pra compilar o código do gulpfile. Então vamos lá, primeiro instalamos as dependências:

```sh
npm install --sade-dev gulp babel-core babel-preset-es2015
```
depois vamos criar o `gulpfile.babel.js` e o `.babelrc.`, dentro do `.babelrc` colocamos o seguinte:

```sh
{
  "presets": ["es2015"]
}
```

e no `gulpfile.babel.js` já podemos usar  `import/modules`, `arrow functions`, `template strings`, `constants`, e assim por diante, vamos fazer um teste:

```js
import gulp from 'gulp';

gulp.task('default', () => {
  console.log('Hello World');
});
```

e minha saída no terminal:

```sh
[22:53:57] Requiring external module babel-core/register
[22:53:57] Using gulpfile /tmp/gulpteste/gulpfile.babel.js
[22:53:57] Starting 'default'...
Hello World
[22:53:57] Finished 'default' after 128 μs
```

Encerramento
============

Então é isso ae pessoal, qualquer coisa é só colocar nos comentários :D
