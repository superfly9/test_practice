import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errMsg, idRegex, passwordRegex } from "../../constant/login";
import useInputChange from "../../hooks/useInputChange";

function Login() {

  const [id, handleIdChange, handleIdReset] = useInputChange("");
  const [idError,setIdError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)

  const [
    password,
    handlePasswordChange,
    handlePasswordReset,
  ] = useInputChange("");


  const [status, setStatus] = useState("idle");
  // idle, pending, resolved, rejected

  const idValidator = useCallback(() => {
    const isValidId = idRegex.test(id)

    return isValidId;
  },[id]);

  const passwordValidator = useCallback(() => {
    const isValidPassword = passwordRegex.test(password)

    return isValidPassword;
  },[password]);

  const navigate = useNavigate();

  const validatorHandler = () =>{
      const isValidId = idValidator();
      const isValidPassword = passwordValidator();
      let notValid = false;

      setPasswordError(isValidPassword ? false : true)
      setIdError(isValidId ? false : true) 

      if (!isValidId || !isValidPassword) notValid = true;

      return notValid;
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const isNotValid = validatorHandler()
      if(isNotValid) return;

      setStatus("pending");
      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ id, password }),
        });
        if (!response.ok) {
          throw new Error();
        }
        setStatus("resolved");
        navigate('/')
      } catch (e) {
        console.log(e);
        setStatus("rejected");
      } finally {
        handleIdReset();
        handlePasswordReset();
      }
    },
    [
      navigate,
      idValidator,
      passwordValidator,
      id,
      password,
      handleIdReset,
      handlePasswordReset,
    ]
  );

  return (
    <>
      <form>
        <div style={{ display: "grid", gap: "20px" }}>
          <label htmlFor="id">아이디</label>
          <input id="id" value={id} onChange={handleIdChange} />
          {idError && <span data-testid="id-error-message">{errMsg['id']}</span>}
        </div>
        <div style={{ display: "grid", gap: "20px" }}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            autoComplete="new-password"
          />
          {passwordError && <span data-testid="password-error-message">{errMsg['password']}</span>}
        </div>
        <button onClick={handleSubmit}>로그인</button>
      </form>
      {status === "resolved"&& <div>로그인 성공</div>}
      {status === "pending" && <div>Loading...</div>}
    </>
  );
}

export default Login;
