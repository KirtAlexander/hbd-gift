# 💜 Guía para el Regalo de Yazmin

¡Hola Alex! Este proyecto fue desarrollado especialmente como un regalo íntimo, romántico y artesanal con estética de **Scrapbook / Diario hecho a mano** en tonos morado y kraft.

---

## 📂 Estructura de Carpetas

```text
d:/Gift/
├── index.html        # Estructura principal y secciones del diario
├── style.css         # Diseño vintage, texturas de papel, washi tape y animaciones
├── content.js        # 🌟 AQUÍ PERSONALIZAS TODO (textos, fechas, frases, fotos)
├── main.js           # Lógica interactiva (contador, carrusel, confeti, música, etc.)
└── files/            # Carpeta para tus fotos y la canción
    ├── foto1.jpg     # Foto 1 (o portada)
    ├── foto2.jpg     # Foto 2
    ├── foto3.jpg     # Foto 3
    ├── foto4.jpg     # Foto 4
    ├── foto5.jpg     # Foto 5
    ├── foto6.jpg     # Foto 6
    └── musica.mp3    # Canción de Manuel Medrano ("Bajo el agua")
```

---

## ✨ Cómo Personalizar el Contenido (`content.js`)

No necesitas tocar una sola línea de HTML ni CSS. Abre el archivo **`content.js`** y edita fácilmente:

1. **Datos personales y fechas**:
   - Tu nombre y el de Yazmin.
   - Fecha de cumpleaños (`13 de Octubre`).
   - Fecha de inicio juntos (`2022-01-16T00:00:00` - calcula los años, meses, días y segundos en tiempo real).
2. **Tu Carta Personal**:
   - En la sección `letter: { paragraphs: [...] }` puedes escribir tus propias palabras o ajustar la hermosa carta ya redactada.
3. **Fotos y Frases**:
   - Cambia los pies de foto y fechas en `gallery: [...]`.
4. **10 Razones por las que la amas**:
   - En `reasons: [...]` puedes personalizar las 10 notas adhesivas (post-its) con tus recuerdos o bromas internas.
5. **Cupón Sorpresa**:
   - En `surprise: { coupon: { ... } }` puedes personalizar el plan de la cita sorpresa, los beneficios y el código de canje.

---

## 📸 Cómo Agregar Tus Fotos Reales

1. Copia tus fotos favoritas dentro de la carpeta **`files/`**.
2. Nómbralas:
   - `foto1.jpg`
   - `foto2.jpg`
   - `foto3.jpg`
   - `foto4.jpg`
   - `foto5.jpg`
   - `foto6.jpg`
3. *(Opcional)* Si tus fotos tienen otro nombre o formato (`.png`), solo cambia la ruta en `content.js`.
4. *Nota:* Ya hemos incluido 6 fotos románticas de muestra de altísima calidad para que la página se vea perfecta desde este instante.

---

## 🎵 Cómo Agregar la Canción

1. Descarga el audio de *"Bajo el agua"* de Manuel Medrano en formato MP3.
2. Guárdalo dentro de la carpeta **`files/`** con el nombre exacto:
   ```text
   files/musica.mp3
   ```
3. *Magia extra:* Si aún no colocas el archivo MP3, el reproductor cuenta con una dulce melodía acústica sintetizada en vivo con Web Audio API para que nunca haya silencio cuando Yazmin presione Play.

---

## 🚀 Cómo Verlo en Local (en tu computadora)

Actualmente ya tienes un servidor corriendo en:
👉 **`http://localhost:3000/`**

O si lo abres en el futuro:
- **Opción 1:** En VS Code / Antigravity, haz clic derecho en `index.html` -> **"Open with Live Server"**.
- **Opción 2:** En la terminal ejecuta:
  ```bash
  npx serve .
  ```
  o
  ```bash
  python -m http.server 3000
  ```

---

## 🌐 Cómo Publicarlo GRATIS para Enviarle el Link a Yazmin

Tienes 3 opciones muy sencillas para que Yazmin lo abra desde su celular:

### Opción 1: Netlify Drop (La más rápida - 1 minuto sin programar)
1. Entra a [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra y suelta la carpeta entera `d:/Gift` en la pantalla.
3. ¡Listo! En 10 segundos te dará un enlace web público (ej. `para-yazmin.netlify.app`) que puedes copiar y enviarle por WhatsApp.

### Opción 2: Vercel (Recomendada y ultra rápida)
1. Entra a [https://vercel.com](https://vercel.com) e inicia sesión con GitHub o email.
2. Arrastra la carpeta o conéctala con tu repositorio de GitHub.
3. Te generará un dominio gratuito con HTTPS seguro.

### Opción 3: GitHub Pages
1. Sube tu carpeta a un repositorio en GitHub.
2. Ve a **Settings** -> **Pages**.
3. En **Branch**, selecciona `main` y guarda.
4. En 1 minuto tu página estará lista en `https://tu-usuario.github.io/Gift/`.

---

¡Disfrútalo y que sea un cumpleaños inolvidable para Yazmin! 💜✨
