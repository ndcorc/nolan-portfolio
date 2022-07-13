import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFirestore, useFirestoreCollectionData, useStorage, useStorageDownloadURL } from "reactfire";
import { doc, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";



import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";


const FetchImage = ({ storagePath, aboutTitle }) => {
  const storage = useStorage();

  const { data: imageURL } = useStorageDownloadURL(ref(storage, storagePath));

  return <img src={imageURL} alt={aboutTitle} style={{ width: '200px', height: '200px' }} />;
};

const About = () => {
  let firestore = useFirestore();
  const storage = getStorage();
  const aboutsCollection = collection(firestore, 'abouts');
  const { status, data: abouts } = useFirestoreCollectionData(aboutsCollection);

  if (status === 'loading') {
    return <span>loading...</span>;
  }
  console.log("abouts", abouts);

  return (
    <>
      <h2 className="head-text">
        Continuous <span>Learning</span> is the Minimum
        <br />
        Requirement for <span>Success</span> in any Field
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <FetchImage storagePath={about.imgUrl} aboutTitle={about.title} />
           {/*  <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 5 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
