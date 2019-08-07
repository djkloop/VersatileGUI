import { Component } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import Draggable from 'vuedraggable';
import VersatileGUICore, { createComponent, createDesignComponent } from 'versatile-core';
import Config from 'versatile-config';
import './plugin';
import './style/ver-style-ele.styl';
import 'normalize.css';

import RegisterComponent from './data/registerComponents';
import { VNode } from 'vue';

export const COMPONENT_NAME = 'VersatileGUIEle';

interface TaskProps {
  name: string;
  tasks?: TaskProps[];
}

// data
const message: TaskProps[] = [
  {
    name: 'task 2',
    tasks: [],
  },
  {
    name: 'task 1',
    tasks: [],
  },
  {
    name: 'task 3',
    tasks: [
      {
        name: 'task 4',
        tasks: [],
      },
    ],
  },
  {
    name: 'task 5',
    tasks: [],
  },
];

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUIEle extends tsx.Component<{}> {
  public message: TaskProps[] = message;

  /**
   * 渲染每一个左侧组件的内部单个组件辅助函数
   *
   * @param {Array} components 生成的Vnode
   */
  public createComponents(messageList): VNode {
    return (
      <Draggable list={messageList} tag={'ul'} group={{name: 'g1'}}>
      {
        messageList.map((item, index) => {
          if (item.tasks && item.tasks.length > 0) {
            return (
              <li key={item.name + '_' + index}>
                <p>{item.name}</p>
                {this.createComponents(item.tasks)}
              </li>
            );
          } else {
            return (
              <li key={item.name + '_' + index}>
                <p>{item.name}</p>
              </li>
            );
          }
        })
      }
    </Draggable>
    );
  }

  /**
   *  渲染左侧辅助函数
   */
  public createRegisterComponent() {
    const {layoutComponents, assistComponents, basicComponents, imgComponents} = RegisterComponent;
    const components = [];

    // 如果存在布局组件
    if (layoutComponents) {
      components.push(this.createComponents(this.message));
    }

    // // 如果存在基础组件
    // if (basicComponents) {
    //   components.push(this.createComponents(basicComponents));
    // }
    //
    // // 图片组件
    // if (imgComponents) {
    //   components.push(this.createComponents(imgComponents));
    // }
    //
    // // 辅助最贱
    // if (assistComponents) {
    //   components.push(this.createComponents(assistComponents));
    // }
    return components;
  }

  public created() {
    this._init_lifecycle();
  }

  public render() {
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

  // 初始化core里面的生命周期函数
  private _init_lifecycle() {
    createComponent(1);
    createDesignComponent(2);
    console.log('生命周期函数初始化完毕');
  }
}
