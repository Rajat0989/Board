"use client"

import { useOrganizationList, useOrganization } from "@clerk/nextjs"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Hint } from "@/components/hint"

interface ItemProps {
  id: string
  name: string
  imageURL: string
}

export const Item = ({ id, name, imageURL }: ItemProps) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const onClick = () => {
    if (!setActive) return

    setActive({ organization: id })
  }
  return (
    <div className="aspect-square relative">
      <Hint 
        label={name}
        side="right"
        align="start"
        sideOffset={20}
      >
        <Image
          fill
          alt={name}
          src={imageURL}
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  )
}
