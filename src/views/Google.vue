<!DOCTYPE html>
<html>
<head>
  <title>OAuth2.0 Sign in</title>
</head>
  <body>
  <script type="text/javascript">
      var GoogleAuth; // Google Auth object.
    function initClient() {
      gapi.client.init({
          'apiKey': 'AIzaSyCWrBeleOlceybV1Xo9GqmYBf6LnvwW38M',
          'clientId': '594048284716-ds6bdvimvhp94bs9799qp8baev8ar9c8.apps.googleusercontent.com',
          'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
      }).then(function () {
          GoogleAuth = gapi.auth2.getAuthInstance();

          // Listen for sign-in state changes.
          GoogleAuth.isSignedIn.listen(updateSigninStatus);
      });
      var isAuthorized;
      var currentApiRequest;

      /**
       * Store the request details. Then check to determine whether the user
       * has authorized the application.
       *   - If the user has granted access, make the API request.
       *   - If the user has not granted access, initiate the sign-in flow.
       */
      function sendAuthorizedApiRequest(requestDetails) {
        currentApiRequest = requestDetails;
        if (isAuthorized) {
          // Make API request
          // gapi.client.request(requestDetails)

          // Reset currentApiRequest variable.
          currentApiRequest = {};
        } else {
          GoogleAuth.signIn();
        }
      }
      /**
       * Listener called when user completes auth flow. If the currentApiRequest
       * variable is set, then the user was prompted to authorize the application
       * before the request executed. In that case, proceed with that API request.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          isAuthorized = true;
          if (currentApiRequest) {
            sendAuthorizedApiRequest(currentApiRequest);
          }
        } else {
          isAuthorized = false;
        }
      }
    }
    </script>
  </body>
</html>  
