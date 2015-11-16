# Stormpath Express AJAX Sample

**NOTE**: This example is NO LONGER VALID. Since this was built, the Stormpath
Express.js library has significantly changed. Please only use this project as a
reference for historical purposes.

A StormPath/Express app with custom registration routes (disabling the built-in stuff).

 - A POST /register route which takes in the user data, and creates an account.
 - A GET /register route which shows the register form, and uses jQuery to submit it and create the user.

Add your API key ID, secret, an app ID (note this is distinct from your app name) into `app.js`, then run `app.js`

Then visit http://localhost:3000/register
