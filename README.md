# acrobat-extend-trial
After your `Adobe Acrobat Pro DC` trial has ended, you can extend it by changing the trial serial numbers.

This simple node app will:
- extract your current trial serial numbers from your `application.xml` files
- increment the trial number by 10
- update your `applicaion.xml` files with the new trial serial number

The path to `applicaion.xml` files is held in config.json.


## install
- run `npm install` to install required npm packages

## configuration
- double check the paths to your `application.xml` files match the `config.json` config file

## run app
- run `node app`

![example](./node-app.gif)
