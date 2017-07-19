var app = angular.module('app', [
  'ngStorage',
  'pascalprecht.translate',
  'ngAutocomplete',
  'ngMap'
]);

// formula esplicita per evitare che in compressione del JS
//   app.config(function($localStorageProvider) {
// diventi
//   app.config(function(l) {
// Oppure applico il nome delle veriabili in
//   production.rb ANGULAR_VARIABLES = ['$scope', '$localStorage', '$sessionStorage', '$storage'];
// app.config(['$localStorageProvider', function($localStorageProvider) {
app
.config(function($localStorageProvider) {
  $localStorageProvider.setKeyPrefix('daaab');
})
.filter('to_trusted', function($sce){
  return function(text){ return $sce.trustAsHtml(text); };
})
.filter('newlines', function(text){
  return text.replace(/\n/g, '<br/>');
})
;