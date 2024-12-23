export default {
  async fetch(request, env, ctx) {
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
            textElement.textContent = 'Hello World!';
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
    `;
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  },
};
