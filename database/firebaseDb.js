import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCU7lOA0eybBthWqnkM4o8-KEPdqwl610A",
    databaseURL: "https://todo-demo-8bcf3.firebaseio.com/"
};

firebase.initializeApp(config);
const database = firebase.database();
export default database;