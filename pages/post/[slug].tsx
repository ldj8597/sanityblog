import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { postQuery, slugQuery } from "../../lib/queries";
import { sanityClient, urlFor } from "../../lib/sanity";
import { Post } from "../../typings";
import { NextPageWithLayout } from "../_app";
import PortableText from "react-portable-text";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";

interface Props {
  post: Post;
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
  const post: Post = await sanityClient.fetch(postQuery, {
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
  console.log(post.body);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      {post && (
        <div>
          {/* Banner image */}
          <div className="relative w-full h-40 mb-5">
            <Image
              className="object-cover"
              src={urlFor(post.mainImage).url()}
              alt=""
              layout="fill"
            />
          </div>

          {/* Blog contents */}
          <article className="px-5 py-5 flex flex-col gap-10 max-w-3xl mx-auto">
            <PostHeader post={post} />

            <PostBody post={post} />
          </article>
        </div>
      )}
    </>
  );
};

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostPage;
