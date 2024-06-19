import { WebhookClient } from 'discord.js'
import getInputs from './inputs'

async function main() {
  const inputs = getInputs()

  const title = inputs.repository
  const url = `https://github.com/${inputs.repository}/actions/runs/${inputs.run.id}`

  let color: number | undefined
  let description: string

  if (inputs.result === 'failure') {
    color = parseInt(inputs.color.failure)
    description = `${inputs.workflow} [#${inputs.run.number}](${url}) failed`
  } else if (inputs.result === 'success') {
    color = parseInt(inputs.color.success)
    description = `${inputs.workflow} [#${inputs.run.number}](${url}) succeeded`
  } else {
    color = undefined
    description = `${inputs.workflow} [#${inputs.run.number}](${url}) cancelled`
  }

  // https://discord.js.org/docs/packages/discord.js/14.15.3/WebhookClient:Class
  const client = new WebhookClient({ url: inputs.webhook.url })
  await client.send({
    embeds: [
      { color, title, description },
    ],
  })
}

main()
