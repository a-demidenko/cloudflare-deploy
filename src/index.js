import { getAssetFromKV } from "@cloudflare/kv-asset-handler";
import manifestJSON from "__STATIC_CONTENT_MANIFEST";

const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Попытка отдать статический файл
      return await getAssetFromKV(
        { request, env, waitUntil: ctx.waitUntil.bind(ctx) },
        { ASSET_MANIFEST: assetManifest }
      );
    } catch (e) {
      // Если запрос не на статический файл, отдаем HTML
      if (url.pathname !== "/") {
        console.error(`Asset not found: ${url.pathname}`, e);
      }

      // Возвращаем HTML-код страницы
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Animated Hello World</title>
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          <div class="animation-container"></div>
          <script>
            const colors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a18cd1', '#96e6a1', '#fbc7d4'];

            function createHelloWorld() {
              const container = document.querySelector('.animation-container');
              const textElement = document.createElement('div');
              textElement.className = 'text';
              textElement.textContent = 'Hello World! Привет Мир!!!';
              textElement.style.color = colors[Math.floor(Math.random() * colors.length)];
              textElement.style.animationDelay = \`\${Math.random() * 2}s\`;
              textElement.style.fontSize = \`\${Math.random() * 3 + 1}rem\`; // Размер текста
              textElement.style.left = \`\${Math.random() * 100}%\`; // Случайное расположение
              textElement.style.top = \`\${Math.random() * 100}%\`;
              container.appendChild(textElement);

              setTimeout(() => {
                textElement.remove();
              }, 5000);
            }

            setInterval(createHelloWorld, 300);
          </script>
        </body>
        </html>
