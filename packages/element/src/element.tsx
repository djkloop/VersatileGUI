import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
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
        <div class='ver-'>

        </div>
        <VersatileGUICore theme='2222' />
      </div>
    );
  }
}
