# Class and Style Binding

Existem vários meio para estilizar suas tags, podendo ser dos seguintes modos:

## Por propriedade

```html
<!-- Traz o valor da instancia Vue (data) -->
<h1 :style="{ color: color }">Title</h1>
<!-- Pode-se utilizar tanto camelCase igual no JS ou como no CSS normal -->
<h1 :style="{ fontSize: fontSize }">Title</h1>
<h1 :style="{ 'font-size': fontSize }">Title</h1>
```

## Com Objeto

Deixa o código html mais limpo

```html
<!--
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px',
    }
  }
-->
<h1 :style="styleObject">Title</h1>
```

## Com Array

Deixa o código html mais limpo

```html
<!--
  data: {
    styleObject1: {
      color: 'red',
      fontSize: '13px',
    },
    styleObject2: {
      margin: '5px',
      padding: '20px',
    }
  }
-->
<h1 :style="[styleObject1, styleObject2]">Title</h1>
```

Para adicionarmos classes as tags html, utilizamos class binding.
Classes são adicionadas baseadas se o valor do objeto for true.
No exemplo abaixo somente a classe **active** é adicionada.

OBS: Classes que são adicionadas sem binding permanecem na tag

```html
<!--
  data: {
    activeClass: true,
    errorsClass: false
  }
-->
<div
  class="color-box"
  :class="{
    active: activeClass,
    'text-danger': errorClass,
  }"
>
  Exemplo
</div>
```

Também é possível adicionar um objeto para binding, assim deixando o código mais limpo

```html
<!--
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
-->
<div
  class="color-box"
  :class="classObject"
>
  Exemplo
</div>
```

E como no exemplo de styling, podemos adicionar um array de objetos

```html
<!--
  data: {
    activeClass: 'active',
    errorClass: 'text-danger',
  }
-->
<div
  class="color-box"
  :class="[activeClass, errorClass]"
>
  Exemplo
</div>
```

Outra possibilidade é utilizar condições para decidir se será adicionado a classe ou não

```html
<!--
  data: {
    isActive: true,
    activeClass: 'active',
  }
-->
<div
  class="color-box"
  :class="[isActive ? activeClass : '']"
>
  Exemplo
</div>
```
