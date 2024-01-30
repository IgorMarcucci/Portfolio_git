export default class HttpService {
    url = "https://65b04b172f26c3f2139cac09.mockapi.io/";
    async get(endPoint: string) {
        const response = await fetch(`${this.url}${endPoint}`);
        return await response.json();
    }
}