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

if (NexssStdout._debug) {
  console.log(NexssStdout);
}

let stop = null;

if (NexssStdout.hasOwnProperty("_ifNot")) {
  if (!NexssStdout._ifNot || NexssStdout._ifNot === 0) {
    stop = "ok";
  }
}

if (stop !== "ok" && NexssStdout.hasOwnProperty("_if")) {
  if (NexssStdout._if && NexssStdout._if !== null && NexssStdout._if !== "") {
    stop = "ok";
  }
}

if (NexssStdout.hasOwnProperty("_ifExists")) {
  if (NexssStdout[NexssStdout._ifExists]) {
    stop = "ok";
  }
}

if (NexssStdout.hasOwnProperty("_ifNotExists")) {
  if (!NexssStdout[NexssStdout._ifNotExists]) {
    stop = "ok";
  }
}

if (
  !NexssStdout.hasOwnProperty("_if") &&
  !NexssStdout.hasOwnProperty("_ifNot") &&
  !NexssStdout.hasOwnProperty("_ifNotExists") &&
  !NexssStdout.hasOwnProperty("_ifExists")
) {
  stop = "ok";
}

if (stop === "ok") {
  if (!NexssStdout.nxsIn) {
    NexssStdout.nxsIn = ["Define message in the Output/End"];
  }
  let type = "nxsInfo";
  if (NexssStdout._type) {
    const types = ["error", "debug", "info", "warn", "trace", "ok"];
    if (!types.includes(NexssStdout._type)) {
      nxsError(
        `Output/End: _type '${
          NexssStdout._type
        }' has not been found. Use --_type=${types.join(", ")}`
      );
      NexssStdout.nxsStop = true;
      NexssStdout.nxsStopReason = "ok";
      delete NexssStdout.nxsIn;
      delete NexssStdout.resultField_1;
      process.stdout.write(JSON.stringify(NexssStdout));
      return;
    }

    type = `nxs${
      NexssStdout._type.charAt(0).toUpperCase() + NexssStdout._type.slice(1)
    }`;
  }

  eval(type)(NexssStdout.nxsIn.join("\n"));
  NexssStdout.nxsStop = true;
  NexssStdout.nxsStopReason = "ok";
}

delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));
