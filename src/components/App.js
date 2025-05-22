import React, { useState } from "react";
import "../styles/App.css";

import Tabs from "./components/Tabs";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Notifications from "./components/Notifications";
import CreatePost from "./components/CreatePost";
import ViewPost from "./components/ViewPost";

const usersList = ["Alice", "Bob", "Charlie"];

const App = () => {
  const [tab, setTab] = useState("home");
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [viewPostId, setViewPostId] = useState(null);

  const addPost = (author, content) => {
    const newPost = { id: Date.now(), author, content };
    setPosts([newPost, ...posts]);
    setNotifications([`New post by ${author}`, ...notifications]);
  };

  const editPost = (id, content) => {
    setPosts(posts.map(p => p.id === id ? { ...p, content } : p));
  };

  const postToView = posts.find(p => p.id === viewPostId);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Social Media App</h1>
      <Tabs current={tab} setTab={setTab} />

      {tab === "home" && <Posts posts={posts} onView={id => {
        setViewPostId(id);
        setTab("view");
      }} />}
      
      {tab === "users" && <Users users={usersList} posts={posts} />}
      
      {tab === "notifications" && (
        <Notifications notifications={notifications} setNotifications={setNotifications} />
      )}
      
      {tab === "create" && (
        <CreatePost users={usersList} addPost={addPost} setTab={setTab} />
      )}

      {tab === "view" && postToView && (
        <ViewPost post={postToView} editPost={editPost} setTab={setTab} />
      )}
    </div>
  );
};

export default App;
