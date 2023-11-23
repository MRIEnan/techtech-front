import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC7pd3Ep0Q9TnDOygbGktOvMY824zz8Cx4",
  authDomain: "en-test-project.firebaseapp.com",
  projectId: "en-test-project",
  storageBucket: "en-test-project.appspot.com",
  messagingSenderId: "226709750837",
  appId: "1:226709750837:web:fd8ad3fbaf793ea1711d7c",
};
const app = initializeApp(firebaseConfig);

export default app;

/* apiKey: process.env.API_KEY,
authDomain: process.env.AUTH_DOMAIN,
projectId: process.env.PROJECT_ID,
storageBucket: process.env.STORAGE_BUCKET,
messagingSenderId: process.env.MESSAGING_SENDER_ID,
appId: process.env.APP_ID, */
