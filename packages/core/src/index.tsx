import VersatileGUICore from './VersatileGUICore';
import { createComponent, createDesignComponent } from './lifecycle';

(VersatileGUICore as any).install = (Vue: any) => {
  Vue.component(VersatileGUICore.name, VersatileGUICore);
};

export {
  createComponent,
  createDesignComponent,
};

export default VersatileGUICore;
