import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/sanity";
import { Post } from "../typings";

interface Props {
  post: Post;
}

function PostPreview({ post }: Props) {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <a>
        <div className="border rounded-lg shadow-xl group overflow-hidden">
          <img
            className="aspect-video object-cover rounded-t-lg group-hover:scale-105 duration-300"
            src={urlFor(post.mainImage).url()}
            alt=""
          />
          <div className="flex items-center justify-between px-5 py-3">
            <div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-xs">
                {post.description} by{" "}
                <span className="font-bold">{post.author.name}</span>
              </p>
            </div>
            <img
              className="rounded-full w-12 h-12 object-cover ring ring-pink-400"
              src={urlFor(post.author.image).url()}
              alt=""
            />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PostPreview;
