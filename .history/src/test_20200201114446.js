import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('B1RaSskoNZLFYNLRdYTL').collection('cartItems').doc('716L5xNV2zUBTXgnuk0Z');

firestore.doc('/users/B1RaSskoNZLFYNLRdYTL/cartItems/716L5xNV2zUBTXgnuk0Z');
firestore.collection('/users/B1RaSskoNZLFYNLRdYTL/cartItems');


fetch('https://...')
  .then(response => response.json())
  .then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch('https://.../posts?userId=' + firstUser.id);
  })
  .then(response => response.json()
  .then(posts => console.log(posts)));

  const myAsyncFunction = async () => {
    const usersResponse = await fetch('https://...');
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postResponse= await fetch('https://.../posts?userId=' + secondUser.id);
    const posts = await postResponse.json();
    console.log(posts);


  }