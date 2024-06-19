# Notify Discord Action

A simple workflow to send a simple success, failure, or cancellation notification for a GitHub Action.

Copy the following into your workflow:

```yaml
notify:
  name: Notify Discord
  uses: annybs/notify-discord@develop
  needs: YOUR_JOB_NAME
  if: ${{ always() }}
  with:
    discord-webhook: ${{ secrets.DISCORD_WEBHOOK }}
    repository: ${{ github.repository }}
    result: ${{ needs.YOUR_JOB_NAME.result }}
    run_id: ${{ github.run_id }}
    run_number: ${{ github.run_number }}
    workflow: ${{ github.workflow }}
```

- Ensure a `DISCORD_WEBHOOK` secret is available to your repository (it doesn't have to use this name)
- Replace `YOUR_JOB_NAME` with the name of the job you want to send notifications for
