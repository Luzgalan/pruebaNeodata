# Respuestas-Angular

####  ¿Qué es Angular y cuál es su propósito principal en el desarrollo web? 
Angular es un framework de desarrollo de aplicaciones web y móviles de código abierto desarrollado y mantenido por Google. Su propósito principal es facilitar la creación de aplicaciones web de una sola página (SPA), escalables, robustas y confiables.

#### Diferencia entre AngularJS y Angular:
Angular js fue la primera version del framework por lo tanto se basa en JavaScript y utiliza el paradigma de mvc.
miestras que angular es la version posterior de angular js y que fue lanzado en el 2016 y esta escrito en TS, este utliza un enfoque basado en componentes, lo que significa que sus componentes son reutilizables y se comunican entre mediante la inyección de dependencias ademas de tener un rendimiento mejorado y una arquitectura modular.

#### ¿Qué es un componente en Angular y cómo se crea uno?

Los compontes son un conjunto  o bloque de construcción fundamental de una aplicación y cada compoente encapsula una parte especifica de la interfaz de usuario.

creación de un  compnente

ng generate component MiCompnente   
ng g c MiComponete


#### ¿Qué es un componente en Angular y cómo se crea uno?

el constructor en un metodo que se llama cuando se crea una instancia del componente ademas de poder inicializar las variables , la inyección de dependencias o servicios que necesite el componente.

# Respuestas-HTML
#### ¿Cuáles son algunas de las nuevas características introducidas en HTML5?


#### Nuevas etiquetas semánticas:` <header>, <footer>, <nav>, <article>, <section>, <aside>`

#### Almacenamiento local:  alamencanar datos de manera local en el navegador (localStorage), (sessionStorage),    

#### Elementos de formulario mejorados: incluye nuevos elementos de formulario que simplifican la validación de datos y mejoran la experiencia del usuario, como` <input type="email">, <input type="url">, <input type="number">, <input type="date">`, entre otros.


# Respuestas-CSS - Saaas
#### Qué es Sass y cuál es su ventaja sobre CSS convencional?   
Saas es un preprocesador de css que nos permite generar hojas de estilos de forma mas eficiente ademas de poder crear variables y poder combinar hojas de estilo de una forma mas eficiente

# Respuestas: JavaScript / TypeScript:
#### ¿Cuál es la diferencia entre JavaScript y TypeScript? 
La diferencia principal radica en el tipado de datos ya que al final de cuentas typescrip se traspila para poder convertirse en condigo javascript
#### ¿Qué son los tipos en TypeScript y cómo pueden mejorar el desarrollo de aplicaciones web? 
Los tipos especifican que queremos que sea cada variable, nos apoyan a que el codigo presente la menor cantidad de bugs y que se presenten inconsistencias en el codigo (querer sumar manzanas y peras)

#### Explica cómo se declara una variable en JavaScript y en TypeScript.
En javascript se declaran de tres formas
```javascript
var a = 'hola soy la antigua forma de crear variables'
let b = 'variable'
const c = 'constante'
```

en typescript es parecido solo que se especifica que tipo de dato podra contener cada variable
```typescript
let b: string = 'variable'
const c: string = 'constante'
let a: boolean = false
let numero: number = 10
```

# Respuestas NPM
#### ¿Qué es npm y cuál es su función en el desarrollo de aplicaciones web? 
NPM es el gestor de paquetes de node nos permite instalar librerias y paquetes a proyectos basados en NodeJs

Instala de forma global
```bash
npm install -g package 
```

Instala de forma local en el proyecto
```bash
npm install package 
```
# Respuesta: Integración e Implementación de APIs y WebSocket:

#### Explica qué es una API y cómo se utiliza en el desarrollo web. 
Un api permite la comunicacion de un clinte(web, movil) con el backend permitiendo asi la transferencia de datos
#### ¿Qué es JSON y cuál es su relación con las APIs REST? 
JSON es el modelo en el cual se transfieren los datos entre cliente - servidor para poder realizar operaciones en una aplicacion
#### Describe el proceso para realizar una solicitud GET a una API REST utilizando JavaScript/TypeScript.
Para poder realizar peticiones podemos usar HTTPClientModule de Angular o librerias externas como Axios o Fetch propio de Javascript se especificara la url al cual quieremos obtener datos 



