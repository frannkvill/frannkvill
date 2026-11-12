#!/usr/bin/env bash
# Arma las carpetas (y .zip) listas para subir a Netlify:
#   publicar/<producto>/index.html      -> página de venta (portada)
#   publicar/<producto>/app/index.html  -> la micro app
set -euo pipefail
cd "$(dirname "$0")"
rm -rf publicar && mkdir -p publicar
for par in "costeo-recetas:costodulce" "ficha-mascotas:mispeludos"; do
  src="apps/${par%%:*}"; dst="publicar/${par##*:}"
  mkdir -p "$dst/app" "$dst/img"
  cp "$src/landing.html" "$dst/index.html"
  cp "$src/index.html" "$dst/app/index.html"
  for f in {sofa,vet,hotel,cocina,cansada,entrega}; do [ -f "$src/img/$f.webp" ] && cp "$src/img/$f.webp" "$dst/img/" || true; done
  (cd "$dst" && zip -qr "../${par##*:}.zip" .)
done
ls -la publicar
