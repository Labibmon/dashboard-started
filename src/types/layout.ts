
import { ReactNode } from "react"
import { MetaSeo } from "@/types/seo"

export enum LayoutEnum {
    sidebar = 'sidebar',
    headerFooter = 'header-footer'
}

export type LayoutType = LayoutEnum | undefined | string

export type LayoutPropType = {
    title?: string,
    lang?: string,
    layoutType?: LayoutType,
    description?: string,
    author?: string,
    meta?: ConcatArray<MetaSeo>,
    children?: ReactNode
  }