import VersatileGUICore from './VersatileGUICore';
(VersatileGUICore as any).install = (Vue: any) => {
  Vue.component(VersatileGUICore.name, VersatileGUICore);
};
export default VersatileGUICore;
