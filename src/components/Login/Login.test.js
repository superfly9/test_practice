import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { server } from "../../mocks/server";

const setup = () => render(<Login />);

describe("로그인 페이지의 유저 이벤트를 확인할 수 있다.", () => {
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

  test("로그인 버튼을 누르면 입력된 값을 서버로 전송한다 - 1", async () => {
    setup();
    const requestSpy = jest.spyOn(window, "fetch");
    server.events.on("request:start", requestSpy);

    const idInput = screen.getByLabelText("아이디");
    const passwordInput = screen.getByLabelText("비밀번호");

    await userEvent.type(idInput, "superfly9");
    await userEvent.type(passwordInput, "1234");
    await userEvent.click(screen.getByRole("button"));

    const delay = (time) => new Promise((res) => setTimeout(res), time);
    await delay(1000);

    await waitFor(() => {
      expect(requestSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          body: {
            id: "superfly9",
            password: "1234",
          },
        })
      );
    });
  });
});
