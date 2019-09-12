import configs from './envsConfig.js';
import globalConfig from './globalConfig.js';

const getConfigByEnv = (env) => {
    if(!env) {
        env = "dev";
    }

    env = env.toLowerCase();
    let envConfig = configs[env];

    if(!envConfig) {
        console.log(`No env config for ${env}`);
    }

    return {...globalConfig, ...envConfig};
};


export default getConfigByEnv();