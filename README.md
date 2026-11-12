# Micro Apps: crear y vender herramientas chicas hechas con IA

Kit propio para crear y monetizar micro apps. Mercado inicial: **Chile**.

## Qué es una micro app

Una web de **un solo archivo HTML** que resuelve **un solo problema** de **un público concreto**.
El cliente no compra "una app", compra la solución a algo que le molesta todos los días.

- Se hace con IA en horas, no semanas. Sin servidor: **costo fijo cero**.
- Se publica **gratis** en Netlify (arrastrar la carpeta en app.netlify.com/drop).
- Se crea una vez y se vende infinitas veces.
- Se entrega sola: pago → email automático con link + código de acceso.

## Apps listas

| App | Carpeta | Público | Precio sugerido | Código demo |
|---|---|---|---|---|
| **CostoDulce** · costeo de recetas + valor de tu hora | `apps/costeo-recetas/` | Pasteleras y pasteleros | $14.990 CLP | `DULCE2026` |
| **MiPeludo** · ficha de salud de mascotas | `apps/ficha-mascotas/` | Dueños de perros y gatos | $9.990 CLP | `PELUDO2026` |

Cada carpeta trae `index.html` (la app), `landing.html` (página de venta) y `emails.md`
(los 4 emails automáticos).

**MiPeludo** incluye: varias mascotas, vacunas y antiparasitarios con próxima fecha y avisos,
visitas al veterinario con recetas y exámenes adjuntos (foto o PDF), remedios con horarios,
alimentación, peso con gráfico, recordatorios al calendario del teléfono (.ics), ficha
imprimible para el veterinario y copia de seguridad con documentos incluidos.

**CostoDulce** incluye: ingredientes, recetas, costo real (ingredientes, gastos fijos, horas,
caja), precio sugerido, y una calculadora guiada del valor de la hora de trabajo.

## El sistema de venta

```
Anuncio (TikTok/Reels/Instagram mostrando la app funcionando)
   → Landing (página de venta)
   → Pago
   → Email automático con link + código
   → Cliente usa la app → emails de seguimiento → venta de tu 2ª app
```

## Antes de vender (checklist)

1. **Cambia el código de acceso** de cada app:
   ```bash
   echo -n "TUCODIGO" | sha256sum      # pega el hash en ACCESS_HASHES del index.html
   ```
2. En cada `landing.html`, reemplaza los `REEMPLAZAR` (2 links de pago y email de contacto).
3. Publica en Netlify: un sitio para la landing y otro para la app (o la app en una ruta
   difícil de adivinar).
4. Configura el email de entrega con el link de la app y el código.
5. Compra de prueba de punta a punta antes de poner anuncios.

## Cobro en Chile

- **Lo más simple y automático:** Hotmart, Lemon Squeezy o Gumroad. Cobran, y envían solos el
  email con el acceso. Hotmart acepta medios de pago chilenos y paga en CLP.
- **Local:** link de pago de **Mercado Pago** o **Flow** (Webpay, débito, transferencia).
  La entrega del email hay que conectarla aparte (MailerLite/Brevo) o hacerla a mano al inicio.
- **Otros países:** PayPal o Stripe en USD.

Verifica comisiones y condiciones vigentes de cada plataforma antes de elegir.

## Crear más apps

1. Elige una idea de [`ideas.md`](ideas.md) y pásala por el filtro:
   público describible en una frase · dolor frecuente · resultado visible en 10 segundos ·
   hoy lo resuelven mal (al ojo, Excel, cuaderno, WhatsApp) · se puede hacer sin servidor.
2. Constrúyela con [`prompts/prompt-maestro.md`](prompts/prompt-maestro.md).
3. Mejor **varias apps para el mismo público** que apps sueltas: cada cliente nuevo es
   comprador potencial de la siguiente.

## Anuncios y números

- Graba la pantalla del celular usando la app (sin mostrar la cara). 3 versiones del gancho.
- Presupuesto chico (unos $5.000 CLP/día) y apaga lo que no vende en 3–4 días.
- **Costo por venta = gasto en anuncios ÷ ventas.** Tiene que ser menor que tu precio menos
  la comisión de cobro (~5–10%). Si no, cambia gancho → landing → precio, en ese orden.
- Es normal que las primeras semanas el costo por venta sea más alto que el precio hasta
  encontrar el gancho correcto. Parte con un presupuesto que puedas perder.

## Límites que conviene conocer

- **Datos en el dispositivo:** no hay servidor, así que los datos del cliente viven en su
  navegador. Por eso ambas apps tienen copia de seguridad; recuérdaselo en los emails.
- **Recordatorios:** una web sin servidor no puede enviar notificaciones confiables. MiPeludo
  lo resuelve agregando los eventos al calendario del teléfono.
- **Código de acceso:** se valida en el navegador; frena a la mayoría, no a alguien técnico.
  Para productos de este precio alcanza.
- **Salud animal:** MiPeludo ordena información; no da consejos veterinarios.

## Legal / impuestos (Chile)

Para probar no necesitas empresa. Si vendes de forma constante, corresponde iniciar
actividades en el SII y emitir boleta; consúltalo con un contador. En la landing, deja un
email de contacto y una política de reembolso clara.
