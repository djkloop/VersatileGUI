import * as tslib_1 from "tslib";
import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';
const COMPONENT_NAME = 'VersatileGUICore';
let VersatileGUICore = class VersatileGUICore extends tsx.Component {
    created() {
        console.log(this.theme);
    }
    render() {
        return (<div>
        11111
      </div>);
    }
};
tslib_1.__decorate([
    Prop(PropTypes.string.isRequired)
], VersatileGUICore.prototype, "theme", void 0);
VersatileGUICore = tslib_1.__decorate([
    Component({
        name: COMPONENT_NAME,
    })
], VersatileGUICore);
export default VersatileGUICore;
