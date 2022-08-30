import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { postQuery, slugQuery } from "../../lib/queries";
import { client, urlFor } from "../../lib/sanity";
import { Comment, Post } from "../../typings";
import { NextPageWithLayout } from "../_app";
import PortableText from "react-portable-text";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import CommentForm from "../../components/CommentForm";
import Comments from "../../components/Comments";

interface PostWithComments extends Post {
  comments: Comment[];
}

interface Props {
  post: PostWithComments;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  //   const posts: Post[] = await sanityClient.fetch(slugQuery);
  //   const paths = posts.map((post) => {
  //     return {
  //       params: {
  //         slug: post.slug.current,
  //       },
  //     };
  //   });

  //   return {
  //     paths,
  //     fallback: "blocking",
  //   };
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const post: Post = await client.fetch(postQuery, {
    slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const PostPage: NextPageWithLayout<Props> = ({ post }) => {
  const router = useRouter();
  // console.log(post);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      {post && (
        <div className="space-y-10">
          {/* Banner image */}
          <div className="relative w-full h-40 mb-5">
            <Image
              className="object-cover"
              src={urlFor(post.mainImage).url()}
              alt=""
              layout="fill"
            />
          </div>

          <div className="px-5 py-5 flex flex-col gap-10 max-w-3xl mx-auto">
            <PostHeader post={post} />
            <PostBody post={post} />
            <CommentForm post={post} />
            <Comments comments={post.comments} />
          </div>
        </div>
      )}
    </>
  );
};

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostPage;
