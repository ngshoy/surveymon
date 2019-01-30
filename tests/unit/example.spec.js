import { shallowMount } from '@vue/test-utils';
import CreatePoll from '@/views/CreatePoll.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(CreatePoll);
    expect(wrapper.text()).toMatch();
  });
});
