import type { LearningProject } from "./portfolio";

export function searchProjects(items: LearningProject[], search: string) {
  const query = search.trim().toLocaleLowerCase();
  return items
    .filter(
      (item) =>
        item.id !== "eokka" &&
        (!query ||
          [
            item.title,
            item.name,
            item.purpose,
            item.group,
            ...item.stack,
            ...item.learned,
          ]
            .join(" ")
            .toLocaleLowerCase()
            .includes(query)),
    )
    .sort(
      (a, b) =>
        b.created.localeCompare(a.created) || a.title.localeCompare(b.title),
    );
}
