import * as tslib_1 from "tslib";
import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import PropTypes from 'vue-types';
import './style/ver-core.styl';
const CommonModule = namespace('common');
const COMPONENT_NAME = 'VersatileGUICore';
let VersatileGUICore = class VersatileGUICore extends tsx.Component {
    constructor() {
        super(...arguments);
        this.list = [];
        this.key = '';
        this.index = 0;
    }
    created() {
        // TODO:
        // console.log(this.theme);
        console.log(this.selectItem);
        this.setSelectItem({ name: 1 });
        console.log(this.selectItem);
    }
    handleOnAdd(e) {
        this.$emit('add', e);
    }
    handleOnChange(e) {
        this.$emit('change', e);
    }
    handleClick(item, index) {
        this.key = item.id;
        this.index = index;
    }
    createDraggableList(messageList, clsName) {
        const Draggable = this.draggable;
        return (<Draggable onAdd={this.handleOnAdd} onChange={this.handleOnChange} class={`${clsName ? clsName : 'ver_core_drag_area'}`} animation={100} list={messageList} tag={clsName ? this.dragTag : 'div'} group={{ name: this.dragGroup.name }} ghostClass={this.dragGhostClass}>
      {messageList.map((item, index) => {
            return (item.tasks
                ?
                    <div class={{ ver_core_form_item: true, active: this.key === item.id }} key={item.name + '_' + index + '_' + item.id} data-key={item.name + '_' + index + '_' + item.id} id={item.name + '_' + index + '_' + item.id} onClick={() => this.handleClick(item, index)}>
                    {this.createDraggableList(item.tasks, `ver_core_drag_area_${item.type}`)}
                  </div>
                :
                    <div class={{ ver_core_form_item: true, active: this.key === item.id }} key={item.name + '_' + index + '_' + item.id} data-key={item.name + '_' + index + '_' + item.id} onClick={() => this.handleClick(item, index)}>
                  <p>{item.name}</p>
                </div>);
        })}
    </Draggable>);
    }
    render() {
        return (<div class={'ver_core'}>
        {this.createDraggableList(this.listData)}
      </div>);
    }
};
tslib_1.__decorate([
    CommonModule.State((state) => state.selectItem)
], VersatileGUICore.prototype, "selectItem", void 0);
tslib_1.__decorate([
    CommonModule.Mutation('setSelectItem')
], VersatileGUICore.prototype, "setSelectItem", void 0);
tslib_1.__decorate([
    Prop(PropTypes.any)
], VersatileGUICore.prototype, "draggable", void 0);
tslib_1.__decorate([
    Prop(PropTypes.string.isRequired)
], VersatileGUICore.prototype, "theme", void 0);
tslib_1.__decorate([
    Prop(PropTypes.string.def('ul'))
], VersatileGUICore.prototype, "dragTag", void 0);
tslib_1.__decorate([
    Prop(PropTypes.object.def({}))
], VersatileGUICore.prototype, "dragGroup", void 0);
tslib_1.__decorate([
    Prop(PropTypes.string.def('ghost'))
], VersatileGUICore.prototype, "dragGhostClass", void 0);
tslib_1.__decorate([
    Prop(PropTypes.array.def([]))
], VersatileGUICore.prototype, "listData", void 0);
VersatileGUICore = tslib_1.__decorate([
    Component({
        name: COMPONENT_NAME,
    })
], VersatileGUICore);
export default VersatileGUICore;
