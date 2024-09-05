const { execSync } = require("child_process");

async function consume(redis) {
  while (true) {
    console.log("Getting Work...");
    await redis.blpop("QT", 1).then((popped) => {
      if (!popped) {
        return;
      }
      execSync(`sleep ${popped[1]}`);
      console.log(`Worked for ${popped[1]} seconds`);
    });
  }
}

exports.consume = consume;
