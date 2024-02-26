import React from "react";
import BlogArticle from "../../Components/Blog/BlogArticle";
import NewsLetter from "../../Components/News/NewsLetter";
import Blog from "../../Components/Blog/Blog";
import Partner from "../../Components/Partner/Partener";
import { Banner } from "flowbite-react";

function News() {
  return (
    <div>
      <Blog />
      <Partner />
      <Banner />
    </div>
  );
}

export default News;
