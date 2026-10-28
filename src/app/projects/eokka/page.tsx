import type { Metadata } from "next";
import EokkaContent from "@/content/eokka";
export const metadata: Metadata = {
  title: "EOKKA",
  description:
    "복수 종목 입력과 투자 데이터를 검증·시각화해 목표 도달 시나리오로 보여주는 EOKKA 프로젝트",
};
export default function EokkaPage() {
  return <EokkaContent />;
}
