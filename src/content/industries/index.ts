import { restaurants } from './restaurants'
import {
  smallBusiness,
  shops,
  freelancers,
  construction,
  clothing,
} from './others'

export const industries = [
  restaurants,
  smallBusiness,
  shops,
  freelancers,
  construction,
  clothing,
] as const

export const industryMap = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry]),
) as Record<string, (typeof industries)[number]>

export type IndustrySlug = (typeof industries)[number]['slug']

export function getIndustry(slug: string) {
  return industryMap[slug] ?? null
}

export { restaurants, smallBusiness, shops, freelancers, construction, clothing }
