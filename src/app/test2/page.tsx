"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

type Review = {
  id: number;
  title: string;
  genre: string;
  score: number;
  description: string;
  thumbnail_url: string;
};

export default function Test2Page() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase.from("reviews").select("*");
      if (error) {
        console.error("読み込みエラー:", error);
      } else {
        setReviews(data as Review[]);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen space-y-4">
      <h1 className="text-2xl font-bold mb-4">🖼️ サムネイル付きレビュー</h1>
      {reviews.map((review) => (
        <div key={review.id} className="bg-white text-black p-4 rounded shadow flex gap-4">
          <div className="w-1/2 h-[200px] relative">
            <Image
              src={review.thumbnail_url}
              alt={`${review.title}のサムネイル`}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{review.title}</h2>
            <p className="italic text-sm text-gray-500">
              ジャンル: {review.genre} | スコア: {review.score}
            </p>
            <p>{review.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
