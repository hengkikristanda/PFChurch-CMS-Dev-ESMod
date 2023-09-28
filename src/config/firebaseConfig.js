var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
	apiKey: "AIzaSyB9XAEk3bE4MjMRcoUXM5AvpzSA0qoC0l8",
	authDomain: "pfchurch-cms.firebaseapp.com",
	projectId: "pfchurch-cms",
	storageBucket: "pfchurch-cms.appspot.com",
	messagingSenderId: "132480345017",
	appId: "1:132480345017:web:49a17755fd8edcb3e94c68",
};

firebase.initializeApp(firebaseConfig);

module.exports = {
	firebase,
};
