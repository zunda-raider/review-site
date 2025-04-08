"use client"; // クライアントコンポーネントにしたい場合

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <header className="flex items-center justify-between p-6 bg-gray-900 text-white border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">画面の向こうにいるなにか</h1>
        <nav className="flex gap-2 items-center">
          <button className="header-btn">新作レビュー</button>
          <button className="header-btn">高評価</button>
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
            <li>
              <Link href="/genre/sf">SF映画</Link>
            </li>
            <li>
              <Link href="/genre/horror">ホラー映画</Link>
            </li>
            <li>
              <Link href="/genre/action">アクション映画</Link>
            </li>
            <li>
              <Link href="/genre/other">アニメ</Link>
            </li>
            <li>
              <Link href="/genre/other">分類不能</Link>
            </li>
            <li>
              <Link href="/genre/other">考察</Link>
            </li>
          </ul>
        </aside>

        {/* 右側：記事一覧 */}
        <section className="w-3/4 space-y-4">
          <h2 className="text-lg font-bold">最新レビュー</h2>
          <div className="bg-white text-black p-4 rounded shadow">
            <h3 className="text-xl font-semibold">『ミッドサマー』レビュー</h3>
            <p>明るいのに怖すぎる…スウェーデンの田舎で起こる悪夢の祝祭。</p>
          </div>
          <div className="bg-white text-black p-4 rounded shadow">
            <h3 className="text-xl font-semibold">『ヘレディタリー』レビュー</h3>
            <p>家系に潜む呪い。静かな恐怖がじわじわと心を侵す。</p>
          </div>
        </section>
      </main>
    </div>
  );
}
