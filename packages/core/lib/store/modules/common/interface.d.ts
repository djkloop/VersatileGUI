interface TaskProps {
    name?: string;
    tasks?: TaskProps[];
    id?: string;
    type?: string;
}
export interface CommonState {
    selectItem: TaskProps;
}
export {};
