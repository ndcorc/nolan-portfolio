import React from "react";

import { About, Footer, Header, Skills, Certificates, Work } from "./container";
import { getFirestore } from "firebase/firestore";
import { ref, uploadBytesResumable, getStorage } from "firebase/storage";
import { FirestoreProvider, StorageProvider, useFirebaseApp } from "reactfire";
/* import { BallTriangle } from "react-loader-spinner"; */
import { Navbar } from "./components";
import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  const app = useFirebaseApp();
  const firestoreInstance = getFirestore(app);
  const storageInstance = getStorage(app);
  /*  const { status, data: firestoreInstance } = useInitFirestore(
    async (firebaseApp) => {
      const db = initializeFirestore(firebaseApp, {});
      await enableIndexedDbPersistence(db);
      return db;
    },
  ); */
  /*   if (status === "loading") {
    return <BallTriangle />;
  } */

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <StorageProvider sdk={storageInstance}>
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Work />
          {/* <Skills />
    <Certificates /> */}
          <Footer />
        </div>
      </StorageProvider>
    </FirestoreProvider>
  );
};

export default App;
