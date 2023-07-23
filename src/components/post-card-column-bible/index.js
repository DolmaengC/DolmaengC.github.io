import { Button } from '@mui/material';
import { navigate } from 'gatsby-link';
import React, { useCallback } from 'react';
import PostCardBible from '../post-card-bible';
import './style.scss';

function PostCardColumnBible({ bibles, showMoreButton, moreUrl }) {
  const onMoreButtonClick = useCallback(() => {
    navigate(moreUrl);
  }, [moreUrl]);

  return (
    <div className="post-card-column-wrapper-bible">
      <div className="post-card-column-bible">
        {bible.map((bible, index) => (
          <BibleCard key={index} bible={bible} />
        ))}
        {showMoreButton && (
          <Button
            className="more-post-card-button-bible"
            onClick={onMoreButtonClick}
            variant="contained"
            disableElevation
          >
            More
          </Button>
        )}
      </div>
    </div>
  );
}

export default PostCardColumnBible;
