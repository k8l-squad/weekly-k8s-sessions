const { program, Option } = require("commander");
const { publish } = require("./publisher");

const Redis = require("ioredis");

const redis = new Redis({
  port: 6379, // Redis port
  host: process.env.REDIS_HOST || "127.0.0.1", // Redis host
});

program
  .addOption(new Option("-c, --consumer").conflicts("publisher"))
  .addOption(new Option("-p, --publisher").conflicts("consumer"));

program.parse();

const options = program.opts();

if (options.consumer) {
  console.log("IM A CONSUMER");
} else if (options.publisher) {
  publish(redis);
} else {
  console.log("YOU MESSED UP BADLY...");
}
