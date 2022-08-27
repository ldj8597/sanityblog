import React from "react";
import PortableText from "react-portable-text";
import { Post } from "../typings";

interface Props {
  post: Post;
}

function PostBody({ post }: Props) {
  return (
    <div>
      <div className="prose">
        <PortableText
          content={post.body}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        />
      </div>
    </div>
  );
}

export default PostBody;
