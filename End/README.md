# Output/End - Nexss PROGRAMMER 2.x

Display final/end message, errors, warnings if there are in the data.
It ends a program if conditions are met.

- **--\_if**
- **--\_ifNot**
- **--\_ifNotExists**
- **--\_ifExists**

Also you can use type of message: "error", "debug", "info", "warn", "trace", "ok" eg. --\_type=error

## Examples

```sh
# will display debug information
nexss Output/End "works on Ubuntu"  --_if="0" --_debug

# multiple lines. Every parameter is displayed on the next line
nexss Output/End "my text 1\nmytext 2" "some other text next line" "next line"

# just ends only if there is stderr field
Output/End "It's wroong" --_if=stderr --_type=error
```
