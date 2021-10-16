# statefullApp
HECHOS:
1. Una app web por default es stateless.
2. Todos aquellos eventos que el usuario no comienza, se consideran efectos secundarios.
3. Para controlar dichos eventos secundarios se utiliza useEffect.
4. Algunas maneras de persistir información son: bases de datos y LocalStorage.
5. Para transformar cualquier tipo de valor en JS a strings, se utiliza JSON.stringify() y para regresar de string al tipo de valor original, se utiliza JSON.parse()

DESCRIPCIÓN:
Aplicación de react que incluye un mensaje, un input y un texto tipo paragraph. Lo que se introduzca en Input saldra en forma de saludo en el paragraph. Para que el ultimo valor se almacene y aparezca al hacer refresh se guarda el string del nombre en local storage. Primero se cambia el tipo de valor del input para que sea una string con parse y luego con useEffect se controla el effecto para que el valor almacenado permanezca almacenado el recargar.

DEMO: 
https://drive.google.com/file/d/1X6LJLIl_MPIdJItY_4IXWweh92_LuqE1/view?usp=sharing


