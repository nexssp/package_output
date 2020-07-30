const {
  nxsInfo,
  nxsError,
  nxsTrace,
  nxsWarn,
  nxsDebug,
  nxsOk,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

const NexssIn = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssIn.js`);
let NexssStdout = NexssIn();

if (!NexssStdout._type) {
  NexssStdout._type = "info";
}

const types = ["error", "debug", "info", "warn", "trace", "ok"];
if (!types.includes(NexssStdout._type)) {
  nxsError(
    `Type ${NexssStdout._type} has not been found. Use ${types.join(", ")}`
  );
  NexssStdout.nxsStop = true;
}

type = `nxs${
  NexssStdout._type.charAt(0).toUpperCase() + NexssStdout._type.slice(1)
}`;

eval(type)(NexssStdout.nxsIn.join("\n"));

delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));
