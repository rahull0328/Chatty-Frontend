# ChatLoom

ChatLoom is a real-time chatting application built with React and Firestore. It allows users to send and receive messages instantly, providing a seamless and interactive chat experience.

---

## 🚀 Features

- **Real-Time Messaging**: Instantly send and receive messages.
- **Firestore Database**: Secure and scalable backend using Google Firestore.
- **User Authentication**: Login and registration for users.
- **Responsive Design**: Works seamlessly across different devices.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **Deployment**: Firebase Hosting / Vercel / Netlify

---

## ⚙️ Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rahull0328/ChatLoom.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ChatLoom
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase credentials:

- Create a Firebase project.
- Add your Firestore credentials in src/config/firebase.js:

```bash
   // src/config/firebase.js
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   export const auth = getAuth(app);
```

5. Start the development server:

```bash
npm run dev
```

