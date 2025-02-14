/* tslint:disable */
/* eslint-disable */
/**
 * API Reference
 * The Kloutit API is organized around [REST](https://en.wikipedia.org/wiki/REST), it accepts and returns [JSON-encoded](https://www.json.org) bodies, returning standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). You can interact with the API directly using your preferred HTTP/REST library.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "http://localhost".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: RawAxiosRequestConfig;
}

/**
 *
 * @export
 */
export enum KloutitEnvironment {
    development = 'development',
    production = 'production'
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;
    protected basePath: string;

    constructor(
        configuration?: Configuration,
        protected axios?: AxiosInstance
    ) {
        if (configuration) {
            this.configuration = configuration;
            this.axios = globalAxios;
            this.axios.defaults.headers.common['x-api-key'] =
                this.configuration.apiKey;
            if (configuration?.basePath) {
                this.basePath = configuration.basePath;
            } else {
                this.basePath = this.getBasePath(KloutitEnvironment.production);
            }
            this.axios.defaults.baseURL = this.basePath;
        } else {
            this.axios = axios;
        }
    }

    /**
     * Get the base path based on the environment.
     * @param environment The environment ('development' or 'production').
     * @returns The base path for the API.
     */
    private getBasePath(environment: KloutitEnvironment): string {
        const basePaths = {
            development:  'https://dev.clients-api.kloutit.com',
            production: 'https://clients-api.kloutit.com'
        };

        return basePaths[environment];
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

interface ServerMap {
    [key: string]: {
        url: string,
        description: string,
    }[];
}

/**
 *
 * @export
 */
export const operationServerMap: ServerMap = {
}
