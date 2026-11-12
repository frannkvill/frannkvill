# Prompt maestro para crear una micro app

Copialo en Claude (o ChatGPT), completá lo que está entre [corchetes] y pedí el resultado.
Tip: usá como referencia `apps/costeo-recetas/index.html` — podés pegarlo y decir "seguí esta misma estructura".

```
Actuá como desarrollador web senior y diseñador de producto.

Creá una micro app web en UN SOLO archivo index.html (HTML + CSS + JavaScript, sin
frameworks, sin librerías externas, sin backend) para:

- PÚBLICO: [ej. pasteleras que venden desde su casa]
- PROBLEMA ÚNICO QUE RESUELVE: [ej. no saben cuánto les cuesta cada torta y cobran de menos]
- RESULTADO QUE VE EL USUARIO: [ej. precio de venta sugerido y ganancia por receta]
- NOMBRE: [ej. CostoDulce]   COLOR PRINCIPAL: [ej. violeta #7c3aed]
- IDIOMA: español rioplatense / neutro [elegí]

Requisitos:
1. Mobile-first, se ve perfecta en celular; también en computadora. Modo oscuro automático.
2. Guarda todo en localStorage (los datos quedan en el dispositivo del usuario).
3. Trae datos de ejemplo precargados para que al abrirla ya se vea funcionando.
4. Pantalla de acceso con código: valida comparando el SHA-256 del código (en mayúsculas)
   contra una lista ACCESS_HASHES al principio del script; si es válido lo recuerda.
5. Botones para exportar e importar una copia de seguridad en JSON y para borrar todo.
6. Interfaz simple: máximo 3 pestañas, textos cortos, números grandes y claros.
7. Sin errores en consola. Escapá el texto que ingresa el usuario antes de mostrarlo.
8. Funciones clave: [lista de 3 a 5 cosas que tiene que hacer, no más]

Entregá solo el archivo completo, listo para subir a Netlify.
```

## Prompts de ajuste

- "Hacela más simple: sacá todo lo que no sea esencial para [resultado]."
- "Mejorá el diseño para que se vea premium en un video de TikTok de 9:16."
- "Agregá un botón para compartir el resultado por WhatsApp."
- "Revisá el código buscando bugs y casos raros (campos vacíos, números negativos) y corregilos."

## Prompt para la landing

```
Con esta micro app [pegar descripción], escribí una landing en un solo HTML con:
titular que nombre el dolor, subtítulo con el resultado, captura simulada de la app,
3 dolores, 3 pasos de cómo funciona, oferta con precio tachado + precio real, bono,
garantía, 4 preguntas frecuentes y 2 botones de pago (pesos y dólares) con href de
ejemplo para reemplazar. Mobile-first, sin librerías.
```

## Prompt para 3 anuncios de TikTok (15–25 s)

```
Escribí 3 guiones de anuncio para TikTok de [app] dirigidos a [público].
Cada uno: gancho de 2 segundos que nombre el problema, demostración de la app en la
pantalla del celular (qué tocar en cada segundo), resultado y llamada a la acción.
Sin mostrar cara. Texto en pantalla + voz en off.
```
