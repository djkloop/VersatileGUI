import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';

const COMPONENT_NAME = 'VersatileGUICore';

export interface VersatileGUICoreProps {
  theme: string;
}

@Component({
  name: COMPONENT_NAME,
})
export default class VersatileGUICore extends tsx.Component<VersatileGUICoreProps> {

  @Prop(PropTypes.string.isRequired)
  public theme!: string;

  public created() {
    // TODO:
    // console.log(this.theme);
  }

  public render() {
    return (
      <div>
        11111
      </div>
    );
  }
}
