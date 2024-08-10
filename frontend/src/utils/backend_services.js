import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:3000';

const token = Cookies.get('token'); // Retrieve token from cookies

const SHOES_URL = `${BASE_URL}/shoes`;
const SALES_URL = `${BASE_URL}/sales`;
const PURCHASES_URL = `${BASE_URL}/purchaseshoes`;
const USERS_URL = `${BASE_URL}/users`;
const PROFILES_URL = `${BASE_URL}/profiles`;
const CONTACTS_URL = `${BASE_URL}/contact`;
const ORDERS_URL = `${BASE_URL}/orders`;
const AUTH_URL = `${BASE_URL}/auth`;

export {
    BASE_URL,
    SHOES_URL,
    SALES_URL,
    PURCHASES_URL,
    USERS_URL,
    PROFILES_URL,
    CONTACTS_URL,
    ORDERS_URL,
    AUTH_URL,
    token
};
