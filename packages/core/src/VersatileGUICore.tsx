import * as tsx from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';
import { BaseLayout } from './editor-choose';

const COMPONENT_NAME = 'VersatileGUICore';

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUICore extends tsx.Component<{}> {

  public render() {
    return (
      <div>
        <BaseLayout />
      </div>
    );
  }
}
