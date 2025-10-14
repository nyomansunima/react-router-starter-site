import { mergeClass } from "@shared/libs"
import * as React from "react"

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

export function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <article
      className={`${mergeClass("prose prose-p:leading-7 prose-li:leading-7 prose-a:text-link", className)}`}
    >
      {children}
    </article>
  )
}
