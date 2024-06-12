const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "projectId": 'Hotel Adictin Automation',
  "viewportWidth": 1280,
  "viewportHeight": 800,
  //reporter: '@shelex/cypress-allure-plugin',
  e2e: {
    baseUrl: 'https://adactinhotelapp.com/index.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    fixturesFolder: 'cypress/e2e/fixtures',
    tsc: 'cypress/support/commands.ts',

   
    video: true,
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
  
    pageLoadTimeout:30000 ,
    screenshots: true,
  
    screenshotOnRunFailure: true,
    
      
    
    
    // env: {
    //   //baseURL1: 'https://extaz-oci.aetna.com/pocui/',
    //   //baseURL2: 'https://proview.caqh.org/Login?Type=PR',
    // },
    // // // reporter: 'cypress-multi-reporters',
    // // // reporterOptions: {
    // // //   reporterEnabled: 'mochawesome',
    // // //   mochawesomeReporterOptions: {
    // // //     reportDir: 'cypress/reports/mochawesome/testresults',
    // // //     overwrite: false,
    // // //     html: false,
    // // //     json: false
    // //   },
    },
  },
);