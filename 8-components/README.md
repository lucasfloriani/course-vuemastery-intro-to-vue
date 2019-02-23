# Components

São partes de códigos reutilizáveis usado para manter um base de código mais modular e facil de manter.
Pode-se imaginá-los como blocos de lego.

```js
Vue.component('nomeDoComponente', {
    props: [message],
    template: `
    <div>
        <h1>I'm a component</h1>
        <h2>Aren't I beautiful?</h2>
        <p>{{message}}</p>
    </div>
    `,
    data() {
        return {

        }
    }
})
```

A propriedade data é uma função pois se fosse utilizado como objeto, todo componente que fosse instanciado dele compartilharia os mesmos dados dentro de data, não como uma cópia separada, mas como uma cópia de referencia do objeto.

Para passar dados de um componente pai para o filho, utilizamos props para passar essas informações.

```html
<!-- Atributo customizado que e utilizado como props no componente -->
<nomeDoComponente message="hello!"></nomeDoComponente>
```

Quando declaramos as props que o componente irá receber, podemos declarar de dois modos:

```js
// Declaração com array, sendo simplesmente o nome do valor a ser recebido
props: [message]
// Declaração por objeto, podendo declarar valores default, se é obrigatório, tipo, etc
props: {
    message: {
        type: String,
        required: true,
        default: 'Hi',
    }
}
```
