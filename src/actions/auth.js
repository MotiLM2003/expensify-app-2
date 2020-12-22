import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (id) => {
  return {
    type: 'LOGIN',
    id: id,
  };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
