import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'base-layout',
})
export default class BaseLayout extends Vue {
  private render() {
    return (
      <div>我是布局组件</div>
    );
  }
}
