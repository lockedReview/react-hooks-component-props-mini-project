import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";



const blogInfo =blogData;

function App() {
  const blogElements = {
    about:blogInfo.about,
    image:blogInfo.image,
    name:blogInfo.name,
    posts:blogInfo.posts
  }  
  
  return (
    <div className="App">
      <Header name={blogElements.name}/>
      <About about= {blogElements.about} image= {blogElements.image} />
      <ArticleList posts={blogElements.posts} />      
    </div>
  );
}

export default App;
