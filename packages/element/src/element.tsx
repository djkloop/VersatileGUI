import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import './plugin';

import './style/ver-style-ele.styl';
import VersatileGUICore, { createComponent, createDesignComponent } from 'versatile-core';
export const COMPONENT_NAME = 'VersatileGUIEle';

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUIEle extends tsx.Component<{}> {
  public render() {
    createComponent(1);
    createDesignComponent(2);
    return (
      <div class='ver-theme-ele ver_container'>
        {/* <header class='ver_header'>
        </header>
        <main class='ver_content'>
          <VersatileGUICore theme={'yeah'}/>
        </main>
        <footer class='ver_footer'>

        </footer> */}
      </div>
    );
  }
}
