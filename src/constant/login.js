export const MAX_LENGTH = new Map();

MAX_LENGTH.set('id', 10);
MAX_LENGTH.set('password', 8);


export const idRegex =/^([a-z0-9]){6,10}$/;
export const passwordRegex =/^([a-z0-9]){4,6}$/;


export const errMsg = {
    id :'아이디는 6-10이내의 영문/숫자만 가능합니다',
    password :'비밀번호는 4-6이내의 영문/숫자만 가능합니다',
}