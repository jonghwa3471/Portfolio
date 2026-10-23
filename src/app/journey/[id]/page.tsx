import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LearningDetail } from "@/components/learning-detail";
import { learningProjects } from "@/lib/portfolio";

export const dynamicParams = false;
export function generateStaticParams() {
  return learningProjects.map((item) => ({ id: item.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = learningProjects.find((project) => project.id === id);
  return {
    title: item?.title || "학습 기록을 찾을 수 없습니다",
    description: item?.purpose,
  };
}
export default async function JourneyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = learningProjects.find((project) => project.id === id);
  if (!item) notFound();
  return <LearningDetail item={item} />;
}
