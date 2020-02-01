import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('B1RaSskoNZLFYNLRdYTL').collection('cartItems').doc('716L5xNV2zUBTXgnuk0Z');

firestore.doc('/users/B1RaSskoNZLFYNLRdYTL/cartItems/716L5xNV2zUBTXgnuk0Z');
firestore.collection('/users/B1RaSskoNZLFYNLRdYTL/cartItems');
