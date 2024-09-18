import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { books, genres, authors } from "./data.js";

config();

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

async function uploadBooks(data) {
  try {
    // Loop through the data array
    for (const book of data) {
      // Use the book's id as the document ID
      const bookRef = doc(db, "books", book.id);

      // Upload the data to Firestore
      await setDoc(bookRef, book);

      console.log(`Document written with ID: ${book.id}`);
    }
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

async function uploadGenresAndAuthors(genres, authors) {
  try {
    // Extract genre names
    const genreNames = Object.values(genres);

    // Extract author names
    const authorNames = Object.values(authors);

    // Store genres in 'genres' collection with document 'allGenres'
    await setDoc(doc(db, "genres", "allGenres"), { genres: genreNames });

    // Store authors in 'authors' collection with document 'allAuthors'
    await setDoc(doc(db, "authors", "allAuthors"), { authors: authorNames });

    console.log(
      "Genres and authors have been successfully stored in Firestore."
    );
  } catch (error) {
    console.error("Error storing genres and authors:", error);
  }
}

uploadBooks(books);
uploadGenresAndAuthors(genres, authors);
