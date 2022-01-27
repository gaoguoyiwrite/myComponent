import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button, { ButtonType, ButtonSize } from './components/Buton/button'
import Menu from './components/menu/menu'
import MenuItem from './components/menu/menuItem';
import SubMenu from './components/menu/subMenu'
import Icon from './components/icon/icon'

library.add(fas)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="primary" size="2x" />
        <Menu defaultIndex={"0"} onSelect={(index) => { }} mode={"vertical"} defaultOpenSubMenus={['2']}>
          <MenuItem >
            cool link
          </MenuItem >
          <MenuItem disabled>
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link3
          </MenuItem>
        </Menu>
        <Button>Hello</Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>small danger</Button>
        <Button btnType={ButtonType.Link} href="http://baidu.com">Baidu Link</Button>
        <Button btnType={ButtonType.Link} disabled href="http://baidu.com">Disabled Link</Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
