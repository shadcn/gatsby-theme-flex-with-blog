import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "gatsby-theme-flex/src/layout/layout";
import PageHeader from "gatsby-theme-flex/src/blocks/page-header";
import { Container } from "theme-ui";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default ({ title, excerpt, image, tags, caption, date, body, slug }) => {
  return (
    <Layout title={title} description={excerpt} url={slug}>
      <article>
        <PageHeader
          heading={title}
          subHeading={date}
          lead={excerpt}
          sx={{
            textAlign: "center",
          }}
        />
        <Container>
          {image.full && (
            <figure>
              <Img
                fluid={image.full.fluid}
                title={title}
                alt={caption || title}
              />
              {caption && (
                <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
              )}
            </figure>
          )}
          <div>{body && <MDXRenderer>{body}</MDXRenderer>}</div>
        </Container>
      </article>
    </Layout>
  );
};
