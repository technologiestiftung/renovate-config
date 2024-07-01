# @technologiestiftung/renovate-config

sharable renovate config for all our projects.

## Usage

Enable renovete-bot for your repo and add the following to `renovate.json`

```json
{
  "extends": ["github>technologiestiftung/renovate-config"]
}
```

or

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>technologiestiftung/renovate-config"],
  "baseBranches": ["staging"]
}
```

If you want to disable it but keep the config in your repo use this json

```json
{
  "enabled": false,
  "extends": ["github>technologiestiftung/renovate-config"]
}
```
 
