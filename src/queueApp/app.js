const { program, Option } = require("commander");

program
  .addOption(new Option("-c, --consumer").conflicts("publisher"))
  .addOption(new Option("-p, --publisher").conflicts("consumer"));

program.parse();

const options = program.opts();

if (options.consumer) {
  console.log("IM A CONSUMER");
} else if (options.publisher) {
  console.log("IM a PUBLISHER");
  return;
} else {
  console.log("YOU MESSED UP BADLY...");
}
