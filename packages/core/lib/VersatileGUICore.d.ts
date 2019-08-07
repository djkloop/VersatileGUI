import * as tsx from 'vue-tsx-support';
import './style/ver-core.styl';
interface TaskProps {
    name: string;
    tasks?: TaskProps[];
}
/**
 *  theme: 当前使用的主题
 *
 */
export interface VersatileGUICoreProps {
    theme: string;
    draggable: any;
    dragTag: string;
    dragGroup: any;
    dragGhostClass: string;
    listData: TaskProps[];
}
export interface VersatileGUICoreEvent {
    onChange: (e: any) => void;
    onAdd: (e: any) => void;
}
export default class VersatileGUICore extends tsx.Component<VersatileGUICoreProps, VersatileGUICoreEvent> {
    list: TaskProps[];
    draggable: any;
    theme: string;
    dragTag: string;
    dragGroup: any;
    dragGhostClass: string;
    listData: any;
    created(): void;
    handleOnAdd(e: any): void;
    handleOnChange(e: any): void;
    createDraggableList(messageList: any): JSX.Element;
    render(): JSX.Element;
}
export {};
