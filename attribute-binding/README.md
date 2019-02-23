# Attribute Binding

Dinamicamente vincula um atributo a uma expressão, sendo o atributo um dos existentes nas tags HTML, como por exemplo src usado no exemplo

```html
<img v-bind:src="expression">
<!--Pode ser visto como {{expression}}-->
```

Pode-se utilizar a versão de binding simplificada:

```html
<img :src="expression" :alt="expression" :title="expression">
<a :class="expression" :href="expression"></a>

```
