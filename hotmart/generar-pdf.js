// Genera los PDF de acceso que se suben a Hotmart como contenido del producto.
// Uso: node hotmart/generar-pdf.js   (edita DATOS antes si cambian la dirección, el código o el email)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const R=path.join(__dirname,'..');
const DATOS={
  costodulce:{nombre:'CostoDulce',url:'https://costodulce.netlify.app/app/',codigo:'DULCE2026',email:'ESCRIBE-TU-EMAIL-DE-SOPORTE',
    color:'#c2255c',suave:'#ffe3ea',img:'diseno/costodulce-ilustracion.png',frase:'Ya puedes calcular el costo real de tus recetas y a cuánto venderlas.',
    pasos:['Ve a <b>Mi hora y ajustes</b> y calcula cuánto vale tu hora de trabajo.','En <b>Ingredientes</b>, ingresa los que más usas con el precio de tu última boleta.','Crea tu receta más vendida y mira el <b>precio sugerido</b>.']},
  mispeludos:{nombre:'MisPeludos',url:'https://mispeludos.netlify.app/app/',codigo:'PELUDO2026',email:'ESCRIBE-TU-EMAIL-DE-SOPORTE',
    color:'#d9480f',suave:'#ffe8d9',img:'diseno/mispeludos-ilustracion.png',frase:'Ya puedes ordenar toda la salud de tus mascotas en tu celular.',
    pasos:['Edita a "Luna (ejemplo)" con los datos de tu mascota, o bórrala y crea la tuya.','Ingresa sus últimas <b>vacunas</b> con la próxima fecha.','Adjunta una foto de su última <b>receta o examen</b> en Visitas.']},
};
(async()=>{const b=await chromium.launch();const p=await b.newPage();
 for(const [k,d] of Object.entries(DATOS)){
  const img='data:image/png;base64,'+fs.readFileSync(path.join(R,d.img)).toString('base64');
  await p.setContent(`<html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>@page{size:A4;margin:0}*{box-sizing:border-box}body{margin:0;font:15px/1.5 Nunito,sans-serif;color:#3b2a20}
  h1,h2,.btn,.code{font-family:'Baloo 2',sans-serif}
  .top{background:${d.color};color:#fff;padding:34px 48px;display:flex;align-items:center;gap:26px}
  .top img{width:120px;height:120px;border-radius:50%;border:5px solid #fff;background:#fdf2e6}
  .top h1{margin:0;font-size:40px;line-height:1.05}.top p{margin:6px 0 0;font-size:17px;font-weight:600}
  main{padding:30px 48px}
  .step{display:flex;gap:16px;margin-bottom:22px}.n{flex:none;width:40px;height:40px;border-radius:50%;background:${d.color};color:#fff;font:800 22px 'Baloo 2';display:grid;place-items:center}
  h2{margin:4px 0 6px;font-size:21px}
  .btn{display:inline-block;background:${d.color};color:#fff;text-decoration:none;font-size:20px;padding:10px 28px;border-radius:999px;margin:4px 0}
  .url{font-size:13px;color:#7d6759;word-break:break-all}
  .code{display:inline-block;font-size:34px;letter-spacing:3px;background:${d.suave};border:3px dashed ${d.color};border-radius:16px;padding:6px 26px;color:${d.color}}
  .box{background:${d.suave};border-radius:16px;padding:16px 20px;margin-top:8px}.box ol{margin:6px 0 0;padding-left:20px}
  .foot{margin-top:22px;font-size:13px;color:#7d6759;border-top:2px dashed ${d.suave};padding-top:14px}
  </style></head><body>
  <div class="top"><img src="${img}"><div><h1>¡Gracias por tu compra!</h1><p>Este es tu acceso a ${d.nombre}. ${d.frase}</p></div></div>
  <main>
   <div class="step"><div class="n">1</div><div><h2>Abre ${d.nombre}</h2><a class="btn" href="${d.url}">Abrir ${d.nombre} →</a><div class="url">O copia esta dirección en tu navegador: ${d.url}</div></div></div>
   <div class="step"><div class="n">2</div><div><h2>Ingresa tu código de acceso</h2><div class="code">${d.codigo}</div><div class="url">Solo se pide la primera vez en cada dispositivo.</div></div></div>
   <div class="step"><div class="n">3</div><div><h2>Déjala a mano en tu celular</h2>En el navegador, abre el menú y elige <b>“Agregar a pantalla de inicio”</b>. Así la abres como cualquier otra app. También funciona en el computador.</div></div>
   <div class="box"><b>Tus primeros 5 minutos</b><ol>${d.pasos.map(x=>`<li>${x}</li>`).join('')}</ol></div>
   <div class="box"><b>Importante: tus datos se guardan solo en tu dispositivo.</b> Nadie más los ve. Para no perderlos si cambias de teléfono, descarga cada cierto tiempo una <b>copia de seguridad</b> desde los ajustes de la app.</div>
   <div class="foot">¿Necesitas ayuda? Escríbenos a <b>${d.email}</b>.<br>Guarda este documento: aquí están tu link y tu código. El acceso es de uso personal; por favor no lo compartas.</div>
  </main></body></html>`,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
  await p.pdf({path:path.join(__dirname,`acceso-${k}.pdf`),format:'A4',printBackground:true});
 }
 await b.close()})();
