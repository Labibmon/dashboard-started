import { IconAssetType } from "@/components/commons/icons/icon-assets"

export type LinkItemDataType = {
    label: string
    link: string
    icon: IconAssetType
}

export type LinkItemsType = {
    data: LinkItemDataType[]
}