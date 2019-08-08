import * as tslib_1 from "tslib";
import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';
// import Draggable from 'vuedraggable';
import './style/ver-core.styl';
const COMPONENT_NAME = 'VersatileGUICore';
let VersatileGUICore = class VersatileGUICore extends tsx.Component {
    constructor() {
        super(...arguments);
        this.list = [];
    }
    created() {
        // TODO:
        // console.log(this.theme);
    }
    handleOnAdd(e) {
        this.$emit('add', e);
    }
    handleOnChange(e) {
        this.$emit('change', e);
    }
    createDraggableList(messageList) {
        console.log(messageList);
        const Draggable = this.draggable;
        return (<Draggable onAdd={this.handleOnAdd} onChange={this.handleOnChange} class={'dragArea'} animation={100} swapThreshold={0.5} forceFallback={true} list={messageList} tag={this.dragTag} group={{ name: this.dragGroup.name }} ghostClass={this.dragGhostClass}>
      {messageList.map((item, index) => {
            return (<li class={'list-group-item'} key={item.name + '_' + index}>
              <p>{item.name}</p>
              {item.tasks ? this.createDraggableList(item.tasks) : null}
            </li>);
        })}
    </Draggable>);
    }
    render() {
        return this.createDraggableList(this.listData);
    }
};
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
