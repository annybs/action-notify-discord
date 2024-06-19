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
const core = __importStar(require("@actions/core"));
const required = true;
function getInputs() {
    const data = {
        color: {
            cancelled: core.getInput('color-cancelled') || undefined,
            failure: core.getInput('color-failure'),
            success: core.getInput('color-success'),
        },
        repository: core.getInput('repository', { required }),
        result: core.getInput('result', { required }),
        run: {
            id: core.getInput('run-id', { required }),
            number: core.getInput('run-number', { required }),
        },
        webhook: {
            url: core.getInput('webhook-url', { required }),
        },
        workflow: core.getInput('workflow', { required }),
    };
    return data;
}
exports.default = getInputs;
