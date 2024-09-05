import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://oft-dev.ep-dev.prom.local',
    supportFile: false,
  },
})
