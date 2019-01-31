import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isSidebarExpanded: true
  };

  sidebarExpanded = () => (
    <div className="sidebar">
      <span
        role="presentation"
        onClick={() => this.setState({ isSidebarExpanded: false })}
      >
        사이드바 접기
      </span>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        <li>Menu Item 4</li>
        <li>Menu Item 5</li>
      </ul>
    </div>
  );

  sidebarCollapsed = () => (
    <div className="sidebar collapsed">
      <span
        role="presentation"
        onClick={() =>
          this.setState({
            isSidebarExpanded: true
          })
        }
      >
        펼치기
      </span>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );

  render() {
    const { isSidebarExpanded } = this.state;

    return (
      <div className="app">
        {isSidebarExpanded && this.sidebarExpanded()}
        {isSidebarExpanded || this.sidebarCollapsed()}
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan
            sit amet nulla facilisi. Sed faucibus turpis in eu mi bibendum
            neque. Egestas quis ipsum suspendisse ultrices gravida dictum fusce
            ut placerat. Semper eget duis at tellus at urna condimentum mattis.
            Ipsum a arcu cursus vitae congue. Cras pulvinar mattis nunc sed
            blandit libero volutpat sed. Turpis massa sed elementum tempus
            egestas sed.
          </p>
          <p>
            Pretium fusce id velit ut tortor. Sit amet justo donec enim diam. Et
            tortor consequat id porta nibh venenatis cras sed. Nec ullamcorper
            sit amet risus nullam eget felis eget. Ultrices sagittis orci a
            scelerisque purus semper eget duis at. Consectetur libero id
            faucibus nisl tincidunt eget nullam. Sed blandit libero volutpat sed
            cras ornare arcu dui. Urna cursus eget nunc scelerisque viverra
            mauris in aliquam sem. Ante in nibh mauris cursus mattis molestie a.
          </p>
          <p>
            In eu mi bibendum neque egestas congue quisque egestas. Dictum at
            tempor commodo ullamcorper a lacus vestibulum sed. Venenatis tellus
            in metus vulputate eu scelerisque felis imperdiet proin. Elit
            scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
            tristique. Volutpat ac tincidunt vitae semper quis lectus nulla at.
            Id interdum velit laoreet id donec. Hac habitasse platea dictumst
            quisque sagittis. Vitae congue mauris rhoncus aenean vel elit
            scelerisque.
          </p>
          <p>
            Eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat
            commodo sed egestas egestas. Facilisis magna etiam tempor orci eu
            lobortis elementum. Nam aliquam sem et tortor consequat id porta
            nibh. Sagittis aliquam malesuada bibendum arcu vitae elementum
            curabitur. In pellentesque massa placerat duis. Volutpat est velit
            egestas dui id ornare arcu odio ut. Nunc non blandit massa enim nec
            dui nunc mattis enim. Enim ut sem viverra aliquet eget sit amet
            tellus cras. Vitae congue eu consequat ac felis donec et. Urna duis
            convallis convallis tellus id interdum.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
