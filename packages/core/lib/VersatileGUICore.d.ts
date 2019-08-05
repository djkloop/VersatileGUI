import * as tsx from 'vue-tsx-support';
export interface VersatileGUICoreProps {
    theme: string;
}
export default class VersatileGUICore extends tsx.Component<VersatileGUICoreProps> {
    theme: string;
    render(): JSX.Element;
}
