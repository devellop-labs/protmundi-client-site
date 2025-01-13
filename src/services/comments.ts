import { CommentFormInputs } from "@/validators/comment";
import api from "./api";

export async function postComment({
  articleId,
  ...data
}: CommentFormInputs & {
  articleId: number;
  author_name: string;
  author_email: string;
  content: string;
}) {
  ("");
  api.post("/comments", {
    ...data,
    article: articleId,
  });
}
