import { createContext, useContext, type ReactNode } from 'react'
import type { IndustryContent } from '../content/types'

const IndustryContext = createContext<IndustryContent | null>(null)

export function IndustryProvider({
  content,
  children,
}: {
  content: IndustryContent
  children: ReactNode
}) {
  return (
    <IndustryContext.Provider value={content}>{children}</IndustryContext.Provider>
  )
}

export function useIndustry(): IndustryContent {
  const context = useContext(IndustryContext)
  if (!context) {
    throw new Error('useIndustry must be used within an IndustryProvider')
  }
  return context
}
