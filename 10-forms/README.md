# Forms

Quando estamos criando formulários utilizando SPAs, sempre deixamos as informações dentro deles, onde toda vez que usuário alterar algo, estas informações serão interceptadas pelo Vue e adicionadas a propriedade data, onde após adicionar o valor, precisamos enviar estas alterações para o campo em que foi alterado.

Esta tecnica se chama **Two-way data binding**, onde no Vue conseguimos com a utilização da diretiva **v-model**.

```js
Vue.component('product-review', {
  template: `
    <input v-model="name">
  `,
  data() {
    return {
      name: null
    }
  }
})
```