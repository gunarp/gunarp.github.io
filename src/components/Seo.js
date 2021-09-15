import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, keywords, title, siteUrl }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const {siteUrl} = data.site.siteMetadata
        const metaDescription = 
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title

        return (
          <Helmet 
            htmlAttributes={{lang}}
            title={metaTitle}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: metaTitle
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              }
            ].concat(
              keywords.length > 0 ? {
                name: 'keywords',
                content: keywords.join(', ')
              } : []
            ).concat(meta)}
          />
        )
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`