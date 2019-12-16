import firebase from 'firebase'

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyANlSm08O2e2dlg86XCXmETyep29HCwn2A",
        authDomain: "expochatapp-5cd7f.firebaseapp.com",
        databaseURL: "https://expochatapp-5cd7f.firebaseio.com",
        projectId: "expochatapp-5cd7f",
        storageBucket: "expochatapp-5cd7f.appspot.com",
        messagingSenderId: "165043420954",
        appId: "1:165043420954:web:2f4a51524ff86c513776a3",
        measurementId: "G-K66T097N0R
      })
    }
  }

  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback)
  }
}

const firebaseSDK = new FirebaseSDK()
export default firebaseSKD
