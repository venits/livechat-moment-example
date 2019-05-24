import { getQueryParam, hashStringToJson } from "./helpers";
const parameters = hashStringToJson();

export function createConnection({ handleMessage }) {
  const pluginId = getQueryParam("plugin_id") || parameters.plugin_id;
  const formatMessage = message => ({ ...message, plugin_id: pluginId });

  const createPlainConnection = () => {
    const origins = {
      "http://my.lc:3000": true,
      "https://my.labs.livechatinc.com": true,
      "https://my.staging.livechatinc.com": true,
      "https://my.livechatinc.com": true
    };

    const isOwnEvent = event => origins[event.origin] === true;

    window.addEventListener("message", event => {
      if (isOwnEvent(event)) {
        handleMessage(event.data);
      }
    });

    return {
      send(message) {
        window.parent.postMessage(formatMessage(message), "*");
        return Promise.resolve();
      }
    };
  };

  return Promise.resolve(createPlainConnection());
}
