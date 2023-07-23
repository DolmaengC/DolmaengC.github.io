import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import PostHeaderBible from '../components/post-header-bible';
import PostNavigatorBible from '../components/post-navigator-bible';
import Bible from '../models/bible';
import PostContentBible from '../components/post-content-bible';
import Utterances from '../components/utterances';

function BibleTemplate({ data }) {
  const curPost = new Post(data.cur);
  const prevPost = data.prev && new Post(data.prev);
  const nextPost = data.next && new Post(data.next);
  const { comments } = data.site?.siteMetadata;
  const utterancesRepo = comments?.utterances?.repo;

  return (
    <Layout>
      <Seo title={curPost?.title} description={curPost?.excerpt} />
      <PostHeader post={curPost} />
      <PostContent html={curPost.html} />
      <PostNavigator prevPost={prevPost} nextPost={nextPost} />
      {utterancesRepo && <Utterances repo={utterancesRepo} path={curPost.slug} />}
    </Layout>
  );
}

export default BibleTemplate;

export const pageQuery = graphql`
  query($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 500, truncate: true)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;

