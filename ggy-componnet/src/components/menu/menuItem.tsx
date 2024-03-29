import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index?: string,
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties,
}

const MenuItem: FC<MenuItemProps> = (porps) => {
  const { index, disabled, className, style, children } = porps
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', classNames, {
    'is-disabled': disabled,
    'is-active': context.index == index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  )
}


MenuItem.displayName = 'MenuItem'

export default MenuItem