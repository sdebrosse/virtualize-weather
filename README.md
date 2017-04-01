# virtualize-weather
Demonstrates simulation using service virtualization to help with testing Alexa Skills and AWS Lambda functions. See [this blog post](https://blog.parasoft.com/service-virtualization-iot) for all the details.

## Getting Started

This project was adapted from three repositories:
1. Brian's Donohue's [Build your First Alexa Skill](https://github.com/Donohue/alexa). You can take a look at [his blog](https://medium.com/@bthdonohue/build-your-first-alexa-skill-8a37dc3103d6) for details about getting started with developing Alexa Skills.
2. The [slack-lambda-weather](https://github.com/ryanray/slack-lambda-weather) repository. See [Ryan Ray's blog](http://www.ryanray.me/serverless-slack-integrations) about setting integrating it with Slack.
3. The [aws-lambda-starter](https://github.com/ryanray/aws-lambda-starter) repository. See docs for more info on commands.

### Prerequisites
1. [AWS CLI](https://aws.amazon.com/cli/)
2. Execution Role ARN for your Lambda
3. Add any necessary elements and values to `config.json`. Although this project doesn't require anything, this is where you would put any api key's and other secret info that your lambda may need.

To run tests you'll want to install jasmine and watch globally
`npm install -g jasmine watch`

Then you can run tests while watching files for changes:
`npm run test:watch`

### Commands
* `npm run create EXECUTION_ROLE_ARN` build and create your Lambda on AWS
* `npm run invoke {\"type\": \"sweet\"}` invoke your deployed Lambda with inline json
* `npm run localInvoke` invoke index.js with mock event json
* `npm run deploy` build and deploy to AWS

### Execution Role ARN(Amazon Resource Name)
Before you can create your Lambda you need to create an execution role. If you did any of the Lambda hello world tutorials in the AWS console you should already have a role created. Either way you need to goto the AWS Console -> Security & Identity -> IAM -> Roles. Get the ARN of `lambda_basic_execution` or create a new role based on `role.example.json` and get the ARN from that. The full ARN looks something like `arn:aws:iam::YOUR_ACCOUNT_ID:role/lambda_basic_execution`.


## TODO
* Fix the tests
