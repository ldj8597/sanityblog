export const indexQuery = `*[_type == 'post'] {
    _id,
    _createdAt,
    title,
    slug,
    author -> {
    name,
    image
  },
  description,
  mainImage
  }`;
