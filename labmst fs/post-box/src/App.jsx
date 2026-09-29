import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");

  const count = post.length;
  const isOverLimit = count > 100;

  const handlePost = () => {
    alert("Post submitted successfully!");
    setPost("");
  };

  return (
    <div className="container">
      <div className="post-box">
        <h2>Create a Post</h2>

        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Write your post..."
        />

        <p className="counter">{count} / 100</p>

        {isOverLimit && (
          <p className="error">Limit exceeded</p>
        )}

        <button
          onClick={handlePost}
          disabled={post.length === 0 || isOverLimit}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default App;