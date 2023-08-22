import { IHttpServiceParams } from '../interfaces/http.interface';
import { createAxios, getDefaultOptions, getParams } from '../helpers/http.helper';
import { AxiosInstance } from 'axios';

export class HttpService
{
    static async request<T>(data: IHttpServiceParams)
    {
        const { config, queryParams, user } = data;

        const requestDefaultOptions: any = getDefaultOptions(config, user?.token);
        const http: AxiosInstance = createAxios();
        const params: URLSearchParams = getParams(queryParams);

        return (await http.request<T>({
            ...requestDefaultOptions,
            params
        }
        )).data;
    }
}
