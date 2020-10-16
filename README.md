# This Week In Marvel History

Marvel comics has opened up a series of APIs to their complete publishing history database. Providing this data to comics fans is very exciting, but with so much data available, it can be hard to find interesting information if you are not looking for something specific.

**This Week In Marvel History** is a web app that will show the user notable Marvel titles released historically corresponding to a specific date. Comics release weekly, so a spread of 7 days is necessary to ensure that there will always be something interesting returned.

The user selects a month and date, and all notable titles released historically within a week of the inputted date will be shown.

* Example: When the user selects November 8th, they will see that **Fantastic Four #1** was released that week in 1961.

What constitues a 'notable' title?
* First Issues (i.e. 'Amazing Spider-Man  #1')
* 'Event' or 'Crossover' issues (i.e. 'Avengers vs X-Men') (coming soon!)
* First Appearances (i.e. 'Incredible Hulk vol 1, #180', first appearance of the character Wolverine) (coming soon!)

## Technologies

* Marvel APIs called with jQuery, processed with JavaScript
  * Marvel's API is free and open, though limited to 3000 calls per day.
* DOM manipulation with jQuery
* Responsive design and styling with SASS, jQuery
* HTML forms for user to submit the requested date

