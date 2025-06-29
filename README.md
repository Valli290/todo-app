# todo-app
# Todo Task Management App

A full-featured task manager built with React and Google OAuth.  
Users can log in, add tasks, mark them complete, and manage their todos in real-time.  
Built as a submission for the Katomaran Hackathon.
🔐 Features

- 🔑 Google OAuth Login (via `@react-oauth/google`)
- 📝 Add, complete, and manage tasks
- 💾 Tasks stored in localStorage
- 📱 Responsive design (Bootstrap)
- ⚡ Real-time UI updates
- 🧠 Clean code with React Hooks

---

## 📁 Project Structure

todo-app-client/
├── public/
├── src/
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── ...        ┌──────────────┐
        │   Browser    │
        └─────┬────────┘
              │
    User interacts with React app (UI)
              │
      ┌───────▼────────┐
      │ React Frontend │
      │  (Vite/CRA)    │
      └───────┬────────┘
              │
┌─────────────▼──────────────────┐
│ Google OAuth Service           │
│ via @react-oauth/google        │
└────────────────────────────────┘
This project is a part of a hackathon run by https://www.katomaran.com
🙌 Credits
👩‍💻 Developed by: Valli Nayagam V(@Valli290)

🚀 Built using:

React

Vite

Bootstrap

Google OAuth

🏁 Submitted for: Katomaran Hackathon

AI Assistance
This project was built with the help of:

ChatGPT (OpenAI) — for guidance, debugging, and React code structure.

Occasional prompts were used to handle OAuth logic, and clarify deployment steps.

⚠️ Prompt logs can be shown upon request during the interview, as per hackathon rules.
