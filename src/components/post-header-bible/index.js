import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostHeaderBible({ bible }) {
  return (
    <header className="post-header-bible">
      {bible.emoji && <div className="emoji">{bible.emoji}</div>}
      <div className="info">
        <div className="categories">
          {bible.categories.map((category) => (
            <Link className="category" key={category} to={`/posts/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </div>

      <h1 className="title">{bible.title}</h1>
      <div className="info">
        <div className="author">
          posted by <strong>{bible.author}</strong>,
        </div>{' '}
        {bible.date}
      </div>
    </header>
  );
}
export default PostHeaderBible;

