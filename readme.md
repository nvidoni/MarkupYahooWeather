# ProcessWire Markup Yahoo! Weather

Display weather forecast using Yahoo! Weather API in ProcessWire

![ProcessWire Markup Yahoo! Weather](https://raw.github.com/nvidoni/MarkupYahooWeather/master/screenshot.png)

## How to install

Unzip/copy module directory to /site/modules/ directory.

Click "Refresh" on ProcessWire Admin Modules page and Markup Yahoo! Weather will appear. Click "Install" button to install the module.

## How to use

You can call the module in two different ways:

This is a basic call that renders the module, use this if you want only one instance of the module shown with WOEID set in the module settings.

`<?php echo $modules->get('MarkupYahooWeather')->render(); ?>`

If you want to show multiple instances of the module, call it this way:

`<?php`

`$weather = $modules->get('MarkupYahooWeather');`

`$weather->woeid = 12587912; echo $weather->render();`

`$weather->woeid = 44418; echo $weather->render();`

`?>`

## Options

This module has the following options:

### Yahoo! Weather WOEID
WOEID (Where On Earth ID) is an unique identifier for each city, you can easily find WOEID by using this site: http://woeid.rosselliot.co.nz. **Default = Zagreb**

### Set Locale
Sets PHP locale, needed for localized date display. **Default = en_US.UTF-8**

### Set Encoding
Converts international date names to right format. **Default = ISO-8859-1**

### Date Format
Sets desired date output, formatted with PHP strftime function. **Default = %A, %d.%m.%Y.**

### Cache Time
Cache time in minutes, caches .xml file(s) retrieved from Yahoo! API and pulls the data locally. Default = **5 minutes**

### Display temperature in Fahrenheit instead of Celsius?
Show weather conditions in Celsius or Fahrenheit scale (temperature: C/F; wind speed: km/h, mph; sunrise and sunset: 24h, am/pm).

### Show 5 day forecast below current weather forecast?
Shows extended 5 day forecast, if unchecked, only current weather will be shown. **Default = Checked**

### Show wind direction and speed?
Shows wind direction and speed. **Default = Checked**

### Show sunrise and sunset time?
Shows sunrise and sunset time. **Default = Checked**

### Autoload script and stylesheet?
Renders script and stylesheet during page render, if you prefer to include them manually, turn this option off. **Default = Checked**

### Load script in the bottom of the page?
If "Autoload script and stylesheet" option is checked, you can select where script should be rendered automatically, before the end of head or body tag. **Default = Unchecked**

### Delete Weather Cache
Deletes locally stored and cached .xml file(s) from Yahoo! API for all instances of the module.

------
Copyright 2015 Nikola Vidoni