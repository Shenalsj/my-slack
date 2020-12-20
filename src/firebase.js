
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDTe7Bigxcp2B4c89zFuq_LA8XimNcqhbU",
  authDomain: "slack-me-11468.firebaseapp.com",
  databaseURL: "https://slack-me-11468-default-rtdb.firebaseio.com",
  projectId: "slack-me-11468",
  storageBucket: "slack-me-11468.appspot.com",
  messagingSenderId: "81272550251",
  appId: "1:81272550251:web:3fdd97ae3100cd101d122e",
  measurementId: "G-LW5MQ3PV46"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth,provider};
export default db;
