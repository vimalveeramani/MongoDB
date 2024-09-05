Configure mongosh by Using the config API
The config API allows you to configure the behavior of mongosh by retrieving, setting, and resetting configuration options. To get a list of the available configuration options, run the following command:

config
The available configuration options are as follows:

- `displayBatchSize` - The number of documents to display when using the `it` iterator.
- `maxTimeMS` - The maximum amount of time to allow a query to run.
- `enableTelemetry` - Whether to enable telemetry.
- `editor` - The editor to use when editing code.
- `snippetIndexSourceURLs` - The URLs to use when fetching snippet index files.
- `snippetRegistryURL` - The URL to use when fetching snippet registry files.
- `snippetAutoload` - Whether to automatically load snippets.
- `inspectCompact` - Whether to use compact mode when inspecting objects.
- `inspectDepth` - The maximum depth to use when inspecting objects.
- `historyLength` - The number of history entries to keep.
- `showStackTraces` - Whether to show stack traces when errors occur.
- `redactHistory` - Whether to redact sensitive information from history.
To retrieve the value of a specific configuration option, use the config.get() method. As an example, here’s the command to get the current value of enableTelemetry:

`config.get('enableTelemetry')` // returns true or false
To set the value of a specific configuration option, use the config.set() method, and pass in the name of the option and the value that you want to set:

`config.set('enableTelemetry', false)`
To reset the value of a specific configuration option, use the config.reset() method, and pass in the name of the option that you want to reset:

`config.reset('enableTelemetry')`
