import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Post } from "../typings";

interface Inputs {
  _id: string;
  slug: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
}
function CommentForm({ post }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onValid: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/createComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isSubmitting) {
    return <h3 className="text-center text-xl">Submitting comment...</h3>;
  }

  if (hasSubmitted) {
    return (
      <div className="text-white bg-yellow-500 py-10 space-y-5 rounded">
        <h3 className="text-center text-3xl font-bold">
          Thanks for your comment!
        </h3>
        <p className="text-center">
          Once it has approved, it will appear below!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <hr className="border border-yellow-500 mb-8" />
      <div>
        <p className="text-yellow-500 text-sm">Enjoyed this article?</p>
        <h3 className="text-3xl font-semibold">Leave a comment below!</h3>
        <hr className="mt-2" />
      </div>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-5">
        <input {...register("_id")} type="hidden" name="_id" value={post._id} />
        <input
          {...register("slug")}
          type="hidden"
          name="slug"
          value={post.slug.current}
        />
        <label>
          <span className="text-slate-500">Name</span>
          <input
            {...register("name", {
              required: "- Name field is required",
            })}
            type="text"
            id="name"
          />
        </label>
        <label>
          <span className="text-slate-500">Email</span>
          <input
            {...register("email", {
              required: "- Email field is required",
            })}
            type="email"
            id="email"
          />
        </label>
        <label>
          <span className="text-slate-500">Comment</span>
          <textarea
            {...register("comment", {
              required: "- Comment field is required",
            })}
            id="comment"
            rows={9}
          />
        </label>
        <div className="text-red-500 text-sm pl-5">
          <p>{errors.name?.message}</p>
          <p>{errors.email?.message}</p>
          <p>{errors.comment?.message}</p>
        </div>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-yellow-600 focus:ring-2 ring-offset-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
