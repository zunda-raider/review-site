import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function GenrePage({ params }: { params: any }) {
  const genre = params.genre;

  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("id, title, slug, description, thumbnail_url")
    .eq("genre", genre);

  if (!reviews || error || reviews.length === 0) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">{genre.toUpperCase()} 映画</h1>
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
