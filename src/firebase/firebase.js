import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyCO_F_HE9yF3IAscuW1ab18TPE-HdGIW5k',
  authDomain: 'expensify-71652.firebaseapp.com',
  databaseURL: 'https://expensify-71652-default-rtdb.firebaseio.com',
  projectId: 'expensify-71652',
  storageBucket: 'expensify-71652.appspot.com',
  messagingSenderId: '202525676729',
  appId: '1:202525676729:web:63371cc6cb485da9dbb768',
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('users').push({
//   name: 'Eden Elmakies',
//   age: 10,
//   isSingle: true,
//   location: {
//     city: 'Kiryat Gat',
//     country: 'Israel',
//   },
// });

database.ref('users').on('value', (snapshot) => {
  const list = snapshot.val();
  console.log(list);
});

// database.ref('users').set({
//   name: 'Moti Elmakies',
//   age: 42,
//   isSingle: false,
//   location: {
//     city: 'Ramat Gan',
//     country: 'Israel',
//   },
// });

// database.ref('users').remove();

// database
//   .ref('users/isSingle')
//   .remove()
//   .then(() => {
//     console.log('removed');
//   });
