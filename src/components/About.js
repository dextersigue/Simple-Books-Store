import React, { useState, useEffect } from "react";
import MarkDown from "react-markdown";
import readmePath from "../data/README.md";

const About = () => {
  const [markDownText, setMarkDownText] = useState("");
  useEffect(() => {
    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkDownText(text);
      });

    document.title = "About || React BookStore App";
  }, []);

  return (
    <div class="card container border-0">
      <div class="card-body">
        <div className="top-content text-center">
          <h1 className="display-4">Simple Book Store</h1>
          <p className="lead">
            This is a ReactJS bookstore cart application using react router,
            context api, react hooks, bootstrap, and localStorage. 
          </p>
          <hr className="my-4" />
        </div>
        <div className="bottom-content" style={{ fontSize: "1.2rem" }}>
          <MarkDown source={markDownText} />
        </div>
      </div>
    </div>
  );
};

export default About;
