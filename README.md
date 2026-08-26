# Rotaract Guatemala La Reforma

Sitio web estático bilingüe (inglés/español) para Rotaract Guatemala La Reforma, afiliado a Rotary International.

## Estructura principal

- `index.html` — estructura del sitio
- `styles.css` — estilos y responsividad
- `script.js` — traducciones y validación del formulario
- `*.png`, `*.jpg` — logos e imágenes del sitio

## Publicación

Este proyecto es un sitio estático, por lo que puede publicarse sin compilación ni backend.

### Opción 1: GitHub Pages (recomendada)
1. Crea un repositorio en GitHub.
2. Sube esta carpeta completa a la rama `main`.
3. En GitHub ve a `Settings` > `Pages`.
4. En `Source`, selecciona `Deploy from a branch`.
5. Elige la rama `main` y la carpeta `/root`.
6. Guarda y espera a que GitHub construya el sitio.
7. La URL quedará algo así como:
   `https://tu-usuario.github.io/tu-repositorio/`

> Este sitio ya incluye `.nojekyll` para evitar que GitHub procese archivos con Jekyll.

### Opción 2: Netlify
1. Sube esta carpeta a Netlify.
2. El directorio de publicación debe ser la raíz del proyecto.
3. No requiere build command.

### Opción 3: servidor local
```bash
python -m http.server 8000
```
Luego abrir: http://localhost:8000

## Información de contacto

- Teléfono: +502 4536 3348
- Instagram: https://www.instagram.com/rotaract_reforma
- Email: clubrotaractreforma@gmail.com
