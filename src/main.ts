import { WebhookClient } from 'discord.js'
import getInputs from './inputs'

async function main() {
  const inputs = getInputs()

  let colorStr = inputs.color.cancelled
  if (inputs.result === 'failure') colorStr = inputs.color.failure
  else if (inputs.result === 'success') colorStr = inputs.color.success

  const color = colorStr && parseInt(colorStr) || undefined

  const title = inputs.repository

  const url = `https://github.com/${inputs.repository}/actions/runs/${inputs.run.id}`
  let description = `${inputs.workflow} [#${inputs.run.number}](${url}) cancelled`
  if (inputs.result === 'failure') description = `${inputs.workflow} [#${inputs.run.number}](${url}) failed`
  else if (inputs.result === 'success') description = `${inputs.workflow} [#${inputs.run.number}](${url}) cancelled`

  // https://discord.js.org/docs/packages/discord.js/14.15.3/WebhookClient:Class
  const client = new WebhookClient({ url: inputs.webhook.url })
  await client.send({
    embeds: [
      { color, title, description },
    ],
  })
}

main()
