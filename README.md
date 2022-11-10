# Custom Commands for nightwatchJS which can't be handled natively
This package allows you to perform some custom commands which natively fails in nightwatch.

### Commands Available :

#### Custom Click -
Use when nighwatch native click fails

##### Usage
```
it('Usage of custom click',  client => {
  client.customClick('#locatorValueAsString', "Custom Message" )
});

// pageObject is reference to your page object
it('Usage of custom click',  client => {
  pageObject.customClick('@locatorReference', "Custom Message")
  pageObject.customClick('#locatorValueAsString', "Custom Message" )
});

// inside page object
this.customClick('@locatorReference', "Custom Message")
this.customClick('#locatorValueAsString', "Custom Message" )

```
@method customClick


@param {string|Object} definition The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).

@param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.

### Installation 

For nightwatch v2, install

npm i nightwatch-custom-commands

### Configuration

Add custom command to your nightwatch.conf.js. You can refer the [nightwatch documentation](https://nightwatchjs.org/guide/reference/settings.html)

`custom_commands_path: ['./node_modules/nightwatch-custom-commands/command'
  ],
`





