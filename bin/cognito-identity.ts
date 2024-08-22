#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CognitoIdentityStack } from "../lib/cognito-identity-stack";

const app = new cdk.App();
new CognitoIdentityStack(app, "CognitoIdentityStack", {});
