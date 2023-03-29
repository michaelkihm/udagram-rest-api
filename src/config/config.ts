export const config = {
  dev: {
    username: "postgres",
    password: "postgres",
    database: "postgres",
    host: "database-1.ctjjrb26dyl4.eu-central-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "eu-central-1",
    aws_profile: "default",
    aws_media_bucket: "udagram-ruttner-dev",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
