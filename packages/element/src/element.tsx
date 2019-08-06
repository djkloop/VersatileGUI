import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import VersatileGUICore, { createComponent, createDesignComponent } from 'versatile-core';
import Config from 'versatile-config';
import './plugin';
import './style/ver-style-ele.styl';
import 'normalize.css';

import RegisterComponent from './data/registerComponents';
import { VNode } from 'vue';

export const COMPONENT_NAME = 'VersatileGUIEle';

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUIEle extends tsx.Component<{}> {

  /**
   * 渲染每一个左侧组件的内部单个组件辅助函数
   *
   * @param {Array} components 生成的Vnode
   */
  public createComponents(components): VNode[] {
    let temp = [];
    if (Array.isArray(components)) {
      temp = components.map((item, index) => {
        return <div>{item.name}</div>;
      });
    }
    return temp;
  }

  /**
   *  渲染左侧辅助函数
   */
  public createRegisterComponent() {
    const {layoutComponents, assistComponents, basicComponents, imgComponents} = RegisterComponent;
    const components = [];

    // 如果存在布局组件
    if (layoutComponents) {
      components.push(this.createComponents(layoutComponents));
    }

    // 如果存在基础组件
    if (basicComponents) {
      components.push(this.createComponents(basicComponents));
    }

    // 图片组件
    if (imgComponents) {
      components.push(this.createComponents(imgComponents));
    }

    // 辅助最贱
    if (assistComponents) {
      components.push(this.createComponents(assistComponents));
    }
    return components;
  }

  public render() {
    createComponent(1);
    createDesignComponent(2);
    return (
      <el-container class='ver_container ver_theme_ele'>
        <el-header class='ver_ele_header'>
          <h1>
            <a href='/'>
              <img
                class={'ver_ele_header_nav_logo'}
                width={146} height={38}
                src={require('./public/element-logo.svg')}
              />
            </a>
          </h1>
        </el-header>
        <el-container class={'ver_main'}>
          <el-aside class={'ver_main_aside_left'} style={{width: Config.LAYOUT.ASIDE_WIDTH}}>
            {this.createRegisterComponent()}
          </el-aside>
          <el-main>
            <VersatileGUICore theme={'yeah'}/>
          </el-main>
          <el-aside class={'ver_main_aside_right'} style={{width: Config.LAYOUT.ASIDE_WIDTH}}>side-right</el-aside>
        </el-container>
      </el-container>
    );
  }
}
