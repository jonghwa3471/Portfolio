"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function LearningBackLink() {
  const router = useRouter();
  return (
    <Link className="back-link" href="/#journey" onClick={(event) => {
      try {
        if (sessionStorage.getItem("journey-list-state")) {
          event.preventDefault();
          router.push("/", { scroll: false });
        }
      } catch {}
    }}>
      ← 학습 여정으로 돌아가기
    </Link>
  );
}
