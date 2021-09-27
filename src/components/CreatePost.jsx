import React, { useRef, useState } from "react";

const CreatePost = ({ user, setPosts }) => {
  const imageRef = useRef();
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const posts = {
      content,
      image,
      user,
      id: new Date().getTime(),
    };

    setPosts((prevPosts) => [...prevPosts, posts]);

    setContent("");
    setImage(null);
    imageRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handlePostSubmit}>
        <div className="mb-3 mt-5">
          <label htmlFor="content">Post Title</label>
          <input
            id="content"
            type="text"
            placeholder="Post Title"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image">Upload Post Image</label>
          <input
            id="image"
            type="file"
            className="form-control"
            ref={imageRef}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
