import "../css/card.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { delPost, delpost, editPost } from "../JS/userSlice/postSlice";

function AppPostt({ ping, setPing, el }) {
  const user = useSelector((store) => store.user?.user);
  const [appPost, setappPost] = useState({});

  const dispatch = useDispatch();
  return (
    <>
      
        {" "}
        <div>
          <div className="containerr">
            <div className="flex-containerr">
              <div className="cardd">
                <div
                  className="cardd-image"
                  style={{ backgroundImage: `url(${el?.image[0]?.url})` }}
                />

                <div className="cardd-content">
                  <span className={`${el?.status ? "green-flag" : "red-flag"}`}>
                    {el?.status ? "approved" : "tesstana"}
                  </span>
                  {user.status === "admin" ? (
                    <button
                      onClick={(e) => {
                        dispatch(
                          editPost({
                            id: el?._id,
                            status: { status: !el?.status },
                          })
                        );
                        setPing(!ping);
                      }}
                    >
                      Edit
                    </button>
                  ) : null}

                  <h1>{el?.postName}</h1>
                  <div className="subtitle">{el?.category}</div>
                  <p>{el?.description}</p>
                  <div className="cardd-details">
                    <div className="cardd-details-inner">
                      <div className="read-more">
                        <button
                          className="buttonn"
                          onClick={(e) => {
                            dispatch(delPost({ id: el?._id }));
                            setPing(!ping);
                          }}
                        >
                          delete
                        </button>
                      </div>
                      <div className="options">
                        <div className="comments">
                          <a href="#!">
                            <i className="fa fa-comments-o" />
                            16 comments
                          </a>
                        </div>
                        <div className="likes">
                          <a href="#!">
                            <i className="fa fa-heart-o" />
                            322 likes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default AppPostt;
