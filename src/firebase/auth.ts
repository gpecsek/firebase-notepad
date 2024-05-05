import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (
  email: any,
  password: any
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (
  email: any,
  password: any
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSingInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // TODO: result.user to save user in firestor
  return result;
};

export const doSignOut = async () => {
  return auth.signOut();
};

export const doPasswordReset = async (email: any) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = async (password: any) => {
  const user = auth.currentUser;
  if (user) {
    return updatePassword(user, password);
  }
  throw new Error("No user is currently signed in.");
};

export const doSendEmailVerification = async () => {
  const user = auth.currentUser;
  if (user) {
    return sendEmailVerification(user, {
      url: `${window.location.origin}/home`
    });
  }
  throw new Error("No user is currently signed in.");
};
