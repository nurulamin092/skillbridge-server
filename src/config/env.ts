import dotenv from "dotenv";
dotenv.config();
type EnvConfig = {
  PORT: number;
  NODE_ENV: "development" | "production";
};

const getEnv = (key: string, required = true): string => {
  const value = process.env[key];
  if (!value && required) {
    throw new Error(`Missing required env variable:${key}`);
  }
  return value as string;
};

export const env: EnvConfig = {
  PORT: Number(getEnv("PORT")),
  NODE_ENV: getEnv("NODE_ENV") as EnvConfig["NODE_ENV"],
};
