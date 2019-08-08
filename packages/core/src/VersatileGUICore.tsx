import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';
import _ from 'lodash';
// import Draggable from 'vuedraggable';
import './style/ver-core.styl';

const COMPONENT_NAME = 'VersatileGUICore';


interface TaskProps {
  name: string;
  tasks?: TaskProps[];
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
  }

  public handleOnAdd(e: any) {
    this.$emit('add', e);
  }

  public handleOnChange(e: any) {
    this.$emit('change', e);
  }

  public createDraggableList(messageList: TaskProps[]) {
    console.log(messageList);
    const Draggable = this.draggable;
    return (
      <Draggable
        onAdd={this.handleOnAdd}
        onChange={this.handleOnChange}
        class={'dragArea'}
        animation={100}
        swapThreshold={0.5}
        forceFallback={true}
        list={messageList}
        tag={this.dragTag}
        group={ { name: this.dragGroup.name } }
        ghostClass={this.dragGhostClass}
      >
      {
        messageList.map((item: TaskProps, index: number) => {
          return (
            <li class={'list-group-item'} key={item.name + '_' + index}>
              <p>{item.name}</p>
              {item.tasks ? this.createDraggableList(item.tasks) : null}
            </li>
          );
        })
      }
    </Draggable>);
  }
  public render() {
    return this.createDraggableList(this.listData);
  }
}
