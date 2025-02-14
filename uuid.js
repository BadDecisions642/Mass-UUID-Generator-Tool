const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const banner = `
____            ______            _      _                  _____ __ __ ___ 
/ __ )____ _____/ / __ \\___  _____(_)____(_)___  ____  _____/ ___// // /|__ \\
/ __  / __ \`/ __  / / / / _ \\/ ___/ / ___/ / __ \\/ __ \\/ ___/ __ \\/ // /___/ /
/ /_/ / /_/ / /_/ / /_/ /  __/ /__/ (__  ) / /_/ / / / (__  ) /_/ /__  __/ __/ 
/_____/\\__,_/\\__,_/_____/\___/\___/_/____/_/\\____/_/ /_/____/\\____/  /_/ /____/ 
`;

console.log("\x1b[35m" + banner);

rl.question("\x1b[35mEnter the amount of UUIDs to create: \x1b[39m", (count) => {
  count = parseInt(count);
  if (isNaN(count) || count <= 0) {
    console.log("\x1b[31mNot A Real Number, Can You Even Count\x1b[39m");
    rl.close();
    return;
  }

  let uuids = [];

  for (let i = 0; i < count; i++) {
    const uuid = crypto.randomUUID();
    uuids.push(uuid);
    console.log("\x1b[35m" + uuid);
  }

  try {
    fs.appendFileSync('uuids.txt', uuids.join('\n') + '\n');
    console.log("\x1b[35mUUIDs saved to uuids.txt\x1b[39m");
  } catch (error) {
    console.log("\x1b[31mError saving to uuids.txt\x1b[39m");
  }

  rl.close();
});