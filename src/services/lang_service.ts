import { useDispatch } from "react-redux";
import { LangInterface } from "../interfaces/lang_interface";
import { setName } from "../redux/name_slice";
import { setLang } from "../redux/lang_slice";

export class LangService {
    dispatch = useDispatch();

    setData(langName: string, langData: LangInterface[]) {
        this.dispatch(setName(langName));
        this.dispatch(setLang(langData));
    }
}