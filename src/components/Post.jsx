import React from "react";

const Post = ({ post }) => {
  return (
    <div className="mb-3">
      <h3>{post.content}</h3>
      <p>{post.user}</p>
      {post.image && (
        <img
          src={URL.createObjectURL(post.image)}
          alt={post.content}
          style={{ width: 280, height: "auto", objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default Post;
