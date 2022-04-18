# Phase3-Final-Project

## Sunil's Movie Reviews

### Overview

Sunil's Movie Reviews will be a webpage for users who want to see a list of movies and reviews associated with those movies.
Visitors will be able taken to the homepage of the site upon arrival and then can navigate through the various "pages" of the site via the navbar at the top of the page.
Users will also be able to submit a form to add a movie of their choice to the list of available movies. They will enter the movie's information as well as a link to a picture of the movie. Reviews from the available critics can also be added to any new movies.

### Features

The page will load the homepage with a navbar at the top.
The "Movies" button will bring up all available movies, where with the average critic score. A tomato will appear for any movie with an average score above 75%, and a thumbs down will appear next to the average score if it is below 75%. Clicking on the movie poster will reveal all publications that have reviewed the movie, as well as the score given.
The "Add Movie" tab will bring up a form that users can fill out to submit a new movie to the list. Any new movie added will immediately have an average critic score of 0% since no reviews have been added yet.
The "Critics" tab displays all the critics, as well as the publication they work for. If their name is clicked, all the movies they've reviewed along with the reviews will be displayed. Underneath each individual review two buttons will appear. An edit button to edit their original review, in case they change their mind about a movie, and a delete button to remove the review altogether. Lastly, underneath each critic will be a button to add a review. So when a new movie is added to the list, a user can add a review from a critic to that movie.

### Project Requirements

1. Sinatra based database with 3 models and "one-to-many" relationships - Movies, Reviews, and Critics
2. Active-Record used to interact with database
3. Create and Read actions for Movies model
4. Full CRUD capability for Reviews model
5. Separate react frontend application that interacts with the API to perform the CRUD actions
