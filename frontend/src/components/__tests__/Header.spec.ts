import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MyHeader from '../MyHeader.vue'

describe('MyHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(MyHeader, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
