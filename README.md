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
