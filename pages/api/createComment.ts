import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../lib/sanity";
import { createClient } from "next-sanity";

// interface Data {
//   [key: string]: string;
// }

const client = createClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid request" });
  }

  const { _id, name, email, comment, slug } = req.body;
  const doc = {
    _type: "comment",
    post: {
      _type: "reference",
      _ref: _id,
    },
    name,
    email,
    comment,
  };
  // console.log(doc);
  try {
    await client.create(doc);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Could not submit comment", error });
  }
  await res.revalidate(`/post/${slug}`);
  return res.status(200).json({ message: "Comment submitted" });
};

export default handler;
