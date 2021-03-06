# Quotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

This is a quotes application that is supposed to allow a user to input quotes, upvote, downvote or delete them.

#### Author

 ****Louise Manyara****&trade; (01/04/2020)

## Description

It enables a user to input quotes, upvote, downvote or delete quotes from their dashboard.
 It has a form component where the user enters the quote, name of author and their name which is then displayed on the quote display component. They click the upvote button to upvote, downvote button to downvote.The quote with the highest upvote is displayed as 'Quote of the day'. One can also see how long the quote has been on the site.  


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Behavior Driven Development
<table>
    <tr>
      <th>Behavior</th> 
      <th>Input</th> 
      <th>Output</th>   
    </tr>
    <tr>
        <td>Show quote info</td>
        <td>Input quote and author</td>
        <td>Adds info to the component</td>
    </tr>
    <tr>
        <td>Submit quote</td>
        <td>Click submit button</td>
        <td>Quote is added to the quote list</td>
    </tr>
    <tr>
        <td>Upvote and Downvote</td>
        <td>Clcik upvote and downvote button</td>    
        <td>Adds or deducts quotes</td>
    </tr>
    <tr>
        <td>Show time</td>
        <td>Click the button</td>
        <td>Show track since whe quote is submitted</td>
    </tr> 
    <tr>
        <td>Show highest upvote </td>
        <td>Adds vote on button click</td>
        <td>Quote with the highest upvote is highlighted</td>
    </tr>   
    <tr>
        <td>Delete </td>
        <td>Click delete icon</td>
        <td>Quote is deleted</td>
    </tr>
</table>


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
