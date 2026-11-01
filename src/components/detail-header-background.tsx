import { assetPath } from "@/lib/portfolio";

export function DetailHeaderBackground({ src }: { src: string }) {
  return (
    <div className="detail-header-background" aria-hidden="true">
      <img src={assetPath(src)} alt="" decoding="async" />
    </div>
  );
}
