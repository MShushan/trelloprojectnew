
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTNgk9FGKKc3YIgrvcQCg2hDjIqZH4PxU",
  authDomain: "trello-workspace.firebaseapp.com",
  projectId: "trello-workspace",
  storageBucket: "trello-workspace.appspot.com",
  messagingSenderId: "943697076119",
  appId: "1:943697076119:web:f89f12d71fdf8fa431aed2"
};

export default initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth, app }