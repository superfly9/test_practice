import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from '@testing-library/user-event'

describe('렌더링 테스트', ()=>{
    test('첫 번째 렌더링시 화면 요소들을 체크한다.', async ()=>{
        render(<Counter />);

        expect(screen.getByText('Increase Count')).toBeInTheDocument();
        expect(screen.getByText('Decrease Count')).toBeInTheDocument();
        expect(screen.getByTestId('counter').textContent).toBe("0")
    })
    test('증가 버튼 클릭시 카운트가 1씩 증가한다.', async ()=>{
        render(<Counter />);

        const increaseBtn = await screen.findByText('Increase Count');

        await userEvent.click(increaseBtn);
        await userEvent.click(increaseBtn);
        expect(screen.getByTestId('counter').textContent).toBe("2")
    })

    test('감소 버튼 클릭시 카운트가 1씩 감소한다.', async ()=>{
        render(<Counter />);

        const increaseBtn = await screen.findByText('Decrease Count');

        await userEvent.click(increaseBtn);
        await userEvent.click(increaseBtn);
        expect(screen.getByTestId('counter').textContent).toBe("-2")
    })
})