import HomeContent from "@/content/home";
import { LearningArchiveScope } from "@/components/learning-archive-scope";
export default function HomePage() {
  return (
    <LearningArchiveScope>
      <HomeContent />
    </LearningArchiveScope>
  );
}
