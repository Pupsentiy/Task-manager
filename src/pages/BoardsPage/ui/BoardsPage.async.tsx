import { lazy } from 'react'

export const BoardsPageAsync = lazy(
    async () => await import('./BoardsPage.tsx')
)

