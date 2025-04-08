export default function NewReleasesPage() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">🆕 新作映画情報</h1>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎥 劇場公開予定</h2>
          <ul className="list-disc list-inside text-lg">
            <li>『怪異村の叫び』 - 2025年5月公開予定</li>
            <li>『暗闇から来るモノ』 - 2025年6月全国公開</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📀 DVD・Blu-ray</h2>
          <ul className="list-disc list-inside text-lg">
            <li>『ミッドサマー・ディレクターズカット』 - 2025年4月リリース</li>
            <li>『呪われた湖の家』 - 発売中</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold mb-2">🌐 配信情報</h2>
          <ul className="list-disc list-inside text-lg">
            <li>『人喰い森の晩餐』 - Netflix独占配信中</li>
            <li>『夜明けの怪談』 - Amazon Primeにて配信中</li>
          </ul>
        </section>
      </div>
    );
  }
  