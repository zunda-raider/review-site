import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ReviewPage({ params }: { params: any }) {
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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{review.title}</h1>
      <p className="mb-4 text-gray-400">{review.description}</p>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: review.body }} />
    </div>
  );
}
