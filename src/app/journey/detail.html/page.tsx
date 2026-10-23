"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects, projectPath } from "@/lib/portfolio";

// Old bookmarks remain usable after static export (no server redirects required).
export default function LegacyJourneyPage() {
  const [valid, setValid] = useState<boolean | null>(null);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    if (id && projects.some((item) => item.id === id))
      window.location.replace(
        `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${projectPath(id)}`,
      );
    else setValid(false);
  }, []);
  return (
    <main className="container section">
      <h1>
        {valid === false
          ? "학습 기록을 찾을 수 없습니다."
          : "학습 기록으로 이동합니다."}
      </h1>
      <Link href="/#journey">학습 여정으로 돌아가기</Link>
    </main>
  );
}
