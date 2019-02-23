# List Rendering

Diretiva **v-for** utilizada para iterar listas de dados, seguindo o formato abaixo:

```html
<ul>
  <li v-for="detail in details">{{detail}}</li>
</ul>
```

Quando utilizado a diretiva **v-for** é recomendado fortemente a utilização do bind **:key**, informando assim uma chave unica para cada item desta lista, facilitando a identificação por parte do Vue caso seja alterado algum valor da lista.


```html
<div v-for="variant in variants" :key="variant.variantId">
  <p>{{variant.variantColor}}</p>
</div>
```