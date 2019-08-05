import VersatileGUICore from './VersatileGUICore';
import { createComponent, createDesignComponent } from './lifecycle';
VersatileGUICore.install = (Vue) => {
    Vue.component(VersatileGUICore.name, VersatileGUICore);
};
export { createComponent, createDesignComponent, };
export default VersatileGUICore;
