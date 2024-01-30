import { useNavigate } from "react-router-dom";

export default class NavigateService {
    navigate = useNavigate();

    navigateRoute = (route: string) => {
        window.scrollTo(0, 0);
        this.navigate(route);
    };
}