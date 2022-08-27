import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";
import { Post } from "../typings";
import Avatar from "./Avatar";

interface Props {
  post: Post;
}

function PostHeader({ post }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold font-mono">{post.title}</h1>
        <h2 className="text-xl text-slate-400">{post.description}</h2>
        <div className="flex items-center gap-3">
          <Avatar picture={urlFor(post.author.image).url()} />
          <p className="text-slate-400 text-sm font-light">
            Blog post by{" "}
            <span className="text-green-600">{post.author.name}</span> Published
            at {new Date(post._createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
