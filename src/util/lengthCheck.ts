import { MAX_LENGTH } from "../constant/login";

export const maxLengthCheck = (val:string,id:string) => val.length < MAX_LENGTH.get(id);