import {
  MetaSeo,
  SeoMetaSource as SeoMetaSourceTypes
} from "@/types/seo";


export const SeoMetaSource: ({
  description,
  author,
  meta,
  title,
}: SeoMetaSourceTypes) => MetaSeo[] = ({
  description,
  author,
  meta,
  title,
}: SeoMetaSourceTypes) =>
  [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
