# Servidor de plantillas

El objetivo de este servidor es devolver html plano para usar como plantilla de correos.

## TemplateServer

Template server es la aplicación principal, cuenta con:

  - __urls.ts__: contiene una función _urls_ en la que se declaran las rutas a las APIS.

  - __views.ts__: contiene las vistas que se ejecutan en el llamado a cada API.

## Funcionamiento

### Plantilla base

URL App: `https://script.google.com/macros/s/AKfycbx3FtQUsruOUBQMp1oyhWX4WU7HoG4D_5v8F90_EiJ9aLm8L8m-pWRV/exec`

Por GET requiere: `?path=base&token=tokenValido` 

`urlApp?path=base&token=tokenValido`

### Cambiar configuración

Si se quieren cambiar la imagen del header y el footer que están por defecto se debe usar la misma URL pero los argumentos a usar son los isguientes:

`?path=conf&token=tokenValido&header=urlAlheader&footer=urlAlFooter`
