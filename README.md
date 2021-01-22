### MERN Calendar Backend

Es el backend del proyecto MERN Calendar, lo primero que se debe hacer es

```
npm install
```

Después se debe de crear un archivo llamado .env y se debe configurar las siguientes variables

PORT: Debe de ir el número del puerto en que correrá el servidor
```
PORT=4000
```

DB_CNN: En esta variable debe de ir nuestra base de datos
```
DB_CNN=mongodb://localhost:27017/test
```

SECRET_JWT_SEED: En esta última variable se debe de poner una palabra secreta, la cual servirá para los tokens
```
SECRET_JWT_SEED=ESTA-es-UNA-palabra-SeCrEtA
```

Por último, para poder correr el servidor se ejecuta el siguiente comando

```
npm start
```