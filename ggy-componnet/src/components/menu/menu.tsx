import React, { FC, CSSProperties, useState, createContext, Children } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: string,
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  onSelect?: (selectedIndex: string) => void,
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string,
  onSelect?: (selectedIndex: string) => void,
  mode?: MenuMode,
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: "0" })

export const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('viking-menu', 'className', {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElemnet = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElemnet.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElemnet, { index: index.toString() })
      } else {
        console.error('Warning: Not MenuItem')
      }
    })
  }

  return (
    <ul className={classes} style={style} >
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: "0",
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu