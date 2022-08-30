import React from "react";
import { Comment } from "../typings";

interface Props {
  comments: Comment[];
}

function Comments({ comments }: Props) {
  return (
    <div className="shadow shadow-yellow-500 rounded p-5">
      <h2 className="text-4xl font-semibold">Comments</h2>
      <div className="w-full h-px bg-slate-400 mt-1 mb-3" />
      <div className="space-y-3">
        {comments &&
          comments.map((comment) => (
            <p>
              <span className="text-yellow-500">{comment.name}: </span>
              {comment.comment}
            </p>
          ))}
      </div>
    </div>
  );
}

export default Comments;
