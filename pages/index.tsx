import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { indexQuery } from "../lib/queries";
import { sanityClient, urlFor } from "../lib/sanity";
import { Post } from "../typings";
import { NextPageWithLayout } from "./_app";

interface Props {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await sanityClient.fetch(indexQuery);
  console.log(posts);
  console.log(urlFor(posts[0].author.image).url());

  return {
    props: {
      posts,
    },
  };
};

const Home: NextPageWithLayout<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <div key={post._id}>
            <PostPreview post={post} />
          </div>
        ))}
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout hasHero>{page}</Layout>;
};

export default Home;
