require("dotenv").config();

export const AwsConfig = {
  bucketName: process?.env.REACT_APP_BUCKET_NAME,
  region: process?.env.REACT_APP_BUCKET_REGION,
  accessKeyId: process?.env.REACT_APP_BUCKET_ACCESS_KEY_ID,
  secretAccessKey: process?.env.REACT_APP_BUCKET_SECRET_ACCESS_KEY,
};
