"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const inputs_1 = __importDefault(require("./inputs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const inputs = (0, inputs_1.default)();
        let colorStr = inputs.color.cancelled;
        if (inputs.result === 'failure')
            colorStr = inputs.color.failure;
        else if (inputs.result === 'success')
            colorStr = inputs.color.success;
        const color = colorStr && parseInt(colorStr) || undefined;
        const title = inputs.repository;
        const url = `https://github.com/${inputs.repository}/actions/runs/${inputs.run.id}`;
        let description = `${inputs.workflow} [#${inputs.run.number}](${url}) cancelled`;
        if (inputs.result === 'failure')
            description = `${inputs.workflow} [#${inputs.run.number}](${url}) failed`;
        else if (inputs.result === 'success')
            description = `${inputs.workflow} [#${inputs.run.number}](${url}) cancelled`;
        // https://discord.js.org/docs/packages/discord.js/14.15.3/WebhookClient:Class
        const client = new discord_js_1.WebhookClient({ url: inputs.webhook.url });
        yield client.send({
            embeds: [
                { color, title, description },
            ],
        });
    });
}
main();
