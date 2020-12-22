import * as firebase from 'firebase';
// Your web app's Firebase configuration

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database };

// database.ref('notes/-MOxEbTwD_xcxbkFAd2d').update({ body: 'buy food' });

// // const expenses = [];
// // // database.ref('expenses').on('value', (snapshot) => {
// // //   const expenses = [];
// // //   snapshot.forEach((expense) => {
// // //     //   console.log(expense.val());
// //     expenses.push({
// //       id: expense.key,
// //       ...expense.val(),
// //     });
// //   });
// //   console.log(expenses);
// // });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses/-MOxGRW-rEz5ycC5uY0c').update({
//   amount: 210,
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // database.ref('expenses').push({
// //   description: 'Credit Card',
// //   note: '',
// //   amount: 4500,
// //   createdAt: moment(0).add(4, 'days').valueOf(),
// // });

// database.ref('expenses').push({
//   description: 'Gaming Computer',
//   note: 'Lots of dough',
//   amount: 1200000,
//   createdAt: moment(0).add(25, 'days').valueOf(),
// });
