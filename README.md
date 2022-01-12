### Project implementations
I really struggled with this requirement: "create an API endpoint to retrieve users who only speak French" as all users in the database speak a fixed set of 5 languages. I assumed the requirement was right, so it took me a little while to understand that my query was not the problem. 
As for API endpoints, maybe I should have created some, but I really didn't find it necessary since the filtering could be done in a couple of lines.
Another big struggle was "move over from React to EJS".
I appreciated the opportunity to learn about EJS, but I really hope it woudn't be preferred over the powerful, clean and tidy React.
As for the UI, basic implementation with a little help from https://materializecss.com/


### Tasks
* create API endpoint to retrieve user information in JSON format
* use this information to create a page to display their information
    * this page should contain a filter to group users by at least one property
    * the project currently support EJS but feel free to use any templating engine
* create an API endpoint to retrieve users who only speak French:
    * use an aggregate query to do this
* create an API endpoint to retrieve users who speak the same set of 5 unique languagues

You will have to do the following (and more) to get started with this:
* write a model file for the database
* connect to the database

For the front end components, please move over from React to EJS.

You have a week from when you get access to this repository to complete the tasks. Please work on a different branch and make a pull request when you finish.
