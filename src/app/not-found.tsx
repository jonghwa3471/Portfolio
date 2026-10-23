import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container section">
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소를 확인하거나 홈에서 프로젝트를 선택해 주세요.</p>
      <Link href="/">포트폴리오로 돌아가기</Link>
    </main>
  );
}
