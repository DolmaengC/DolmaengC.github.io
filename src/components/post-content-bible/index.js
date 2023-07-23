import React from 'react';
import './style.scss';

function PostContentBible({ html }) {
  return (
    <div className="post-content-bible">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContentBIBLE;
