declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};