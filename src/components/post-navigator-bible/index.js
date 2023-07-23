import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostNavigatorBible({ prevBible, nextBible }) {
  return (
    <div className="post-navigator-bible">
      <div className="post-navigator-card-wrapper-bible">
        {nextPost && (
          <Link className="post-card prev" key={nextBible.id} to={nextBible.slug}>
            <div className="direction">이전 글</div>
            <div className="title">{nextBible.title}</div>
          </Link>
        )}
      </div>
      <div className="post-navigator-card-wrapper-bible">
        {prevBible && (
          <Link className="post-bible next" key={prevBible.id} to={prevBible.slug}>
            <div className="direction">다음 글</div>
            <div className="title">{prevBible.title}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PostNavigatorBible;
