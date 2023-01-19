# Custom Commands for nightwatchJS which can't be handled natively
This package allows you to perform some custom commands which natively fails in nightwatch.

### Commands Available :

#### 1. Custom Click -
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

//from inside page object
this.customClick('@locatorReference', "Custom Message")
this.customClick('#locatorValueAsString', "Custom Message" )

```
@method customClick


@param {string|Object} definition The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).

@param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.

#### 2. Is Element Present -
Check if an element is present and returns true or false. 

##### Usage

```
it('Usage of is Elem present',  client => {
  if( client.isElemPresent('@locatorReference', 6000, "Custom Message")){
     //perform some action
  } else {
     // perform some other action
 }
    if( client.isElemPresent('#locatorReference', 6000, "Custom Message")){
    //perform some action
  } else {
     // perform some other action
 }
  });
```

 @method isElemPresent

@param {string|Object} definition The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
  
@param {number} [time] Time in milliseconds to wait for the element to be present, By default waits for 2000 milliseconds

@param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.

@returns {boolean}

#### 3. Custom Log -
When console.log() is used from nightwatch tests , it makes asynchronous call. Use customLog() to replicate synchronous behaviour. Helpful for debugging

##### Usage

```
it('Usage of customLog',  client => {
  ------code---
  client.customLog("Custom Message")
});
```
@method customLog
@param {string} definition The log message which needs to be printed

#### 4. Is Element In Viewport -
Check if an element is in viewport and returns true or false. Useful to test scenarios when clicking on certain tile lands on certain section of the webpage. Also can be used to certain certain section is anchored while scrolling the webpage

##### Usage

```
 it('Usage of isElementInViewport',  client => {
    if(client.isElementInViewport('css locator'))
 
  });
 ```

 @method isElemInViewport

@param {string} definition The selector (CSS) used to locate the element. Supports only css for now

@returns {boolean} Can be true or false depending on if the element is in active view in browser

#### 5. wheel scroll to element -
Use selenium wheel action to scroll to a certain webelement

##### Usage

```
  it('Usage of customWheelScrollToView',  client => {
    client.customWheelScrollToView('css locator/selenium webelement')
 
  });
 ```

 @method customWheelScrollToView

@param {string/object} definition The selector (CSS) or selenium webelement used to locate the element.


### Installation 

For nightwatch v2, install

npm i nightwatch-custom-commands

### Configuration

Add custom command to your nightwatch.conf.js. You can refer the [nightwatch documentation](https://nightwatchjs.org/guide/reference/settings.html)

`custom_commands_path: ['./node_modules/nightwatch-custom-commands/command'
  ],
`





