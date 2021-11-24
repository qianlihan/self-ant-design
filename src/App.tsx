import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>Hello</Button>
        <Button size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Primary}>Hello</Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Large}
          href="https://www.baidu.com"
        >
          Hello
        </Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Large} disabled>
          Hello
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Hello
        </Button>
        <Menu defaultIndex="0" mode="horizontal">
          <MenuItem index="1">item 1</MenuItem>
          <MenuItem index="2">item 2</MenuItem>
          <MenuItem index="3">item 3</MenuItem>
          <MenuItem index="4" disabled>
            item 4
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>
        <Menu defaultIndex="0">
          <MenuItem index="1">item 1</MenuItem>
          <MenuItem index="2">item 2</MenuItem>
          <MenuItem index="3">item 3</MenuItem>
          <MenuItem index="4" disabled>
            item 4
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>
        <Icon icon="coffee" theme="danger"></Icon>
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
