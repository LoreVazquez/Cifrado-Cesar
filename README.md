# CIFRADO CESAR #

## Descripción ##

Una web que pide una frase al usuario y devuelve el mismo mensaje encriptado según el *algoritmo de Cifrado César* con el parámetro de desplazamiento de 33 espacios hacia la derecha.

El programa es capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.
Contiene dos funciones cipher y decipher.
El usuario no debe poder ingresar un campo vacío o que contenga números.

## Pseudocódigo ##

En este apartado se describe la funcionalidad del programa en pasos.

1. El usuario ingresa una frase por medio de un prompt.

2. Se válida la frase que no contenga:
  - Espacios en blanco
  - Números
  - Cáracteres especiales
  - Que no sea un string vacío.

3. Se selecciona cifrar o descifrar frase.

4. Usar el algoritmo cifrado César para cifrar o descifrar la frase.

5. Devuelve la frase cifrada o descifrada.

## Diagrama de Flujo ##

Representación gráfica del flujo del programa.

![Diagrama de flujo](/assets/image/DiagramaFlujoCifradoCesar.png)
