# DEMO model

This folder is a sample model which is configured with all the basic routes (get, post, put, delete)
and the basic tests configured for each model. The idea is to copy paste this folder when creating a new
model so as to save time.

### Steps to setup a new model

- Copy paste the demo directory
- Rename the folder to the model name
- demo.routes.js -> rename demoRouter to <newModalName>Router
- Rename all files to the model name, remove the README.md if not needed
- Do a case sensitive find and replace for Demo (in the new model folder only)
- Do a case sensitive find and replace for demo (in the new model folder only)
- Register the new routes in app.js
- Register the documentation in doc/api/api.raml


### TODO automate the above (using bash?)