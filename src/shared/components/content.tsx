import { mergeClass } from "@shared/libs";
import type * as React from "react";

type ArticleContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article
      className={`${mergeClass("prose prose-a:text-link prose-li:leading-7 prose-p:leading-7", className)}`}
    >
      {children}
    </article>
  );
}
