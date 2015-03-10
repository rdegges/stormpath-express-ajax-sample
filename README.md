# Stormpath Express AJAX Sample

A StormPath/Express app with custom registration routes (disabling the built-in stuff).

 - A POST /register route which takes in the user data, and creates an account.
 - A GET /register route which shows the register form, and uses jQuery to submit it and create the user.

Add your API key ID, secret, an app ID (note this is distinct from your app name) into `app.js`, then run `app.js`

Then visit http://localhost:3000/register
