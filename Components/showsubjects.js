import React, { useEffect, useState } from "react";
import { fetchSubjects } from "../Components/services";

const ShowSubjects = ({ token, codename, classId }) => {
  const [subjectData, setSubjectData] = useState([]);

  useEffect(async () => {
    const data = await fetchSubjects(token, codename, classId);
    console.log(data);
    setSubjectData(data);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center",fontFamily:"cursive",background:"red" }}>List of Subjects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {subjectData.map((singleSubject) => {
          return (
            <div
              key={singleSubject.subjectId}
              style={{
                border: "4px solid green",
                margin: "2rem",
                padding: "1rem",
                backgroundColor:"thistle",
                width: "80%",
                height: "18rem",
                borderRadius: ".8rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  style={{ height: "80%" }}
                  src={singleSubject.subjectIcon}
                  alt=""
                />
              </div>
              <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>
                {singleSubject.subjectName}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowSubjects;