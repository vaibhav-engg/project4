import axios from "axios";

const url =
  "https://curriculum-django-staging.schooglink.com/version1.0/curriculum/";

// fetch boards
export const fetchBoards = async (token, codename) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    Token: token,
    CodeName: codename,
    ipAddress: "127.0.0.1",
    languageId: 2,
  };

  try {
    const response = await axios.post(`${url}listboards/`, data, {
      headers: headers,
    });
    const boardsData = await response.data.RV;
    //   console.log(boardsData);
    return boardsData;
  } catch (error) {
    console.log(error);
  }
};

// fetch classes
export const fetchClasses = async (token, codename, boardId) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    Token: token,
    CodeName: codename,
    ipAddress: "127.0.0.1",
    boardId,
  };

  try {
    const response = await axios.post(`${url}listclasses/`, data, {
      headers: headers,
    });
    const classesData = await response.data.RV;
    //   console.log(boardsData);
    return classesData;
  } catch (error) {
    console.log(error);
  }
};

//fetch subjects
export const fetchSubjects = async (token, codename, classId) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    Token: token,
    CodeName: codename,
    ipAddress: "127.0.0.1",
    classId,
  };

  try {
    const response = await axios.post(`${url}listsubjects/`, data, {
      headers: headers,
    });
    const subjectsData = await response.data.RV;
    //   console.log(boardsData);
    return subjectsData;
  } catch (error) {
    console.log(error);
  }
};