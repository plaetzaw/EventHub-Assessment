# EventHub Development Job Interview

Here we have a simple ToDo app, but a few things are broken or not quite right. Feel free to pick and choose which problems to complete or solve all of them if you can. This shouldn't take longer than 3 hours. If it does, just turn in what you have at the 3 hour mark.

The problems are listed in no particular order. Good luck!

## CSS Problems
- When you hover over a todo, there is a red **X** to the right of the item. Change this **X** to be white with a gray circle around it.
- Change the main content (i.e., the entire section containing the input, list, and filters) to legal-pad yellow (#FEF3C7). 
- Change the placeholder color in the "What needs to be done?" input to legal-pad blue (#009DD6).

## JavaScript Problems
- Double-clicking a todo should allow you to edit it. Add an event to enable this behavior.
- Clicking the **Clear Completed** button, should remove all checked-off todos. Implement this behavior by finishing the `clearCompleted` function in todoModel.js. 
- Hide the row containing the filters, item count, and clear completed button until there is at least one todo.
-  When **Active** is clicked, only non-checked todos should show. When **Completed** is clicked, only checked-off todos should show. Fix these filters.
- Change **items** in the items left counter to correctly reflect whether the number of active todos is plural or singular (e.g., 6 items, 1 item).

## Running

The app is built with [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) and compiled at runtime for a lighter and more fun code reading experience. As stated in the link, JSX is not mandatory.

To run the app, spin up an HTTP server (e.g. `python -m SimpleHTTPServer`) and visit http://localhost/.../myexample/.

*This sample application was originally written by the developers at [ToDoMVC](https://todomvc.com/). This is their [react example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react). The following are notes from their developers. Feel free to read for fun or to help you along the way, but otherwise, the rest of this can be ignored.*
