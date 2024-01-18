var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_preact = require("preact");
var import_preact_render_to_string = __toESM(require("preact-render-to-string"), 1);
var import_react_responsive = require("react-responsive");
function Page() {
  const query = (0, import_react_responsive.useMediaQuery)({ minWidth: 1e3 });
  return (0, import_preact.h)("div", {}, String(query));
}
function main() {
  const root = (0, import_preact.h)(import_react_responsive.Context.Provider, { value: { width: 1500 } }, (0, import_preact.h)(Page, {}));
  const result = (0, import_preact_render_to_string.default)(root);
  console.log({ result });
  return result;
}
main();
