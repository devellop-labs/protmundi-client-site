interface ACFFields {
  [key: string]: any;
}

// Define the Article type based on the provided data structure
interface Article {
  acf: {
    em_destaque: boolean;
  }; // Assuming ACF fields, if needed
  author: number; // Author ID
  categories: number[]; // Array of category IDs
  class_list: string[]; // List of CSS classes
  comment_status: "open" | "closed"; // Comment status
  content: {
    rendered: string; // HTML content
    protected: boolean; // Indicates if content is protected
  };
  date: string; // Post date in ISO format
  date_gmt: string; // Post date in GMT
  excerpt: {
    rendered: string; // Excerpt content
    protected: boolean; // Indicates if excerpt is protected
  };
  featured_media: number; // ID of the featured media
  format: string; // Post format
  guid: {
    rendered: string; // Global Unique Identifier (URL)
  };
  id: number; // Post ID
  link: string; // URL to the post
  meta: {
    _acf_changed: boolean; // Indicates if ACF fields have changed
    footnotes: string; // Footnotes if any
  };
  modified: string; // Last modified date in ISO format
  modified_gmt: string; // Last modified date in GMT
  ping_status: "open" | "closed"; // Ping status
  slug: string; // Post slug
  status: "publish" | "draft" | "pending" | "private"; // Post status
  sticky: boolean; // Indicates if the post is sticky
  tags: any[]; // Array of tags
  template: string; // Post template
  title: {
    rendered: string; // Post title
  };
  type: "post"; // Type of the content
}
