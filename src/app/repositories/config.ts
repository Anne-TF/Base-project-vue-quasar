const API_PROTOCOL = process.env.API_PROTOCOL as string || 'http';
const API_HOSTNAME = process.env.API_HOSTNAME as string || 'localhost';
const API_PORT = process.env.API_PORT as string || null;
const API_WITH_CREDENTIALS = process.env.API_WITH_CREDENTIALS === 'true' ?? false;

const BACKEND_BASE_PATH = process.env.BASE_PATH as string || 'api';

export const config = {
    apiGateway: {
        server: {
            protocol: API_PROTOCOL,
            hostname: API_HOSTNAME,
            port: API_PORT,
            baseUrl: `${API_PROTOCOL}://${API_HOSTNAME}${API_PORT === null ? `/${BACKEND_BASE_PATH}` : `:${API_PORT}/${BACKEND_BASE_PATH}`}`,
            withCredentials: API_WITH_CREDENTIALS
        },
        routes: {
            auth: {
                login: 'auth/login',
                refreshToken: 'auth/refresh-token',
                logout: 'auth/logout',
                permissionsGetAll: 'auth/permissions',
                keepAlive: 'auth/keep-alive',
                forgotPassword: 'auth/forgot-password',
                changeForgotPassword: 'auth/change-forgot-password',
                register: 'auth/signup',
                verifyYourAccount: 'auth/verify-your-account'
            },
            pokemon: {
                getAll: 'pokemon',
                getByOrder: 'pokemon'
            }
        }
    }
};
