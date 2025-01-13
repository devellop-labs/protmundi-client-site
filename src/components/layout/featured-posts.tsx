import api from "@/services/api";
import { getArticles } from "@/services/articles";
import React, { useEffect, useState } from "react";

// Define a type for the WordPress post
type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  featured_media: number;
};

export default function FeaturedPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from WordPress API
  useEffect(() => {
    async function fetchPosts() {
      try {
        const { articles, totalCount } = await getArticles({
          params: { per_page: 3 },
        });
        setPosts(articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="featured-posts grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="post bg-white p-4 shadow-md rounded">
          <h2 className="text-lg font-bold">
            <a
              href={post.link}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </h2>
          <div
            className="excerpt mt-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <a href={post.link} className="text-primary mt-4 block">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}
