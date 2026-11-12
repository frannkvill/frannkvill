#!/usr/bin/env bash
# Arma las carpetas (y .zip) listas para subir a Netlify:
#   publicar/<producto>/index.html      -> página de venta (portada)
#   publicar/<producto>/app/index.html  -> la micro app
set -euo pipefail
cd "$(dirname "$0")"
rm -rf publicar && mkdir -p publicar
for par in "costeo-recetas:costodulce" "ficha-mascotas:mipeludo"; do
  src="apps/${par%%:*}"; dst="publicar/${par##*:}"
  mkdir -p "$dst/app"
  cp "$src/landing.html" "$dst/index.html"
  cp "$src/index.html" "$dst/app/index.html"
  (cd "$dst" && zip -qr "../${par##*:}.zip" .)
done
ls -la publicar
