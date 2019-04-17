// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
   
    apiKey: 'AIzaSyB9oVDKGzUhNxIEIekHqmYlz12FLCgUn2E',
    authDomain: 'base-chat-bdb1d.firebaseapp.com',
    databaseURL: 'https://base-chat-bdb1d.firebaseio.com',
    projectId: 'base-chat-bdb1d',
    storageBucket: 'base-chat-bdb1d.appspot.com',
    messagingSenderId: '399874111081'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
