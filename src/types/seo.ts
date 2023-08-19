export type SeoMetaSource = {
    title?: string;
    lang?: string;
    description?: string;
    author?: string;
    meta: ConcatArray<MetaSeo>;
  };
  
export type MetaSeo =
| { name: string; content: string | undefined; property?: undefined }
| { property: string; content: string | undefined; name?: undefined };