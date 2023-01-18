* Declaration 
```js
/// <reference types="cypress" />
```
* Create a test group
```js
describe("Notion tests", () => { ...});
```
* Creating testcase
```js
it("Check Landing Page", () => {
    cy.contains("Notion");
  });
```
* Assertions
and
should 

* Actions
```js
check
clear
click
dblclick
rightclick
select
selectFile
trigger
type
uncheck
```