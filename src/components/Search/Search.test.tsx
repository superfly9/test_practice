import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { ChangeEvent, useState } from "react";
import userEvent from "@testing-library/user-event";

describe("value값을 props로 받아 사용할 수 있다.", () => {
  test("props로 가져온 value 값을 화면에 표시할 수 있다.", () => {
    render(<Search label="상품명" value="크록스" onChange={jest.fn()} />);
    expect((screen.getByLabelText("상품명") as HTMLInputElement).value).toBe(
      "크록스"
    );
  });
  test("onChange", () => {
    function Product() {
      const [name, setName] = useState("");
      const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      };
      return <Search label="상품명" value={name} onChange={handlechange} />;
    }
    render(<Product />);
    const input = screen.getByLabelText("상품명") as HTMLInputElement;
    expect(input.value).toBe("");
    userEvent.type(input, "테스트");
    expect(input.value).toBe("테스트");
  });
});
