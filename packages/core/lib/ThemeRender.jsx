import * as tslib_1 from "tslib";
import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';
let ThemeRender = class ThemeRender extends tsx.Component {
    render() {
        return (<div>1111</div>);
    }
};
tslib_1.__decorate([
    Prop(PropTypes.string.isRequired)
], ThemeRender.prototype, "theme", void 0);
ThemeRender = tslib_1.__decorate([
    Component({
        name: 'theme-render',
    })
], ThemeRender);
export default ThemeRender;
