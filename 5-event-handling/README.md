# Event Handling

Para verificar por eventos do usuário, utilizamos a diretiva **v-on:nomeDoEvento** passando uma expressão, podendo tanto escrever a expressão dentro ou colocando ela em uma metodo e chamando dentro.

OBS: Metodos são adicionados dentro do valor methods da instancia Vue

```html
<button v-on:click="cart += 1">Add to Cart</button>
<button v-on:click="addToCart">Add to Cart</button>
```

Como esta diretiva é muito utilizada, existe um meio de escreve-lo mais facilmente utilizando **@nomeDoEvento**

```html
<button @click="cart += 1">Add to Cart</button>
```

Existem algumas diferenciações que podem ser bem úteis em certos eventos como por exemplo o evento **keyup**

```html
<input @keyup.enter="send>
```

Este evento só será ativado quando for apertado a tecla enter.

Este tipo de evento com **.enter** é chamado de **Modifier**
