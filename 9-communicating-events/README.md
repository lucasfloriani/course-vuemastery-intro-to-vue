# Communicating Events

Quando o código é separado em multiplos componentes, em algum momento de nossa aplicação precisaremos que certos eventos sejam transmitidos entre eles.
Nós podemos utilizar a propriedade **$emit** dos componentes Vue, onde este sinaliza que um tipo de evento de nome especifico foi ativado para seu componente pai.

```js
addToCart() {
    this.$emit('add-to-cart')
}
```

Com esta emissão de evento, temos que adicionar um atributo de evento no componente pai para que ele execute algo quando receber o sinal.

```html
<product @add-to-cart="funcaoDoComponentePaiASerExecutada"></product>
```

Para passar parametros com **$emit**, adicionamos os valores no segundo parâmetro

```js
addToCart() {
    this.$emit('add-to-cart', 'myID')
}
```

OBS: Caso precise enviar mais de um parâmetro, este deve ser alterado para um array ou objeto.
