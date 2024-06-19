# Send Discord Workflow Notification

A simple GitHub action to send a success, failure, or cancellation notification for your GitHub workflow.

## Usage

Copy the following into your workflow:

```yaml
notify:
  name: Send Discord workflow notification
  runs-on: ubuntu-latest
  needs: deploy
  steps:
    - name: Send notification
      uses: annybs/action-notify-discord@v1.0.0
      if: ${{ always() }}
      with:
        repository: ${{ github.repository }}
        result: ${{ needs.deploy.result }}
        run-id: ${{ github.run_id }}
        run-number: ${{ github.run_number }}
        webhook-url: ${{ secrets.DISCORD_WEBHOOK }}
        workflow: ${{ github.workflow }}
```

Set or replace `secrets.DISCORD_WEBHOOK` and `YOUR_JOB_NAME` as applicable for your workflow.

## References

- <https://github.com/actions/typescript-action>
