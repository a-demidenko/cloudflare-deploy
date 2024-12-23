# 🌐 Auto-Deploy to Cloudflare Workers via GitHub Actions / 🌍 Автодеплой на Cloudflare Workers через GitHub Actions

[🇬🇧 Switch to English](#english) | [🇷🇺 Переключиться на русский](#русский)

---

## 🇬🇧 English

### 🚀 Features
- Automated deployment to Cloudflare Workers.
- Simple setup with environment variables for secure configuration.

### 📋 Requirements
1. **Cloudflare Account**  
   - Ensure you have a Cloudflare account and access to Workers.
2. **GitHub Repository**  
   - A repository to host your Worker script and GitHub Actions workflow.

### 🛠️ Setup

#### 1. 🔑 Create Environment Variables
You need two secrets in your GitHub repository:

- **CLOUDFLARE_API_TOKEN**  
  - This is a Cloudflare API token with permissions for Workers Scripts.  
  - Generate it in your Cloudflare dashboard:
    1. Navigate to **My Profile > API Tokens**.
    2. Click **Create Token**.
    3. Use the **Edit Cloudflare Workers** template or customize permissions as needed.
    4. Copy the generated token.

- **CLOUDFLARE_ACCOUNT_ID**  
  - This is your Cloudflare account ID.
  - Find it in the Cloudflare dashboard:
    1. Go to **Workers & Pages**.
    2. Your account ID is displayed at the top of the **Workers** section.

#### 2. 🔒 Add Secrets to GitHub Repository
1. Go to your repository on GitHub.
2. Navigate to **Settings > Secrets and variables > Actions > New repository secret**.
3. Add the following secrets:
   - Name: `CLOUDFLARE_API_TOKEN`  
     Value: `<Your Cloudflare API token>`
   - Name: `CLOUDFLARE_ACCOUNT_ID`  
     Value: `<Your Cloudflare Account ID>`

#### 3. 📜 Configure the Workflow
Ensure your `.github/workflows/deploy.yml` file includes the following:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Deploy to Cloudflare Workers
        uses: cloudflare/wrangler-action@v2
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```
#### 4. 📤 Push Changes
Commit and push your code to the main branch.
The GitHub Action will automatically deploy your script to Cloudflare Workers.
❗ Troubleshooting
Authentication Errors: Verify the secrets in your GitHub repository.
Permission Issues: Check the API token's permissions in Cloudflare.

## 🇷🇺 Русский


🚀 Возможности
Автоматическое развертывание на Cloudflare Workers.
Простая настройка с использованием переменных окружения для безопасной конфигурации.
📋 Требования
Аккаунт Cloudflare
Убедитесь, что у вас есть аккаунт Cloudflare с доступом к Workers.
Репозиторий GitHub
Репозиторий для размещения вашего скрипта и рабочего процесса GitHub Actions.
🛠️ Настройка
1. 🔑 Создание переменных окружения
Необходимо создать два секрета в вашем репозитории GitHub:

CLOUDFLARE_API_TOKEN

Токен API Cloudflare с правами для Workers Scripts.
Сгенерируйте его в панели Cloudflare:
Перейдите в My Profile > API Tokens.
Нажмите Create Token.
Используйте шаблон Edit Cloudflare Workers или настройте права вручную.
Скопируйте сгенерированный токен.
CLOUDFLARE_ACCOUNT_ID

Идентификатор вашего аккаунта Cloudflare.
Найдите его в панели Cloudflare:
Перейдите в Workers & Pages.
Идентификатор аккаунта отображается в верхней части раздела Workers.
2. 🔒 Добавление секретов в репозиторий GitHub
Перейдите в свой репозиторий на GitHub.
Перейдите в Settings > Secrets and variables > Actions > New repository secret.
Добавьте следующие секреты:
Имя: CLOUDFLARE_API_TOKEN
Значение: <Ваш токен Cloudflare API>
Имя: CLOUDFLARE_ACCOUNT_ID
Значение: <Ваш идентификатор аккаунта Cloudflare>
3. 📜 Настройка рабочего процесса
Убедитесь, что ваш файл .github/workflows/deploy.yml содержит следующее:
