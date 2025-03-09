# Polyglot

## *Overview* 🧐
**Polyglot** is a lightweight translation app built with **React (Vite)** and the **OpenAI API**. It allows users to input text, select a target language, and receive a translated output. The app supports **real-time translation**, **input validation**, and a simple, responsive UI.

![Polyglot](/public/assets/mobile-screenshot.png)

## *Features* 🌟
🎯 **Translate text in real time** using OpenAI's GPT API.
🎯 **Intuitive UI** with a minimalist design for easy navigation.
🎯 **Supports multiple languages** (currently French, Spanish, and Japanese).
🎯 **Error handling** for input validation (e.g., character limits, empty fields).
🎯 **"Start Over" button** to reset the translation process.
🎯 **Keyboard & Accessibility support** (e.g., `aria-live` for error messages).

## *Tech Stack* 🛠️
- **Frontend:** React (Vite), SCSS
- **State Management:** React Hooks (`useState`, `useCallback`)
- **API:** OpenAI GPT-3.5 Turbo
- **Build Tool:** Vite
- **Hosting:** netlify

## *Installation & Setup* 🏗️
To run the project locally, follow these steps:

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/polyglot-translator.git
cd polyglot-translator
```

2️⃣ Install dependencies:
```sh
npm install
```
3️⃣ Set up environment variables:
- Create a .env file in the root directory and add your OpenAI API key:
```json
    VITE_OPENAI_API_KEY=your_api_key_here
```

4️⃣ Start the development server:
```sh
npm run dev
```
The app should now be running at http://localhost:5173.

Usage 🚀
1. Enter the text you want to translate.
2. Select a target language.
3. Click "Translate" to see the translated result.
4. Click "Start Over" to reset and try again.

Screenshots 📷
![Polyglot](/public/assets/error-handling.png)

Potential Improvements 🔍
- Add more language support dynamically.
- Improve UI/UX with animations.
- Implement offline mode (caching recent translations).
- Save and display past translations.
- Add a dark mode toggle.

What I Learned 🤓
🧠 State Management Best Practices: Managing user input, errors, and API responses effectively with React Hooks.
🧠 Accessibility Considerations: Implementing aria-live for error messages and ensuring proper radio button grouping.
🧠 Optimizing Performance: Avoiding unnecessary re-renders with useCallback and React refs instead of direct DOM manipulation.

Resources 🗃️
🗃️ OpenAI API Docs
🗃️ React Docs
🗃️ Vite Docs

Links 🔗
[Live Demo 👈](https://panglottes.netlify.app/)