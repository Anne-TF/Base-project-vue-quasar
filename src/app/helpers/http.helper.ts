import { QueryParams } from '../interfaces/http.interface';
import { config as Config } from '../repositories/config';
import axios, { AxiosRequestConfig } from 'axios';

export function getDefaultOptions(config: AxiosRequestConfig, token?: string): any
{
    if (token)
    {
        const headers = config.headers || {};
        Object.assign(headers, { Authorization: `Bearer ${token}` });
        config.headers = headers;
    }
    return {
        method: 'GET',
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...config.headers
        }
    };
}

export function createAxios()
{
    const { withCredentials } = Config.apiGateway.server;

    return axios.create({
        withCredentials
    });
}

export function getParams(queryParams?: QueryParams)
{
    const params = new URLSearchParams(queryParams?.filter);

    if (queryParams?.pagination)
    {
        if (queryParams?.pagination?.limit)
        {
            params.set('pagination[limit]', queryParams?.pagination?.limit);
        }
        if (queryParams?.pagination?.offset)
        {
            params.set('pagination[offset]', queryParams?.pagination?.offset);
        }
    }

    if (queryParams?.limit)
    {
        params.set('limit', queryParams?.limit);
    }
    if (queryParams?.offset !== undefined && queryParams?.offset !== null)
    {
        params.set('offset', queryParams?.offset);
    }

    return params;
}
