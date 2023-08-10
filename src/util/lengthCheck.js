import { MAX_LENGTH } from "../constant/login";

export const maxLengthCheck = (val,id) => val.length < MAX_LENGTH.get(id);