import type { Metadata } from "next";
import { ImageViewer } from "@/components/image-viewer";
import { assetPath } from "@/lib/portfolio";
import "../../styles.css";
import "./migration.css";

export const metadata: Metadata = {
  title: { default: "송종화 포트폴리오", template: "%s · 송종화 포트폴리오" },
  description:
    "프론트엔드 개발자 송종화의 프로젝트, 학습 여정과 활동을 기록한 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href={assetPath("/assets/favicon-coffee.ico")} sizes="32x32" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ImageViewer>{children}</ImageViewer>
      </body>
    </html>
  );
}
