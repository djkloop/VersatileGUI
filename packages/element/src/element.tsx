import { Component, Vue } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import VersatileGUICore from 'versatile-core';
export const COMPONENT_NAME = 'VersatileGUIEle';

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUIEle extends tsx.Component<{}> {
  public render() {
    return (
      <div>
        <VersatileGUICore />
      </div>
    );
  }
}
