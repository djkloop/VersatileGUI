import VersatileGUIEle, { COMPONENT_NAME } from './element';

(VersatileGUIEle as any).install = (Vue: any) => {
  Vue.component(COMPONENT_NAME, VersatileGUIEle);
};

const components = [VersatileGUIEle];

const install = (Vue: any) => {
  components.map((component: any) => {
    Vue.use(component);
  });
};

if (typeof (window as any) !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export { VersatileGUIEle };

export default {
  install,
};
