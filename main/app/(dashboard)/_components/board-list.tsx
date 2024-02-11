"use client"

import { EmptySearch } from "./empty-search"
import { EmptyFavourites } from "./empty-favourites"
import { EmptyBoard } from "./empty-board"

interface BoardListProps {
  orgId: string
  query: {
    search?: string
    favourites?: string
  }
}

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = []
    if (!data?.length && query.search) {
        return(
            <EmptySearch/>
        )
    }

    if(!data?.length && query.favourites) {
        return(
            <EmptyFavourites/>
        )
    }

    if(!data?.length) {
        return(
            <EmptyBoard/>
        )
    }

  return (
    <div>
        {JSON.stringify(query)}
    </div>
  )
}
