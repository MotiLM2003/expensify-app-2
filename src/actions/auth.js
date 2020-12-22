import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  console.log('here');
  return () => {
    console.log('here');
    return firebase.auth().signOut();
  };
};
