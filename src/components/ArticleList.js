import React from 'react';
import Article from "./Article.js";



function ArticleList({posts}){
console.log({posts})
const articleList = posts.map((post)=>{
    return <Article 
      key = {post.id}
      title = {post.title}
      date = {post.date}
      preview = {post.preview}
      minutes = {post.minutes}
      />})

    return (
      <main>
        {articleList}
      </main>
    )
}
export default ArticleList