export interface PayloadPropsInterface<T=Record<string, any>>
{
    baseUrl?: string;
    user?: any | null;
    queryParams?: any;
    id?: string;
    data?: T;
};
