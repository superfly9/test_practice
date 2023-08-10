import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from '@testing-library/user-event'
import { MAX_COUNT, MIN_COUNT } from "../../constant"

describe('렌더링 테스트', ()=>{

    test('첫 번째 렌더링시 화면 요소들을 체크한다.', async ()=>{

        render(<Counter />);

        expect(screen.getByText('Increase Count')).toBeInTheDocument();
        expect(screen.getByText('Decrease Count')).toBeInTheDocument();
        expect(screen.getByTestId('counter').textContent).toBe("0");
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
        const increaseBtn = await screen.findByText('Increase Count');
        const decreaseBtn = await screen.findByText('Decrease Count');

        await userEvent.click(increaseBtn);
        await userEvent.click(increaseBtn);
        await userEvent.click(decreaseBtn);
        expect(screen.getByTestId('counter').textContent).toBe("1")
    })

    test('count는 MAX_COUNT보다 커질 수 없다.', async ()=>{

        render(<Counter />);
        const increaseBtn = await screen.findByText('Increase Count');
        const CLICK_MORE_THAN_LIMIT = 5;

        for (let i = 0; i < MAX_COUNT + CLICK_MORE_THAN_LIMIT; i++) {
            await userEvent.click(increaseBtn);
        }
        expect(Number(screen.getByTestId('counter').textContent)).toBe(MAX_COUNT);
    })

    test('count는 MIN_COUNT보다 작아질 수 없다.', async ()=>{

        render(<Counter />);
        const decreaseBtn = await screen.findByText('Decrease Count');
        const CLICK_MORE_THAN_LIMIT = 5;

        for (let i = 0; i <  MAX_COUNT + CLICK_MORE_THAN_LIMIT; i++) {
            await userEvent.click(decreaseBtn);
        }
        expect(Number(screen.getByTestId('counter').textContent)).toBe(MIN_COUNT);
    })

    describe('counter의 변화량을 결정하는 amount가 존재한다.', ()=>{

        test('counter의 변화량을 결정하는 amount의 기본 값은 1이다.', async ()=>{
    
            render(<Counter />);
            // const amount = await screen.findByTestId('amount');
            const amount = screen.getByLabelText('클릭시 변화시킬 Count :');
            expect(amount).toBeInTheDocument();
            expect(amount).toHaveValue();
            expect(amount.value).toBe("1");
        })

        test('amount의 값을 5로 수정할 수 있다.', async ()=>{
    
            render(<Counter />);
            const amount = screen.getByLabelText('클릭시 변화시킬 Count :');
            expect(amount).toBeInTheDocument();
            await userEvent.type(amount ,"{backspace}");
            await userEvent.type(amount , "5");
            expect(amount.value).toBe("5");
        })
    })
})