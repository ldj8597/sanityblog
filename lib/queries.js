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

export const slugQuery = `*[_type == 'post'] {
  _id,
  slug {
    current
  }
}`;

export const postQuery = `*[_type == 'post' && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug,
  body
  }`;
