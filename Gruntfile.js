module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                }
            },
            production: { 
                options: {
                    compress: true,
                },
                files: {
                    "dist/styles/main.min.css" : "src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ["src/styles/**/*.less"], 
                tasks: ["less:development"]
            }
        },
        clean: ["prebuild"],
        uglify: {
            target: {
                files: {
                    "dist/scripts/main.min.js" : "src/scripts/main.js"
                }
            }
        }
    })
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["less:production", "clean", "uglify"]);

}