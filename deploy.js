const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const DIST_PATH = path.join(__dirname, 'dist/My-Portfolio');
const NOJEKYLL_PATH = path.join(DIST_PATH, '.nojekyll');

// Helper function to log output
const log = (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
  } else {
    console.log(stdout);
  }
};

// Build the project
exec('ng build --base-href /My-Portfolio/', (err, stdout, stderr) => {
  log(err, stdout, stderr);
  if (err) {
    process.exit(1);
  }

  // Ensure the output directory exists
  if (!fs.existsSync(DIST_PATH)) {
    console.error(`Build output directory does not exist: ${DIST_PATH}`);
    process.exit(1);
  }

  // Create .nojekyll file
  fs.writeFileSync(NOJEKYLL_PATH, '');

  // Deploy to GitHub Pages
  exec(`npx gh-pages -d ${DIST_PATH}`, (err, stdout, stderr) => {
    log(err, stdout, stderr);
    if (err) {
      process.exit(1);
    }

    console.log('Deployment successful!');
  });
});
