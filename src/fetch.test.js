// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Fetch from './fetch'
import { server } from './mocks/server'

describe('fetch Test', () => {  
  
  test('loads and displays greeting', async () => {
      render(<Fetch url="/greeting" />)
  
    
      userEvent.click(screen.getByText('Load Greeting'))
    
      await screen.findByRole('heading')
    
      expect(screen.getByRole('heading')).toHaveTextContent('hello there')
      expect(screen.getByRole('button')).toBeDisabled()
    })
    
  test('handles server error', async () => {
    // handler에 정의된 url과 동일할 때, use로 사용하는 rest api가 우선적으로 사용
    server.use(
      rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
  
    render(<Fetch url="/greeting" />)
  
    userEvent.click(screen.getByText('Load Greeting'))
  
    await screen.findByRole('alert')
  
    expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
    expect(screen.getByRole('button')).not.toBeDisabled()
  })
  // The jest object is automatically in scope within every test file
})
