<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Hello World</title>
  <link rel="stylesheet" href="/styles.css">
  
  <!-- Добавление фавикона -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  
  <!-- Добавление фонового изображения -->
  <style>
    body {
      background-image: url('/image.jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      margin: 0;
      padding: 0;
      height: 100vh;
    }
    .animation-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .text {
      position: absolute;
      font-family: Arial, sans-serif;
      color: white;
      font-weight: bold;
      user-select: none;
      transition: all 0.5s ease;
    }

    /* Стили для мобильных устройств */
    @media (max-width: 768px) {
      .text {
        font-size: 1rem;
      }
    }

    /* Стили для настольных устройств */
    @media (min-width: 769px) {
      .text {
        font-size: 2rem;
      }
    }
  </style>
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
      textElement.style.animationDelay = `${Math.random() * 2}s`;
      textElement.style.fontSize = `${Math.random() * 3 + 1}rem`; // Размер текста
      textElement.style.left = `${Math.random() * 100}%`; // Случайное расположение
      textElement.style.top = `${Math.random() * 100}%`;
      container.appendChild(textElement);

      setTimeout(() => {
        textElement.remove();
      }, 5000);
    }

    setInterval(createHelloWorld, 300);
  </script>
</body>
</html>
