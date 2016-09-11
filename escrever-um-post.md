---
title: Quer escrever?
layout: post
description: Veja como...
permalink: "/escrever-um-post/"
---

# Requisitos...

É super fácil você começar a escrever, basta saber **Git** e **Markdown**, em caso de não saber, é só dar uma olhada nesses links:

- [Git](https://try.github.io/levels/1/challenges/1){:target="_blank"}
- [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet){:target="_blank"}

sabendo disso, você já consegue escrever :)

# Começando...

Para escrever você precisa ir no [repositório](https://github.com/MyWorkEnterprise/myworkenterprise.github.io/){:target="_blank"} desse blog no github e fazer um fork para sua conta, logo depois clone esse repositório "forkeado" da sua conta para seu computador.

É necessário ter o [Ruby](https://www.ruby-lang.org/pt/){:target="_blank"}, o [Bundler](http://bundler.io/){:target="_blank"}, o [NodeJS](https://nodejs.org/en/){:target="_blank"} e o [Gulp](http://gulpjs.com/){:target="_blank"} instalado, feito isso entre na pasta clonada pelo terminal e:

## Instale as dependências

```sh
bundle install

npm install
```

## Inicie o servidor

```sh
bundle exec jekyll s
```

e pronto você já pode escrever um post :D

# Tacando-le o pau no carrinho

Depois de instalar as dependências, basta rodar no seu terminal `./new-post` e responder as perguntas. Será criado a pasta onde você deverá colocar suas imagens, e também criará um arquivo dentro da pasta `_posts` com o nome do seu post, com as devidas informações já definidas em que as mesmas, correspondem:

```
---
layout: post                                                       # obrigatório
title:  "titulo do seu post"                                       # obrigatório
date:   YYYY-MM-DD hh:mm:ss -0300                                  # obrigatório
description: breve descrição do post                               # obrigatório
image: seu-user-no-github-seu-nome/nome-do-post/sua-imagem.png     # obrigatório
author: seu nome                                                   # obrigatório
author_desc: descrição-quem-é-você(seja breve :P)                  # obrigatório
photo: nome da foto                                                # opcional
github: seu user no github                                         # opcional
twitter: seu user no twitter                                       # opcional
linkedin: seu user no linkedin                                     # opcional
codepen: seu user no codepen                                       # opcional
---

Escrevendo meu post...
======================
```

na opção `photo`, se você desejar, poderá colocar sua foto para aparecer como autor do post, é só colocar a foto dentro na pasta `/src/img/author` e colocar o nome dela alí, ex: **seu-user-no-github-seu-nome.png**.

E também na opção `image`, é onde vai ficar a imagem do seu post,a imagem principal.

Após isso, você acessando `localhost:4000/admin` e entrando em posts no menu ao lado, basta clicar no seu e taca-le pau

**Caso não consiga rodar o `./new-post`, basta dar permição de execução ao arquivo com `chmod +x new-post`.**

## Inserindo imagens

Caso vá usar alguma imagem no seu post, crie uma uma nova pasta dentro de `src/img/` seguindo o padrão `src/img/seu-user-no-github-seu-nome/nome-do-post`, assim você consegue usar imagens chamando elas dessa forma:

```
[Sua imagem lindona](/assets/img/seu-user-no-github-seu-nome/nome-do-post/sua-imagem.png)
```

e depois executar a task de imagem:

```
gulp img
```

## Links externos

Em caso de links externos coloque a opção target=blank, ex:

```
[Google](http://www.google.com){:target="_blank"}
```

sabendo disso é só taca-le o pau no carrinho :P


## Arquivos usados no post

Existe um pasta chamada `examples/`, dentro dela você pode colocar os arquivos usados no seu post, seguindo o padrão `examples/seu-user-no-github-seu-nome/nome-do-post/exemplo-do-post`, podendo ter várias pastas de exemplos dentro de `nome-do-post`.

## Colocando vídeos

Para inserir vídeos, você deverá fazer o upload dele para o youtube e copiar o iframe para seu arquivo do post.

**esse modo de inserir vídeos é provisório, em breve terá um jeito mais fácil e prático ;)**

# Enviando o post

Para enviar basta fazer um `commit` das mudanças para o seu repositório depois um pull request para o repositório do blog, logo depois ele entrará em análise para ver erros de português(a final todo mundo erra :P), haverá uma breve overview no conteúdo e se tiver tudo certinho será feito o merge.

# Concluindo

Sabemos que é muita burocrácia para escrever um simples post, mas não pense que você esta criando um post e sim ajudando milhares de pessoas, além de que dessa forma não quebramos o layout e conseguimos manter o blog.
