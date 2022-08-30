import { type } from "os";

export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Comment won't show on the site without approval",
    },
    { name: "email", title: "Email", type: "string" },
    { name: "comment", title: "Comment", type: "string" },
    { name: "post", title: "Post", type: "reference", to: { type: "post" } },
  ],

  preview: {
    select: {
      name: "name",
      comment: "comment",
      post: "post.title",
    },
    prepare({ name, comment, post }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      };
    },
  },
};
