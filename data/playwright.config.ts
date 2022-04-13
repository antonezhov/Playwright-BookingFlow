import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'admin360',
      testMatch: /.*admin360_smoke.spec.ts/,
      retries: 0,
    },
  ],
  use: {
    // Browser options
    headless: true,

    // Artifacts
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
};

export default config;
