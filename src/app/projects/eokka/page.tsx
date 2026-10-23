import type { Metadata } from "next";
import EokkaContent from "@/content/eokka";
export const metadata: Metadata = {
  title: "EOKKA",
  description:
    "투자 시나리오 서비스 EOKKA의 개발 배경, 문제 해결과 AI 활용 경험",
};
export default function EokkaPage() {
  return <EokkaContent />;
}
