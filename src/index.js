export default {
  async fetch(request, env, ctx) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Animated Hello World</title>
        <style>
          /* Вставка CSS */
          ${css()}
        </style>
      </head>
      <body>
        <div class="animation-container"></div>
        <script>
          ${script()}
        </script>
      </body>
      </html>
    `;
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  },
};

function css() {
  return `
    body {
      margin: 0;
      background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      overflow: hidden;
      font-family: Arial, sans-serif;
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .animation-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .text {
      font-size: 2rem;
      font-weight: bold;
      color: white;
      text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6);
      opacity: 0;
      transform: translateY(100px);
      animation: fadeMove 3s ease-in-out infinite;
    }

    @keyframes fadeMove {
      0% { opacity: 0; transform: translateY(50px); }
      50% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-50px); }
    }
  `;
}

function script() {
  return `
    const container = document.querySelector('.animation-container');
    const colors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a18cd1', '#96e6a1', '#fbc7d4'];

    function createHelloWorld() {
      const textElement = document.createElement('div');
      textElement.className = 'text';
      textElement.textContent = 'Hello World!';
      textElement.style.color = colors[Math.floor(Math.random() * colors.length)];
      textElement.style.animationDelay = \`\${Math.random() * 2}s\`;
      container.appendChild(textElement);

      setTimeout(() => {
        textElement.remove();
      }, 3000);
    }

    setInterval(createHelloWorld, 500);
  `;
}
