export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    image: string;
    name: string;
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: "my-first-post";
  };
  body: object[];
}
