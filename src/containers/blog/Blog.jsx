import React from 'react';
import './blog.css';
import Article from "../../components/article/Article"
import {blog01,blog02,blog03,blog04,blog05} from "./imports"

const Blog= () => (
    <div className="tony1__blog section__padding" id="blog">
      <div className="tony1__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br/> We are blogging about it.</h1>
      </div>
      <div className="tony1__blog-container">
        <div className="tony1__blog-container_groupA">
          <Article imgUrl={blog01} date= "Mar 25,2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="tony1__blog-container_groupB">
        <Article imgUrl={blog02} date= "Mar 25,2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog03} date= "Mar 25,2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog04} date= "Mar 25,2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog05} date= "Mar 25,2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );


export default Blog