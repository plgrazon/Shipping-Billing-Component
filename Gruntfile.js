module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws');

  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "shippingbillingcomponent",
        region: "us-east-2"
      },
      build: {
        cwd: "static/",
        src: "bundle.js"
      }
    }
  });

  grunt.registerTask("default", ['s3']);
};
