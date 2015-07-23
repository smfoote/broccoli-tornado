var grunt = require('grunt');
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  babel: {
    dist: {
      options: {
          sourceMap: false
      },
      files: [
        {src: 'index.es6', dest: 'index.js'}
      ]
    }
  },
  eslint: {
    target: ['*.es6']
  }
});

grunt.registerTask('dist', ['eslint', 'babel:dist']);
grunt.registerTask('default', ['dist']);
