import * as tsx from 'vue-tsx-support';
export interface VersatileGUICoreProps {
    theme: string;
}
export default class VersatileGUICore extends tsx.Component<VersatileGUICoreProps> {
    public theme: string;
    public created(): void;
    public render(): JSX.Element;
}
