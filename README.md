## 1. Definición del proyecto

### ¿Qué es Markdown?

¿Qué es Markdown?
Creado originalmente por John Gruber, con ayuda de Aaron Swartz en 2004, Markdown es un lenguaje de marcado que facilita la aplicación de formato a un texto plano empleando una serie de caracteres de una forma especial. Con formato nos referimos a itálicas, negritas, listas, encabezados, citas, código en línea o en bloque, vínculos y más.

Markdown es muy utilizado en plataformas como GitHub, foros, blogs como también para crear documentación y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio.

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que permite al usuario recorrer un directorio, filtrar los archivos en formato Markdown y extraer los links que contengan para verificar su estado: sin conexión, útiles o rotos y dar algunas estadísticas que se imprimirán en consola como la cantidad de links, el estado de los links y los links únicos.

> Para ver formatos completo [Click aquí](https://markdown.es/sintaxis-markdown/)

2. Diagrama de flujo

![diagrama](./img/diagrama.jpg)

## 3. Instrucciones de instalación y uso

> ### 1. Debes tener instalado node.js y npm

> ### 2. Para instalar la librería:

    npm install md-links-pamelabarboza

> ### 3. Importa la librería en tu proyecto:

    const nombreLibreria = require('md-links')

> ### 4. Uso de la librería:

* **Opción 1:** Muestra los links extraidos del archivo con extensión .md que ingreses

      node tuArchivo.js tuArchivo.md

* **Opción 2:** Muestra la validación de links del archivo con extensión .md que ingreses

      node archivo.js tuArchivo.md --v | node archivo.js tuArchivo.md --validate

* **Opción 3:** Muestra estadísticas del archivo con extensión .md que ingreses: Links totales | Links únicos

      node archivo.js tuArchivo.md --s | node archivo.js tuArchivo.md --stats

* **Opción 4:** Muestra estadísticas más links dañados del archivo con extensión .md que ingreses:  Total |  Unique |  Broken

      node archivo.js tuArchivo.md --s --v | node archivo.js tuArchivo.md --v --s

***



Autora:
* 👩‍💻 [Pamela Raquel Barboza](https://github.com/PamelaBarboza)
