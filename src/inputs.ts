import * as core from '@actions/core'

const required = true

export default function getInputs() {
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
  }

  return data
}
