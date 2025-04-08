"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import ReactMarkdown from "react-markdown";

type Review = {
  id: number;
  title: string;
  genre: string;
  score: number;
  description: string;
  body: string;
};

export default function MarkdownReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase.from("reviews").select("*");
      if (!error && data) setReviews(data as Review[]);
    };
    fetchReviews();
  }, []);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Markdown対応レビュー</h1>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white text-black p-6 rounded mb-6 shadow"
        >
          <h2 className="text-2xl font-bold mb-2">{review.title}</h2>
          <p className="text-sm text-gray-600 mb-2">
            ジャンル: {review.genre} / スコア: {review.score}
          </p>
          <p className="mb-2 text-gray-800">{review.description}</p>
          <hr className="my-4" />
          <ReactMarkdown
            components={{
             img: ({ node, ...props }) => (
              <img
               {...props}
               className="max-w-full w-[300px] h-auto mr-auto my-4 rounded shadow"
               alt={props.alt || "image"}
             />
            ),
            h1: ({ node, ...props }) => (
             <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />
            ),
            h2: ({ node, ...props }) => (
             <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
             <p className="text-base mb-2 leading-relaxed" {...props} />
            ),
            li: ({ node, ...props }) => (
             <li className="list-disc ml-6 mb-1" {...props} />
            ),
            a: ({ node, ...props }) => (
             <a className="text-blue-600 underline" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
             <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 mb-2" {...props} />
            ),
          }}
        >
          {review.body}
         </ReactMarkdown>
        </div>
      ))}
    </div>
  );
}
