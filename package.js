Package.describe({
  name: 'tomsen:oauth2-accounts-gitlab',
  version: '0.0.2-opendesign',
  summary: 'OAuth2 for Gitlab',
  git: 'https://github.com/tomsen-san/meteor-accounts-gitlab',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('tomsen:oauth2-gitlab@0.0.2-opendesign', ['client', 'server']);

  api.addFiles('accounts-gitlab.js');
});
