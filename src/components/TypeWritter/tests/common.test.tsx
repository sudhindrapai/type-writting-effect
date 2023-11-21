import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import App from '../src/components/App'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<App text={''} speed={0} fontSize={0} clearMessageSpeed={0} loop={false} />)
  })
})