import { local } from "./utils";
import {atom} from 'jotai'
export const logdin = atom(local.getItem("auth"))