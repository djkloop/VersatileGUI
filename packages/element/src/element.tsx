import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import Draggable from 'vuedraggable';
import VersatileGUICore, { createComponent, createDesignComponent } from 'versatile-core';
import Config from 'versatile-config';
import _ from 'lodash';
import { Map } from 'immutable';
import './plugin';
import '../../../src/store';
import './style/ver-style-ele.styl';
import 'normalize.css';

import RegisterComponent from './data/registerComponents';
import { VNode } from 'vue';
import { uniqueID } from 'versatile-utils';

export const COMPONENT_NAME = 'VersatileGUIEle';

interface TaskProps {
  name: string;
  tasks?: TaskProps[];
}

// data
const message: TaskProps[] = [

];

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUIEle extends tsx.Component<{}> {
  public message: TaskProps[] = message;

  private dragTag: string = 'ul';
  private dragGroup: any = { name: 'widget', pull: 'clone', put: false };
  private dragGhostClass: string = 'ghost';

  /**
   * 渲染每一个左侧组件的内部单个组件辅助函数
   *
   * @param {Array} components 生成的Vnode
   * @param { String } type 组件的类型
   */
  public createComponents(components: any, type: string = '默认'): VNode {
    return (
      <div class={'ver_aside_component_list'}>
        <div class={'ver_aside_component_list_title'}>
          {type}组件
        </div>
        <Draggable
          tag={this.dragTag}
          list={components}
          group={this.dragGroup}
          sort={false}
          forceFallback={true}
          ghostClass={this.dragGhostClass}
          clone={this.handleClone}
          class={'ver_aside_component_list_box'}
        >
          {
            components.map((item: any, index: number) => {
              return (
                <li
                  class={'ver_aside_component_list_item'}
                  data-item={JSON.stringify(item)}
                  data-index={index + '_' + item.name}
                >
                  <a>{item.name}</a>
                </li>
              );
            })
          }
        </Draggable>
      </div>
    );
  }

  /**
   *  渲染左侧辅助函数
   */
  public createRegisterComponent(): VNode[] {
    const Componrnts = Map(RegisterComponent);
    const layoutComponents = Componrnts.get('layoutComponents');
    const assistComponents = Componrnts.get('assistComponents');
    const basicComponents = Componrnts.get('basicComponents');
    const imgComponents = Componrnts.get('imgComponents');
    const components = [];
    // 如果存在布局组件
    if (layoutComponents) {
      components.push(this.createComponents(layoutComponents, '布局'));
    }

    // 如果存在基础组件
    if (basicComponents) {
      components.push(this.createComponents(basicComponents, '基础'));
    }

    // 如果存在图片组件
    if (imgComponents) {
      components.push(this.createComponents(imgComponents, '图片'));
    }

    // 如果存在辅助组件
    if (assistComponents) {
      components.push(this.createComponents(assistComponents, '辅助'));
    }
    return components;
  }

  public handleChange(e: any) {
    // console.log('emit-change', e);
  }

  // 添加进左边的事件
  public handleAdd(e: any) {
    // console.log('emit-add', e);
  }

  // clone之前添加一个only-key
  public handleClone(v: any) {
    v.id = uniqueID() + '_' + Date.now();
    return _.cloneDeep(v);
  }

  private created() {
    this._init_lifecycle();
  }

  private render() {
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
              <span>
                VersatileGUI
              </span>
            </a>
          </h1>
        </el-header>
        <el-container class={'ver_main'}>
          <el-aside class={'ver_main_aside_left'} style={{width: Config.LAYOUT.ASIDE_WIDTH}}>
            {this.createRegisterComponent()}
          </el-aside>
          <el-main style={{ padding: '0 10px' }}>
            {/* 把当前库的Draggable对象传进去不要在core里面重新安装一遍vuedraggable包两个对象并不能通过group中的name属性找到 */}
            <VersatileGUICore
              draggable={Draggable}
              theme={'element'}
              dragGroup={this.dragGroup}
              dragGhostClass={this.dragGhostClass}
              dragTag={this.dragTag}
              listData={this.message}
              onChange={this.handleChange}
              onAdd={this.handleAdd}
            />
          </el-main>
          <el-aside class={'ver_main_aside_right'} style={{width: Config.LAYOUT.ASIDE_WIDTH}}>side-right</el-aside>
        </el-container>
      </el-container>
    );
  }

  // 初始化core里面的生命周期函数
  private _init_lifecycle() {
    createComponent(1);
    createDesignComponent(2);
    // tslint:disable-next-line:no-console
    console.log('core生命周期函数初始化完毕');
  }
}
