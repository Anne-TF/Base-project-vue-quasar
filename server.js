const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

const app = express();

// Permitir que la aplicación SPA se enrutada correctamente en cualquier ruta
app.use(history());

// Establecer la carpeta de archivos estáticos
app.use(serveStatic(`${__dirname  }/dist/`, {
    maxAge: '1d',
    setHeaders(res, path)
    {
        res.setHeader('Cache-Control', 'public, max-age=86400');
    }
}));

// Iniciar el servidor en el puerto especificado en la variable de entorno PORT
const port = process.env.PORT || 3011;
app.listen(port, () =>
{
    console.log(`Servidor iniciado en el puerto ${port}`);
});
