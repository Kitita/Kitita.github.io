const ghpages = require('gh-pages');

ghpages.publish('out', {branch: 'master'}, function(err) {
  console.log(arguments, err)
});
