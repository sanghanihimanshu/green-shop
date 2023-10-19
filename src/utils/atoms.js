import { local } from "./utils";
import {atom} from 'jotai'
export const logdin = atom(local.getItem("auth"))
export const sidebox = atom([false,'Edit'])
export const table = atom([])
export const card = atom([])