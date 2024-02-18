import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import { Loader } from "../ui";
import moment from "moment";

const ArticleDetail = () => {
  const { slug } = useParams();

  const { articleDetail, isLoading } = useSelector((state) => state.article);

  const dispatch = useDispatch();

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure(error.response.data.errors));
        console.log(error);
      }
    };
    getArticleDetail();
  }, [slug]);

  const compileBodyData = (text) => {
    return text.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        articleDetail && (
          <>
            <div className="container-fluid py-5 my-5 bg-body-tertiary ">
              <h1 className="display-5 fw-bold text-capitalize">
                {articleDetail.title && articleDetail.title}
              </h1>
              <p className="col-md-8 fs-4">
                {articleDetail.description && articleDetail.description}
              </p>
              <p>
                <span>Created at: </span>{" "}
                {moment(articleDetail.createdAt).format("DD MMM YYYY")}
              </p>
            </div>
            <div className="">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    Author
                  </strong>
                  <h3 className="mb-0">{articleDetail.author.username}</h3>
                  <p className="card-text mb-auto">{articleDetail.author.bio}</p>
                </div>
              </div>
            </div>
            <div className="h-100 p-5 mb-5 text-bg-dark rounded-3">
              <p>{compileBodyData(articleDetail.body)}</p>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ArticleDetail;
