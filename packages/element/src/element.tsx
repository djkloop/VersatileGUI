import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import VersatileGUICore, { createComponent, createDesignComponent } from 'versatile-core';
import Config from 'versatile-config';

import './plugin';
import './style/ver-style-ele.styl';
import 'normalize.css';

export const COMPONENT_NAME = 'VersatileGUIEle';

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUIEle extends tsx.Component<{}> {
  public render() {
    createComponent(1);
    createDesignComponent(2);
    return (
        <el-container>
          <el-header class='ver-theme-ele ver_container'>
            我是头部
          </el-header>
          <el-container>
            <el-aside style={{ width: Config.LAYOUT.ASIDE_WIDTH }}>side-left</el-aside>
            <el-main>
              <VersatileGUICore theme={'yeah'}/>
            </el-main>
            <el-aside style={{ width: Config.LAYOUT.ASIDE_WIDTH }}>side-right</el-aside>
          </el-container>
        </el-container>
    );
  }
}
