import firebase from 'firebase'
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Gr4ubV1x0bG6boazC1QZxYJ4D4ghA-A",
  authDomain: "myshop-f277a.firebaseapp.com",
  databaseURL: "https://myshop-f277a-default-rtdb.firebaseio.com",
  projectId: "myshop-f277a",
  storageBucket: "myshop-f277a.appspot.com",
  messagingSenderId: "857111204816",
  appId: "1:857111204816:web:a367eec8f8b0d26ba71fd5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;