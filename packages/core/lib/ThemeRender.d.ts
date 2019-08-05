import * as tsx from 'vue-tsx-support';
interface ThemeProps {
    theme: string;
}
export default class ThemeRender extends tsx.Component<ThemeProps> {
    theme: string;
    render(): JSX.Element;
}
export {};
