"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const ArchiveContext = createContext({
  request: { query: "", revision: 0 },
  search: (_query: string) => {},
});
export const useArchiveSearch = () => useContext(ArchiveContext);

export function LearningArchiveScope({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState({ query: "", revision: 0 });
  return (
    <ArchiveContext.Provider
      value={{
        request,
        search: (query) =>
          setRequest((value) => ({ query, revision: value.revision + 1 })),
      }}
    >
      {children}
    </ArchiveContext.Provider>
  );
}
