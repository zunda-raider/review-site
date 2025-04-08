"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Review = {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail_url: string;
};

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, title, slug, description, thumbnail_url")
        .limit(4); // トップページには数件だけ表示
      if (!error && data) setReviews(data as Review[]);
    };
    fetchReviews();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <header className="flex items-center justify-between p-6 bg-gray-900 text-white border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">画面の向こうにいるなにか</h1>
        <nav className="flex gap-2 items-center">
        <Link href="/newest">
            <span className="header-btn">新作レビュー</span>
          </Link>
          <Link href="/highscore">
            <span className="header-btn">高評価</span>
          </Link>
          <Link href="/new">
            <span className="header-btn">新作情報</span>
          </Link>
          <input
            type="text"
            placeholder="🔍検索"
            className="rounded px-2 py-1 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </nav>
      </header>

      {/* メイン画像 */}
      <div>
        <Image
          src="/main1.png"
          alt="ホラー感のあるビジュアル"
          width={1600}
          height={400}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* 本文部分（2カラム） */}
      <main className="flex flex-1 p-4 gap-6 bg-gray-900 text-white">
        {/* 左側：ジャンル */}
        <aside className="w-1/4 space-y-2">
          <h2 className="text-lg font-bold">ジャンル</h2>
          <ul className="space-y-1">
            <li><Link href="/genre/sf">SF映画</Link></li>
            <li><Link href="/genre/horror">ホラー映画</Link></li>
            <li><Link href="/genre/action">アクション映画</Link></li>
            <li><Link href="/genre/anime">アニメ</Link></li>
            <li><Link href="/genre/other">分類不能</Link></li>
            <li><Link href="/genre/think">考察</Link></li>
          </ul>
        </aside>

        {/* 右側：記事一覧（Supabaseから取得したレビュー） */}
        <section className="w-3/4 space-y-4">
          <h2 className="text-lg font-bold">最新レビュー</h2>
          {reviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.slug}`}
              className="block bg-white text-black p-4 rounded shadow hover:bg-gray-100 transition"
            >
              <div className="flex gap-4">
                <Image
                  src={review.thumbnail_url}
                  alt={review.title}
                  width={120}
                  height={80}
                  className="rounded object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1">『{review.title}』レビュー</h3>
                  <p className="text-sm text-gray-700">{review.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
