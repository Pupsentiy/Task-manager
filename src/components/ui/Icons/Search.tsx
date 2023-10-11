import { type FC, type HTMLAttributes } from 'react'
import { ReactComponent as Icon } from 'assets/icons/search.svg'

export const Search: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
        <Icon {...props} />
  )
}
