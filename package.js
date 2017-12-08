Package.describe({
  name: 'framework7',
  version: '2.0.2',
  // Brief, one-line summary of the package.
 summary: 'Framework7 (v1.6.0) with Meteor. You can choose iOS or Android theme.',
  git: 'https://github.com/luxiaolin/framework7.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

});


Package.describe({
  name: 'luxiaolin:framework7',
  version: '2.0.2',
  summary: 'Framework7 (v2.0.2) with Meteor. You can choose iOS or Android theme.',
  git: 'https://github.com/luxiaolin/framework7.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.addFiles('framework7/dist/js/framework7.min.js', 'client');
  api.addAssets([
    'framework7/dist/css/framework7.css',
    'framework7/dist/css/framework7.ios.css',
    'framework7/dist/css/framework7.ios.min.css',
    'framework7/dist/css/framework7.md.css',
    'framework7/dist/css/framework7.md.min.css',
    'framework7/dist/css/framework7.min.css',
    'framework7/dist/css/framework7.rtl.css',
    'framework7/dist/css/framework7.rtl.ios.css',
    'framework7/dist/css/framework7.rtl.ios.min.css',
    'framework7/dist/css/framework7.rtl.md.css',
    'framework7/dist/css/framework7.rtl.md.min.css',
    'framework7/dist/css/framework7.rtl.min.css',
    'Framework7-Icons/css/framework7-icons.css',
    'Framework7-Icons/fonts/Framework7Icons-Regular.eot',
    'Framework7-Icons/fonts/Framework7Icons-Regular.ttf',
    'Framework7-Icons/fonts/Framework7Icons-Regular.woff',
    'Framework7-Icons/fonts/Framework7Icons-Regular.woff2'
  ], 'client');
});