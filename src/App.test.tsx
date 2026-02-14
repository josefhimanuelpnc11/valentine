import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Landing from './components/Landing'
import jokes from './data/jokes.json'

const noop = () => {}

describe('Valentine choice flow', () => {
  test('clicking No removes button and shows override text', async () => {
    const user = userEvent.setup()
    render(<Landing jokes={jokes} onYes={noop} />)

    await user.click(screen.getByRole('button', { name: /no/i }))

    expect(screen.getByText(/only can choose yes now aint it\./i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /no/i })).not.toBeInTheDocument()
    })
  })

  test('aria-live region receives override message', async () => {
    const user = userEvent.setup()
    render(<Landing jokes={jokes} onYes={noop} />)

    await user.click(screen.getByRole('button', { name: /no/i }))

    const liveRegion = screen.getByText('only can choose yes now aint it.')

    expect(liveRegion).toHaveAttribute('aria-live', 'polite')
    expect(liveRegion).toHaveTextContent('only can choose yes now aint it.')
  })

  test('clicking Yes calls onYes with random message', async () => {
    const received: string[] = []
    const handleYes = (msg: string) => { received.push(msg) }
    const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0)
    const user = userEvent.setup()

    render(<Landing jokes={jokes} onYes={handleYes} />)

    await user.click(screen.getByRole('button', { name: /yes/i }))

    expect(received).toHaveLength(1)
    expect(received[0]).toBe(jokes[0])

    randomSpy.mockRestore()
  })
})
