import * as tsx from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import PropTypes from 'vue-types';

interface ThemeProps {
    theme: string;
}
@Component({
    name: 'theme-render',
})
export default class ThemeRender extends tsx.Component<ThemeProps> {
    @Prop(PropTypes.string.isRequired)
    public theme: string;

    public render() {
        return (
            <div>1111</div>
        );
    }

}
