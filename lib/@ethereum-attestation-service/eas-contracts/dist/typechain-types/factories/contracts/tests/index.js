"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSchemaResolver__factory = exports.TestERC20Token__factory = exports.TestEAS__factory = exports.eip712 = exports.eip1271 = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.eip1271 = __importStar(require("./eip1271"));
exports.eip712 = __importStar(require("./eip712"));
var TestEAS__factory_1 = require("./TestEAS__factory");
Object.defineProperty(exports, "TestEAS__factory", { enumerable: true, get: function () { return TestEAS__factory_1.TestEAS__factory; } });
var TestERC20Token__factory_1 = require("./TestERC20Token__factory");
Object.defineProperty(exports, "TestERC20Token__factory", { enumerable: true, get: function () { return TestERC20Token__factory_1.TestERC20Token__factory; } });
var TestSchemaResolver__factory_1 = require("./TestSchemaResolver__factory");
Object.defineProperty(exports, "TestSchemaResolver__factory", { enumerable: true, get: function () { return TestSchemaResolver__factory_1.TestSchemaResolver__factory; } });
//# sourceMappingURL=index.js.map