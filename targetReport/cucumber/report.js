$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Login into stackoverflow website2",
  "description": "I want to use this template to validate an existing user with their credentials2",
  "id": "login-into-stackoverflow-website2",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7906286700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into stackoverflow website with valid credentials2",
  "description": "",
  "id": "login-into-stackoverflow-website2;login-into-stackoverflow-website-with-valid-credentials2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website2",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Log in button2",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid username2",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid password2",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Submit button2",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User is taken to login page successfully2",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_stackoveflow_website2()"
});
formatter.result({
  "duration": 2490936400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_Log_in_button2()"
});
formatter.result({
  "duration": 745958600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_enters_a_valid_username2()"
});
formatter.result({
  "duration": 60822399,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //button[contains(text(), \u0027Log in with GitHub\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CJS-LAPTOP\u0027, ip: \u002710.1.10.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 85.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210114193053, moz:geckodriverVersion: 0.29.0, moz:headless: false, moz:processID: 32624, moz:profile: C:\\Users\\chris\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a87fee36-c68b-4a53-9093-793a07aec905\n*** Element info: {Using\u003dxpath, value\u003d//button[contains(text(), \u0027Log in with GitHub\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat cucumberframework.steps.LoginStep.user_enters_a_valid_username2(LoginStep.java:79)\r\n\tat ✽.And User enters a valid username2(Login2.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_enters_a_valid_password2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_the_Submit_buttonS2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_is_taken_to_login_page_successfully2()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into stackoverflow website",
  "description": "I want to use this template to validate an existing user with their credentials",
  "id": "login-into-stackoverflow-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5889844900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login into stackoverflow website with valid credentials",
  "description": "",
  "id": "login-into-stackoverflow-website;login-into-stackoverflow-website-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User is taken to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_stackoveflow_website()"
});
formatter.result({
  "duration": 2222341900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_Log_in_button()"
});
formatter.result({
  "duration": 764432000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_enters_a_valid_username()"
});
formatter.result({
  "duration": 111988600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_enters_a_valid_password()"
});
formatter.result({
  "duration": 67372801,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_clicks_on_the_Submit_button()"
});
formatter.result({
  "duration": 4640221700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_is_taken_to_login_page_successfully()"
});
formatter.result({
  "duration": 1869595300,
  "status": "passed"
});
});