# Micro Apps: crear y vender herramientas chicas hechas con IA

Kit propio para crear y monetizar micro apps sin pagar el curso.

## Qué es una micro app

Una web de **un solo archivo HTML** que resuelve **un solo problema** de **un público concreto**.
El cliente no compra "una app", compra la solución a algo que le molesta todos los días
(cobrar de menos, no saber en qué se va la plata, presupuestos desordenados…).

- Se hace con Claude/ChatGPT en horas, no semanas.
- Se publica **gratis** en Netlify (arrastrar la carpeta en app.netlify.com/drop).
- Sin stock: se crea una vez y se vende infinitas veces.
- Se entrega sola: pago → email automático con link + código de acceso.

## El sistema completo

```
Anuncio (TikTok/Reels mostrando la app funcionando)
   → Landing (página de venta)
   → Pago (Mercado Pago / Stripe / PayPal / Lemon Squeezy / Hotmart)
   → Email automático con link + código
   → Cliente usa la app  →  emails de seguimiento  →  venta de tu 2ª app
```

## Paso a paso

1. **Elegir la idea** (ver [`ideas.md`](ideas.md)). Pasala por el filtro de 5 preguntas:
   1. ¿El público es fácil de describir en una frase? ("pasteleras que venden desde casa")
   2. ¿El dolor es frecuente y les cuesta plata o tiempo?
   3. ¿Se puede mostrar el resultado en un video de 10 segundos?
   4. ¿Hoy lo resuelven mal (a ojo, Excel, cuaderno, WhatsApp)?
   5. ¿Se puede hacer sin servidor (todo en el navegador)?
2. **Construirla** con [`prompts/prompt-maestro.md`](prompts/prompt-maestro.md).
   Usá `apps/costeo-recetas/` como modelo.
3. **Proteger el acceso**: cambiá el código de demo.
   ```bash
   echo -n "TUCODIGO" | sha256sum      # pegá el hash en ACCESS_HASHES del index.html
   ```
4. **Publicar** la app y la landing en Netlify (dos sitios distintos, o la app en una
   ruta difícil de adivinar, ej. `/app-x7k2/`).
5. **Cobro + entrega automática**:
   - Rápido (Argentina): link de pago de Mercado Pago + email manual / MailerLite.
   - Automático (internacional): **Lemon Squeezy**, **Gumroad** o **Hotmart** — cobran,
     emiten el comprobante y mandan el email de acceso solos. Es lo más simple para empezar.
   - Stripe Payment Links + email de confirmación personalizado también sirve.
6. **Emails**: plantilla en [`apps/costeo-recetas/emails.md`](apps/costeo-recetas/emails.md).
7. **Anuncios**: grabá la pantalla del celular usando la app (sin mostrarte). 3 versiones
   del gancho, presupuesto chico (USD 5–10/día), y apagá lo que no vende en 3–4 días.
8. **Medir**: costo por venta = gasto en anuncios / ventas. Si es menor que tu precio menos
   comisiones, escalá. Si no, cambiá gancho → landing → precio, en ese orden.

## Números (con los pies en la tierra)

| Concepto | Ejemplo |
|---|---|
| Precio | USD 17 |
| Comisión de cobro (~7–10%) | − USD 1,5 |
| Neto por venta | ~USD 15,5 |
| Para ganar con USD 6/día de ads | necesitás costo por venta < USD 15 |

La web que analizamos muestra "USD 6/día → 1–2 ventas/día". Tomalo como el caso optimista:
es muy común que las primeras semanas el costo por venta sea más alto que el precio
hasta que encontrás el gancho correcto. Empezá con un presupuesto que puedas perder.
Formas de mejorar el margen: **bono/upsell** en el checkout, **varias apps** para el mismo
público (le vendés la 2ª a tus clientes por email), o **suscripción** chica (USD 3–5/mes).

## Sobre la seguridad del código de acceso

El código se valida en el navegador: frena a la mayoría pero alguien técnico podría saltarlo.
Para un producto de USD 10–20 alcanza. Si crece, el paso siguiente es validar licencias
con la API de Lemon Squeezy/Gumroad desde una Netlify Function.

## Estructura del repo

```
apps/costeo-recetas/
  index.html     ← la micro app (código demo: DULCE2026)
  landing.html   ← página de venta (reemplazar links de pago)
  emails.md      ← 4 emails automáticos
prompts/prompt-maestro.md   ← prompts para app, landing y anuncios
ideas.md                    ← ideas de nicho con precio y gancho
```

## Legal / impuestos

Para probar no necesitás empresa. Si vendés de forma constante, consultá a un contador de
tu país (en Argentina, monotributo). Agregá en la landing un email de contacto y una
política de reembolso clara.
