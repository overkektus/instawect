var syntax = "scss"; // Syntax: sass or scss;

var gulp = require("gulp"),
  gutil = require("gulp-util"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cleancss = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  rsync = require("gulp-rsync");

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false,
    open: false,
    // online: false, // Work Offline Without Internet Connection
    tunnel: true,
    tunnel: "instawect" // Demonstration page: http://projectname.localtunnel.me
  });
});

gulp.task("styles", function() {
  return gulp
    .src("app/" + syntax + "/**/*." + syntax + "")
    .pipe(sass({ outputStyle: "expanded" }).on("error", notify.onError()))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task("build-styles", function() {
  return gulp
    .src("app/" + syntax + "/**/*." + syntax + "")
    .pipe(sass({ outputStyle: "expanded" }).on("error", notify.onError()))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
    .pipe(gulp.dest("build/css"));
});

gulp.task("js", function() {
  return (
    gulp
      .src([
        "app/libs/jquery/dist/jquery.min.js",
        "app/js/common.js" // Always at the end
      ])
      .pipe(concat("scripts.min.js"))
      // .pipe(uglify()) // Mifify js (opt.)
      .pipe(gulp.dest("app/js"))
      .pipe(browserSync.reload({ stream: true }))
  );
});

gulp.task("build-js", function() {
  return gulp
    .src([
      "app/libs/jquery/dist/jquery.min.js",
      "app/js/common.js" // Always at the end
    ])
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});

gulp.task("rsync", function() {
  return gulp.src("app/**").pipe(
    rsync({
      root: "app/",
      hostname: "localhost",
      destination: "yousite/public_html/",
      // include: ['*.htaccess'], // Includes files to deploy
      exclude: ["**/Thumbs.db", "**/*.DS_Store"], // Excludes files from deploy
      recursive: true,
      archive: true,
      silent: false,
      compress: true
    })
  );
});

gulp.task("build", ["build-js", "build-styles"], function() {
  return gulp
    .src(["app/index.html", "ht.access", "img/*", "fonts/*"])
    .pipe(gulp.dest("build/"));
});

gulp.task("watch", ["styles", "js", "browser-sync"], function() {
  gulp.watch("app/" + syntax + "/**/*." + syntax + "", ["styles"]);
  gulp.watch(["libs/**/*.js", "app/js/common.js"], ["js"]);
  gulp.watch("app/*.html", browserSync.reload);
});

gulp.task("default", ["watch"]);
