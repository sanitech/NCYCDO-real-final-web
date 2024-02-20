import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid lg:grid-cols-2 gap-6">
        <BlogCard newsID={'newsID'} category={''} title={''} />
        <BlogCard newsID={'newsID'} category={''} title={''}/>
        <BlogCard newsID={'newsID'} category={''} title={''}/>
        <BlogCard newsID={'newsID'} category={''} title={''}/>
        <BlogCard newsID={'newsID'} category={''} title={''}/>

        
        </div>
      </div>
    </div>
  );
}

export default Blog;
