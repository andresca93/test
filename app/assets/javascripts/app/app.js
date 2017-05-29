var app = angular.module('app', [
  'ngStorage'
]);

app
.config(function($localStorageProvider) {
  $localStorageProvider.setKeyPrefix('app');
});