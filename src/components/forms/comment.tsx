// components/CommentForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentValidator, CommentFormInputs } from "@/validators/comment";
import { postComment } from "@/services/comments";

const CommentForm: React.FC<{ articleId: number }> = ({ articleId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormInputs>({
    resolver: zodResolver(CommentValidator),
  });

  const onSubmit: SubmitHandler<CommentFormInputs> = async ({
    author_email,
    author_name,
    content,
  }) => {
    try {
      await postComment({
        articleId,
        author_name,
        author_email,
        content,
      });
      alert("Comment posted successfully!");
      // Optionally, you might want to reset the form here
    } catch (err) {
      alert("Failed to post comment");
      console.error(err);
    }
  };

  return (
    <div className="p-6 md:p-24 bg-white rounded-[20px] flex flex-col gap-12">
      <h1 className="text-dark font-[700] text-[32px]">Comente</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full rounded-[20px]"
      >
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col gap-2 md:w-1/2 w-full">
            <div>
              <input
                placeholder="Nome"
                id="name"
                type="text"
                {...register("author_name")}
                className="mt-1 block w-full rounded-md shadow-sm  p-4 text-dark border-[#c3deea] border-[2px] outline-none focus-within:border-primary"
              />
              {errors.author_name && (
                <p className="text-red-600 text-sm">
                  {errors.author_name.message}
                </p>
              )}
            </div>

            <div>
              <input
                id="email"
                type="email"
                {...register("author_email")}
                placeholder="E-mail"
                className="mt-1 block w-full rounded-md shadow-sm p-4 text-dark border-[#c3deea] border-[2px] outline-none focus-within:border-primary"
              />
              {errors.author_email && (
                <p className="text-red-600 text-sm">
                  {errors.author_email.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <textarea
              placeholder="Mensagem"
              id="content"
              {...register("content")}
              className="mt-1 block w-full rounded-md shadow-sm p-4 text-dark border-[#c3deea] border-[2px] outline-none focus-within:border-primary"
            />
            {errors.content && (
              <p className="text-red-600 text-sm">{errors.content.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-2 px-12 text-primary border-[2px] border-primary rounded-full hover:bg-primary hover:text-white hover:shadow-button transition-all"
          >
            {isSubmitting ? "Publicando..." : "Publicar comentário"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
