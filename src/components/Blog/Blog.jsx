import React from "react";
import "./Blog.css";

const Blog = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <section data-aos="fade-up" data-aos-duration="1500" id="blog">
      <h5>Featured Blogs</h5>
      <h2>Blog</h2>

      <div className="coming-soon">
        <h2 className="blog">Coming Soon...</h2>
      </div>
    </section>
  );
};

export default Blog;
