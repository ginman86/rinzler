module.exports = function (grunt) {
    grunt.registerTask('build', [
        'compass:dev',
        'concat:dev'
    ]);
};
