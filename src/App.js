import { Routes, Route } from "react-router-dom";
import { Main, Login, Register, Navbar, ArticleDetail, CreateArticle } from "./components";
import AuthServise from "./service/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";
import ArticleService from "./service/article";
import {
  getArticlesFailure,
  getArticlesStart,
  getArticlesSuccess,
} from "./slice/article";

const App = () => {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await AuthServise.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const token = getItem("token");
    if (token && token !== "undefined") {
      getUser();
    }
  }, []);

  return (
      <div className="container">
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/create-article" element={<CreateArticle />} />
        </Routes>
      </div>
  );
};

export default App;
