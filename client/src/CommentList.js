import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CommentList = ({ id }) => {
  const [comment, setComment] = useState([]);
  const fetchComment = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${id}/comments`);
    setComment(res.data);
  };

  useEffect(() => {
    fetchComment();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderedComments = comment.map((data) => {
    return <li id={data.id}>{data.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};

export default CommentList;
