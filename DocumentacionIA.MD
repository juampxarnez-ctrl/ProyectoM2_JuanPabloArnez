# -Documentación del uso de Inteligencia Artificial

Durante el desarrollo del proyecto MiniBlog API se utilizó inteligencia artificial como herramienta de apoyo para resolver dudas, depurar errores y mejorar la calidad del código.

El uso de IA fue complementario al aprendizaje, permitiendo aplicar de forma práctica los contenidos vistos en las lectures.

---

## -Problemas donde se utilizo IA:

## 🔴 Problema 1: Error con Jest al usar ES Modules

Se presentó el siguiente error al ejecutar los tests:

![input](./docs/input1ErrorconJest.png)

Se intentó utilizar sintaxis ES Modules (`import`) en el archivo de test:
```js
import request from 'supertest';
import app from '../src/server';

Al ejecutar los test con:

npm test

se obtuvo el siguiente error:
![input](./docs/input1ErrorconJest.png)
![input](./docs/input3ErrorconJest.png)

SyntaxError: Cannot use import statement outside a module

---

Esto ocurrió debido a una incompatibilidad entre ES Modules y la configuración de Jest.
La solución fue adaptar el proyecto a CommonJS.

![output](./docs/OutputErrorconJest.png)

---
