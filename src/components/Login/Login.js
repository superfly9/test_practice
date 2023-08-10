import React, { useCallback, useState } from "react";
import { MAX_LENGTH } from "../../constant/login";
import useInputChange from "../../hooks/useInputChange";
import { maxLengthCheck } from "../../util/lengthCheck";

function Login() {
  const [id, handleIdChange, handleIdReset, idErrorMsg] = useInputChange(
    "",
    (val) => maxLengthCheck(val, "id"),
    { errorMsg: `id는 ${MAX_LENGTH.get("id")}이내여야 합니다.` }
  );

  const [
    password,
    handlePasswordChange,
    handlePasswordReset,
    passwordErrorMsg,
  ] = useInputChange("", (val) => maxLengthCheck(val, "password"), {
    errorMsg: `password는 ${MAX_LENGTH.get("password")}이내여야 합니다.`,
  });

  const [status, setStatus] = useState("idle");
  // idle, pending, resolved, rejected

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (idErrorMsg || passwordErrorMsg) return;
      setStatus("pending");
      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ id, password }),
        });
        setStatus("resolved");
        if (!response.ok) {
          throw new Error();
        }
      } catch (e) {
        console.log(e);
        setStatus("rejected");
      } finally {
        handleIdReset();
        handlePasswordReset();
      }
    },
    [
      id,
      password,
      idErrorMsg,
      passwordErrorMsg,
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
          {idErrorMsg && <span>{idErrorMsg}</span>}
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
          {passwordErrorMsg && <span>{passwordErrorMsg}</span>}
        </div>
        <button onClick={handleSubmit}>로그인</button>
      </form>
      {status === "pending" ? <div>Loading...</div> : null}
    </>
  );
}

export default Login;
