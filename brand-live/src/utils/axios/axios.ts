import { customAxiosApi, globalConfig } from "./axiosInterceptor";

type configType = typeof globalConfig;
const BaseURL = import.meta.env.VITE_APP_BASE_URL
const get = (endpoint: string, customConfig: Partial<configType>) => {
  const url = BaseURL + endpoint;

  const config: configType = {
    ...globalConfig,
    ...customConfig,
    headers: { ...customConfig.headers },
  };

  return customAxiosApi.get(url, config);
};

export { get };
