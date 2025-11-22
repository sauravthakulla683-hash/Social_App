import React from "react";
import Nav from "../components/Nav";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import Users from "../components/Users";

const Feed = () => {
  return (
    <div>
      <Nav />
      <div className="flex justify-between max-md:justify-center">
        <Stories />
        <Posts />
        <Users />
      </div>
    </div>
  );
};

export default Feed;
