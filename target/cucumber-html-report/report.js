$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/FlighRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Register link functionlaity in Flight page",
  "description": "",
  "id": "testing-register-link-functionlaity-in-flight-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Checking the Register link on Home page",
  "description": "",
  "id": "testing-register-link-functionlaity-in-flight-page;checking-the-register-link-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I Open Mercury Flight Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Click on the Register link in the Home page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Register page should displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.openFlightApplication()"
});
formatter.result({
  "duration": 471028683,
  "error_message": "java.lang.NullPointerException\n\tat step_definitions.HomeSteps.openFlightApplication(HomeSteps.java:31)\n\tat ✽.Given I Open Mercury Flight Application(src/test/resources/features/FlighRegistration.feature:3)\n",
  "status": "failed"
});
formatter.match({
  "location": "HomeSteps.navigatetoregisterpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.registerpagedisplayed()"
});
formatter.result({
  "status": "skipped"
});
});