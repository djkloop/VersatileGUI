import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import { namespace, Mutation } from 'vuex-class';
import PropTypes from 'vue-types';
import _ from 'lodash';
import './style/ver-core.styl';

const CommonModule = namespace('common');

const COMPONENT_NAME = 'VersatileGUICore';
interface TaskProps {
  name: string;
  tasks?: TaskProps[];
  id?: string;
  type?: string;
}

/**
 *  theme: 当前使用的主题
 *
 */
export interface VersatileGUICoreProps {
  theme: string;
  draggable: any;
  dragTag: string;
  dragGroup: any;
  dragGhostClass: string;
  listData: TaskProps[];
}

export interface VersatileGUICoreEvent {
  onChange: (e: any) => void;
  onAdd: (e: any) => void;
}

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUICore extends tsx.Component<VersatileGUICoreProps, VersatileGUICoreEvent> {
  public list: TaskProps[] = [];
  public key: string = '';
  public index: number = 0;

  @CommonModule.State((state) => state.selectItem) public selectItem!: TaskProps;
  @CommonModule.Mutation('setSelectItem') public setSelectItem: any;

  @Prop(PropTypes.any)
  public draggable!: any;

  @Prop(PropTypes.string.isRequired)
  public theme!: string;

  @Prop(PropTypes.string.def('ul'))
  public dragTag!: string;

  @Prop(PropTypes.object.def({}))
  public dragGroup!: any;

  @Prop(PropTypes.string.def('ghost'))
  public dragGhostClass!: string;

  @Prop(PropTypes.array.def([]))
  public listData!: any;

  public created() {
    // TODO:
    // console.log(this.theme);
    console.log(this.selectItem);
    this.setSelectItem({ name: 1 });
    console.log(this.selectItem);

  }

  public handleOnAdd(e: any) {
    this.$emit('add', e);
  }

  public handleOnChange(e: any) {
    this.$emit('change', e);
  }

  public handleClick(item: TaskProps, index: number) {
    this.key = item.id;
    this.index = index;
  }

  public createDraggableList(messageList: TaskProps[], clsName?: string) {
    const Draggable = this.draggable;
    return (
      <Draggable
        onAdd={this.handleOnAdd}
        onChange={this.handleOnChange}
        class={`${clsName ? clsName : 'ver_core_drag_area'}`}
        animation={100}
        list={messageList}
        tag={clsName ? this.dragTag : 'div'}
        group={ { name: this.dragGroup.name } }
        ghostClass={this.dragGhostClass}
      >
      {
        messageList.map((item: TaskProps, index: number) => {
          return (
                item.tasks
                ?
                  <div
                    class={{ver_core_form_item: true, active: this.key === item.id}}
                    key={item.name + '_' + index + '_' + item.id}
                    data-key={item.name + '_' + index + '_' + item.id}
                    id={item.name + '_' + index + '_' + item.id}
                    onClick={() => this.handleClick(item, index)}
                  >
                    {
                      this.createDraggableList(item.tasks, `ver_core_drag_area_${item.type}`)
                    }
                  </div>
                :
                <div
                  class={{ver_core_form_item: true, active: this.key === item.id}}
                  key={item.name + '_' + index + '_' + item.id}
                  data-key={item.name + '_' + index + '_' + item.id}
                  onClick={() => this.handleClick(item, index)}
                >
                  <p>{item.name}</p>
                </div>
          );
        })
      }
    </Draggable>);
  }
  public render() {
    return (
      <div class={'ver_core'}>
        {this.createDraggableList(this.listData)}
      </div>
    );
  }
}
