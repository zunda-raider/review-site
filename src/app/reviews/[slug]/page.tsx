import { supabase } from "@/lib/supabase";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function ReviewPage({ params }: Props) {
  const { slug } = params;

  const { data: review, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!review || error) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">『{review.title}』レビュー</h1>
        <p className="text-sm text-gray-400 mb-6">ジャンル: {review.genre} / スコア: {review.score}</p>

        {/* classNameはdivに適用！ */}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{review.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
