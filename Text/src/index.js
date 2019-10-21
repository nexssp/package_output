// Nexss PROGRAMMER 2.0.0 - NodeJS
// Default template for JSON Data
// STDIN
process.stdin.on("data", function(NexssStdin) {
  console.log(`#${NexssStdin}#`);
  if (!NexssStdin) console.error("No data passed to the Output/Text Node");
  let NexssStdout;
  try {
    NexssStdout = JSON.parse(NexssStdin.toString());
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  // Modify data
  //NexssStdout.NodeJSOutput = `Hello from NodeJS! ${process.version}`;
  //console.log(NexssStdout);
  NexssStdout.test = "text";
  const { writeFileSync } = require("fs");
  const cwd = NexssStdout.cwd;
  delete NexssStdout.start;
  delete NexssStdout._;
  delete NexssStdout.cwd;

  const filename = NexssStdout["file"] || "default.txt";
  delete NexssStdout["file"];

  writeFileSync(`${cwd}/${filename}`, JSON.stringify(NexssStdout, null, 2));
  // STDOUT
  process.stdout.write(JSON.stringify(NexssStdout));
});

process.stdin.on("end", function() {
  //On Windows below is not needed.
  process.exit(0);
});
