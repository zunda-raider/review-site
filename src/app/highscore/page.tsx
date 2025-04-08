import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

export default async function HighScorePage() {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("id, title, slug, description, thumbnail_url, score")
    .gte("score", 8); // スコアが8以上だけ取得

  if (!reviews || error || reviews.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">⭐ 高評価レビュー</h1>
        <p>まだ高評価のレビューはありません。</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">⭐ 高評価レビュー（スコア8以上）</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <Link
            key={review.id}
            href={`/reviews/${review.slug}`}
            className="bg-white text-black p-4 rounded shadow hover:bg-gray-100 transition"
          >
            <div className="flex gap-4">
              <Image
                src={review.thumbnail_url}
                alt={review.title}
                width={120}
                height={80}
                className="rounded object-cover h-20 w-auto"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1">『{review.title}』</h3>
                <p className="text-sm text-gray-700">{review.description}</p>
                <p className="text-xs text-gray-500 mt-1">スコア: {review.score}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
