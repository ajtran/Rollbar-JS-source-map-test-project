# Simple JS source map test project

This project generates source maps using the Rollbar JS sdk code.

# Usage

1. Open the hello_world_config.js and substitute the client token for the one in the Rollbar project you want the error to be reported to

2. Run hello_world.html

3. Generate an error by either clicking on 'Create an error' or by adding a number smaller than 5 and clicking on the 'Test Input' button


Minified JS can be generated by: `uglifyjs --compress --mangle -- error_button.js`

Source map can be generated by: `uglifyjs error_button.js --source-map "includeSources=true" --output error_button.min.js`

Let me know if you have questions
