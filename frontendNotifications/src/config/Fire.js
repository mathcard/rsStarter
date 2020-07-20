import firebase from 'firebase';
//import * as firebase from 'firebase';
//import '@firebase/firestore'

const config = {
  apiKey: "AIzaSyDurFrwYR-ZPHToYIny8gGNKzYjUjd1C-k",
  authDomain: "elastalert-7f779.firebaseapp.com",
  databaseURL: "https://elastalert-7f779.firebaseio.com",
  projectId: "elastalert-7f779",
  storageBucket: "elastalert-7f779.appspot.com",
  messagingSenderId: "445927064931",
  appId: "1:445927064931:web:3bceee6d426455227c7f56"
};

const fire = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

export default fire;