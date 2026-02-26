---
title: Overview
description: Save notes to mindpad directly from your AI assistant using the Model Context Protocol (MCP).
---

The mindpad MCP server lets you save notes directly from AI assistants like [Claude Desktop](https://code.claude.com/docs/en/desktop) and [Cursor](https://cursor.com) — without leaving your workflow.

<Aside type="tip">
  Your notes are encrypted on our servers — we never store them in plain text.
</Aside>

## Setup

<Steps>

1. **Generate a Personal Access Token**

   Go to [mindpad](https://www.mindpad.eu?utm_source=docs) → Account Settings → API and generate a Personal Access Token. Copy it — it's only shown once.

2. **Add to your AI assistant**

   Add the following to your MCP client config:

    ```json
    {
      "mcpServers": {
        "mindpad": {
          "command": "npx",
          "args": ["-y", "@mindpad/mcp"],
          "env": {
            "MINDPAD_PAT": "your-pat-here"
          }
        }
      }
    }
    ```

3. **Restart your AI assistant**

   Your assistant will now have access to the mindpad tools.

</Steps>

## Usage

Just talk naturally — your assistant will save notes when you ask:

- *"Save a note about today's meeting"*
- *"Jot this down: pick up groceries !errand"*
- *"Remember that the API key expires on Friday !work"*

Tags can be added inline using `!tagname`.

## Tools

### `save_note`

Saves a note to your mindpad account.

| Parameter | Type     | Required | Description                                                      |
| --------- | -------- | -------- | ---------------------------------------------------------------- |
| `content` | `string` | Yes      | The note content in markdown. Use `!tagname` to add tags inline. |

**Example response:** `Note saved to mindpad.`

## Authentication

The MCP server authenticates using a Personal Access Token (PAT) passed via the `MINDPAD_PAT` environment variable. The token is sent as a `Bearer` token to the mindpad API on every request.

<Aside type="caution">
  Keep your PAT secret. Anyone with access to it can save notes to your account. You can revoke tokens at any time from Acconut Settings → API.
</Aside>

## Privacy

The MCP server forwards the note content you provide to the mindpad API.

When using the web app, notes are encrypted client-side before being sent to the server. When using the API (including via MCP), notes are encrypted server-side before storage.

The AI assistant never has access to your existing notes or your encryption key. It can only save new content that you explicitly instruct it to create.