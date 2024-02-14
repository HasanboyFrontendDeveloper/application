import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import article, {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";

const ArticleDetail = () => {
  const { slug } = useParams();

//   const {articleDetail} = useSelector(state => state.article)

  const dispatch = useDispatch(state => state.article);

  const getArticle = async () => {
    dispatch(getArticleDetailStart());
    try {
      const { article } = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(article));
    } catch (error) {
      dispatch(getArticleDetailFailure(error));
    }
  };

  useEffect(() => {
    getArticle();
  }, [slug]);

  return <div>ArticleDetail</div>;
};

export default ArticleDetail;
