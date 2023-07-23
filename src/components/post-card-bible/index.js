import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCardBible({ bible }) {
  const { id, slug, title, excerpt, date, categories } = bible;
  return (
    <div className="post-card-wrapper">
      <Link className="post-card-bible" key={id} to={slug}>
        <div className="title">{title}</div>
        <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="info">
          <div className="date">{date}</div>
          <div className="categories">
            {categories.map((category) => (
              <Link className="category" key={category} to={`/bibles/${category}`}>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCardBible;
