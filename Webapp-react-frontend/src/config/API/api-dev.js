const protocol = "https";
const host = "api.honda.rejoicehub.com/api/v1";

// const protocol = "http";
// const host = "192.168.29.128:8001/api/v1";
// const host = "localhost:8001/api/v1";




const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
};
