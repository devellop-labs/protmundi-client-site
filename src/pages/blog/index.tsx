import Head from "next/head";
import BlogPageComponent from "@/components/pages/blog/component";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Protmundi - Blog</title>
      </Head>
      <BlogPageComponent />
    </>
  );
}
