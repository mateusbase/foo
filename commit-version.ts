const { execSync } = require("child_process");
const { readFileSync } = require("fs");

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));

const { version } = packageJson;

const message = process.argv[2] || "Atualização de versão";

execSync(`git commit --amend -m "v${version}: ${message}"`, {
  stdio: "inherit",
});

execSync("git push origin dev --tags --force", { stdio: "inherit" });
