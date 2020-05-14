import React from "react";
import Layout from "gatsby-theme-flex/src/layout/layout";
import PageHeader from "gatsby-theme-flex/src/blocks/page-header";
import { Container } from "theme-ui";
import PostTeaser from "./post-teaser";

export default ({
  posts,
  previousPagePath,
  nextPagePath,
  pageTitle,
  pageExcerpt,
}) => (
  <Layout pageTitle={pageTitle} pageExcerpt={pageExcerpt}>
    <PageHeader heading="Blog posts" />
    <Container>
      {posts && posts.map((post) => <PostTeaser {...post} key={post.id} />)}
    </Container>
  </Layout>
);
