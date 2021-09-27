import React, { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import PostList from "./components/PostList";

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setUser(userName);

    document.title = user
      ? `${user}s feed`
      : "Please login first to see feeds.";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  console.log(posts);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Header user={user} setUser={setUser} />

          <CreatePost user={user} setPosts={setPosts} />

          <PostList posts={posts} />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
