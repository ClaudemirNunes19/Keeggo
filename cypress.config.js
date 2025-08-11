const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    experimentalMemoryManagement: true,
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: ['*.js', '*.ts', '*.md'],
    baseUrl: 'http://localhost:3000/',
    retries: 0,
  },
});