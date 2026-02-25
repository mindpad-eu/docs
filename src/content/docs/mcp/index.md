---
title: Overview
description: Save notes to mindpad directly from your AI assistant using the Model Context Protocol (MCP).
---

import { Aside, Steps, Tabs, TabItem } from '@astrojs/starlight/components';

The mindpad MCP server lets you save notes directly from AI assistants like Claude Desktop and Cursor — without leaving your workflow.

<Aside type="tip">
  Your notes are end-to-end encrypted on your device before they sync. mindpad cannot read them, and neither can your AI assistant — it only sends the content you tell it to save.
</Aside>

## Setup

<Steps>

1. **Generate a Personal Access Token**

   Go to [mindpad](https://www.mindpad.eu?utm_source=docs) → Settings → API and generate a Personal Access Token. Copy it — it's only shown once.

2. **Add to your AI assistant**

   Add the following to your MCP client config:

   <Tabs>
     <TabItem label="Claude Desktop">
       Open `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows) and add:

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
     </TabItem>
     <TabItem label="Cursor">
       Open Cursor Settings → MCP and add the same configuration block.
     </TabItem>
   </Tabs>

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

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | `string` | Yes | The note content in markdown. Use `!tagname` to add tags inline. |

**Example response:** `Note saved to mindpad.`

## Authentication

The MCP server authenticates using a Personal Access Token (PAT) passed via the `MINDPAD_PAT` environment variable. The token is sent as a `Bearer` token to the mindpad API on every request.

<Aside type="caution">
  Keep your PAT secret. Anyone with access to it can save notes to your account. You can revoke tokens at any time from Settings → API.
</Aside>

## Privacy

The MCP server forwards your note content to the mindpad API, where it is encrypted on your device before syncing. The AI assistant never has access to your existing notes or encryption key — it can only save new content you explicitly ask it to.