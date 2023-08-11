import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

// https://jestjs.io/docs/mock-functions#mock-property
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

const setup = () => render(<Login />);

describe("로그인 페이지의 유저 이벤트를 확인할 수 있다.", () => {

  describe('기본적인 정보 입력이 가능하다.', ()=>{

    test("아이디 입력이 가능하다", async () => {
      setup();
      const idInput = screen.getByLabelText("아이디");
      await userEvent.type(idInput, "superfly9");
      expect(idInput.value).toEqual("superfly9");
    });
  
    test("비밀번호 입력이 가능하다", async () => {
      setup();
      const passwordInput = screen.getByLabelText("비밀번호");
      await userEvent.type(passwordInput, "1234");
      expect(passwordInput.value).toEqual("1234");
    });
  })

  describe('정보 입력 후 버튼 클릭시 결과를 확인 할 수 있다.', ()=>{

    test("로그인 버튼을 누르면 입력된 값을 서버로 전송한다 - 1", async () => {
      setup();
  
      const idInput = screen.getByLabelText("아이디");
      const passwordInput = screen.getByLabelText("비밀번호");
  
      await userEvent.type(idInput, "superfly9");
      await userEvent.type(passwordInput, "seoul1234");
      await userEvent.click(screen.getByRole("button"));
  
      expect(await screen.findByText('로그인 성공')).toBeInTheDocument();
      expect(mockUsedNavigate).toHaveBeenCalledTimes(1);
    })
  
    test("아이디 유효성 체크를 통과하지 못하면 에러 메시지를 띄운다.", async () => {
      setup();
  
      const idInput = screen.getByLabelText("아이디");
      const passwordInput = screen.getByLabelText("비밀번호");
  
      await userEvent.type(idInput, "superfly123456");
      await userEvent.type(passwordInput, "seoul1234");
      await userEvent.click(screen.getByRole("button"));
  
      expect(await screen.findByTestId('id-error-message')).toBeInTheDocument();
      // getBy는 요소가 없을때 throw하기에 queryBy 이용
      expect(screen.queryByText('로그인 성공')).not.toBeInTheDocument();
    })
  
    test("비밀번호 유효성 체크를 통과하지 못하면 에러 메시지를 띄운다.", async () => {
      setup();
  
      const idInput = screen.getByLabelText("아이디");
      const passwordInput = screen.getByLabelText("비밀번호");
  
      await userEvent.type(idInput, "superfly9");
      await userEvent.type(passwordInput, "1");
      await userEvent.click(screen.getByRole("button"));
  
      expect(await screen.findByTestId('password-error-message')).toBeInTheDocument();
      // getBy는 요소가 없을때 throw하기에 queryBy 이용
      expect(screen.queryByText('로그인 성공')).not.toBeInTheDocument();
    })
  })
})
