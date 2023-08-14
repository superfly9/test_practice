import { act, renderHook } from "@testing-library/react"
import useInputChange from "./useInputChange"


describe('useInput 테스트', ()=>{

    test('초기값을 가지고 있다', ()=>{
        const { result } =renderHook(useInputChange, {
            initialProps : 'seoul'
        })
        const state = result.current[0];
        expect(state).toBe('seoul');
    })

    test('handleChange 함수를 통해 state를 변경할 수 있다.', ()=>{
        const { result } =renderHook(useInputChange, {
            initialProps : ''
        })
        const handleChange = result.current[1];
        act(()=>handleChange({ target : { value : 'test useInput'}}));
        expect(result.current[0]).toBe('test useInput');
    })
})