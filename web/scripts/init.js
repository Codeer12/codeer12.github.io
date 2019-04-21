if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
	"apiKey": "AIzaSyA8r2vrQaL3f4Jz1Et09RPvJts2xR_sBOg",
	"databaseURL": "https://login-to-games4u.firebaseio.com",
	"storageBucket": "login-to-games4u.appspot.com",
	"authDomain": "login-to-games4u.firebaseapp.com",
	"messagingSenderId": "152743638512",
	"projectId": "login-to-games4u"
});