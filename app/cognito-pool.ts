import { CognitoUserPool } from 'amazon-cognito-identity-js';

const cognitoPool = new CognitoUserPool({
  UserPoolId: 'us-east-1_jPNACfr3m',
  ClientId: '144mbeg2bfsmq450eefu9te2vm',
});

export default cognitoPool;
