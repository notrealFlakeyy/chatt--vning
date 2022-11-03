import { getDatabase, ref, onChildAdded, set } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js"
import { initializeApp, } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMiygeyKcSjV1ZCtI4Q9BN4Yt-IBP8kRw",
    authDomain: "simple-chatt-76aab.firebaseapp.com",
    projectId: "simple-chatt-76aab",
    storageBucket: "simple-chatt-76aab.appspot.com",
    messagingSenderId: "174386187943",
    appId: "1:174386187943:web:7b5cb0bbe865d81e55d582",
    databaseURL: "https://simple-chatt-76aab-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const chatRef = ref(db, '/chat');

onChildAdded(chatRef, function (data) {
    const message = document.createElement('li');
    message.innerText = new Date(data.key).toLocaleString("sv-SE") + " " + data.val();
    list.appendChild(message);
});




const input = document.querySelector('input');
const list = document.querySelector('ul');


input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {

        const messageId = new Date().toUTCString();


        set(ref(db, 'chat/' + messageId), input.value);

        input.value = "";
    }
});
