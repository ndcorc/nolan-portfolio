import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Certificates.scss";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificates, setCertificates] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "certificates"]  | order(order asc)';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });
  }, []);

  return (
    <>
      {certificates.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(certificates[currentIndex].imgurl)}
              alt={certificates[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{certificates[currentIndex].detail}</p>
              <div>
                <h4 className="bold-text">{certificates[currentIndex].name}</h4>
                <h5 className="p-text">
                  {certificates[currentIndex].organisation}
                </h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? certificates.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === certificates.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificates, "app__testimonial"),
  "certificates",
  "app__primarybg"
);
