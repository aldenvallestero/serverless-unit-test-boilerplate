# serverless-unit-test-boilerplate
This repository is created to help beginners understand the fast and easy way to score almost 100% of unit test coverage using the serverless framework. The code demonstrates how to send either SMS or Email Notification using Axios to call the service provider and Jest for testing.

## 🧱 System Architecture
![System Architecture](graphics/system-architecture-graphic.png)

## 🧪 Test Coverage Result
![Test Coverage Result](graphics/test-coverage-graphic.png)

## 💡 General Idea
In order to maximize the coverage of unit testing and prevent messy test files, simply **target only the handler files** by mocking a serverless event. From there you will be able to generate a base concept of unit testing and it would be easier to create test cases such as middleware handling, error catching and lots of elements in the service (deeper) layer of your services.

## 👣 Steps to take
1. Clone and try the boilerplate to fully understand the steps in unit testing the handler layer. Make sure that you have a good understanding in serverless and jest library so it would be more easier to follow the instructions.
2. Implement it to your own project by create an event generator file first which represents an https request when calling your handlers.
3. Create a payload file (Not included in the reposotory yet!) containing all your service needs.
4. Create test files and follow the index test file given here, add your event generator and payload for each test case.
5. Combine event generator and sample payloads / fixtures & call the handler file.

### 🤝 Dealing with 3rd Party APIs
To prevent slow, delayed and possible runtime error in your CI/CD pipeline, make sure to mock every possible 3rd Part API call responses for each test cases based on the expected result you want to have.

![Mock Axios](graphics/mock-axios-graphic.png)

From the image above, you will see that before the execution of this test file, axios is expected to return mock responses based on its configuration for each test cases.

Notice the sequence of test case above:
1. Mock 3rd Party API that uses Axios.
2. Set payload for mocked serverless event using the event generator.
3. Perform the unit testing directly hitting the handlers layer.
4. Expect the result.

It's that simple!

This skip the unnecessary business logic and focuses only on the unit testing and making sure that the legacy code is working properly.

A friendly reminder, don't forget to clear your axios mocks before moving to another test case, the image below shows you how to clear previous mock.

![Clear Mock](graphics/clear-mock-graphic.png)

### ❓ FAQs
**Where's the database explanation & why is it not included in the repository?**
Due to short amount of time I allocated to this repository, I will be preparing another push to this public repository ASAP.