import Component from '@ember/component';
import {
  action,
  computed,
} from '@ember-decorators/object';

export default class MyComponent extends Component {
  count = 0;

  @computed('name')
  get uppercaseName() {
    return this.name.toUpperCase();
  }

  @action
  increment() {
    this.set('count', this.count + 1);
  }
};
