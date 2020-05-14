/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default ({ title, slug, image, date, excerpt }) => {
  excerpt = excerpt.length > 150 ? excerpt.substr(0, 150) + "..." : excerpt;
  return (
    <Link to={slug} title={`Go to the "${title}" post`}>
      <article>
        <Grid
          columns={["1fr", "350px 1fr"]}
          gap={4}
          sx={{
            py: [4, 6],
          }}
        >
          {image && (
            <Img
              fluid={image.thumbnail.fluid}
              alt={`Image for ${title}`}
              title={title}
            />
          )}
          <div>
            <h2>{title}</h2>
            <small>{date}</small>

            {excerpt && <p dangerouslySetInnerHTML={{ __html: excerpt }} />}
          </div>
        </Grid>
      </article>
    </Link>
  );
};
