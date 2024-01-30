import { useDispatch } from "react-redux";
import { setName } from "../redux/name_slice";
import { setLang } from "../redux/lang_slice";
import HttpService from "./http_service";
import { DataLangInterface } from "../interfaces/data_lang_interface";
import NavigateService from "./navigate_service";

export class LangService {
    httpService: HttpService = new HttpService();
    navigateService: NavigateService = new NavigateService();
    dispatch = useDispatch();

    setData(langName: string, route: string) {
        this.httpService.get("lang").then((data: DataLangInterface[]) => {
            const receiveData =  data.find((lang) => lang.name === langName);
            this.dispatch(setName(langName));
            this.dispatch(setLang(receiveData?.data));
            this.navigateService.navigateRoute(route);
        }).catch((error) => {
            console.log("error", error);
        });
    }
}