# Send Discord Workflow Notification

A simple GitHub action to send a success, failure, or cancellation notification for your GitHub workflow.

## Usage

Copy the following into your workflow:

```yaml
notify:
  name: Send Discord workflow notification
  uses: annybs/action-notify-discord@v1
  needs: YOUR_JOB_NAME
  if: ${{ always() }}
  with:
    repository: ${{ github.repository }}
    result: ${{ needs.YOUR_JOB_NAME.result }}
    run-id: ${{ github.run_id }}
    run-number: ${{ github.run_number }}
    webhook-url: ${{ secrets.DISCORD_WEBHOOK }}
    workflow: ${{ github.workflow }}
```

Set or replace `secrets.DISCORD_WEBHOOK` and `YOUR_JOB_NAME` as applicable for your workflow.

## References

- <https://github.com/actions/typescript-action>
