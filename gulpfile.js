"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const spawn = require('child_process').spawn;
const mocha = require('gulp-mocha');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
var tsSrcProject = ts.createProject('tsconfig.json', {
  sourceMap: true
});
var tsTestProject = ts.createProject('tsconfig.json', {
  sourceMap: true
});
let node;

gulp.task('clean',()=>
  gulp.src('.build/**/*.*', {read: false})
      .pipe(clean())
);

gulp.task('build:ts',()=> {
  var tsResult = gulp.src(['./src/**/*.ts', './typings/index.d.ts'])
      .pipe(sourcemaps.init())
      .pipe(ts(tsSrcProject));

  return tsResult.js.pipe(sourcemaps.write('.', {sourceRoot: './src'}))
      .pipe(gulp.dest('./.build/src'));
});

gulp.task('build:test',()=> {
  var tsResult = gulp.src(['./test/**/*.ts', './typings/index.d.ts'])
      .pipe(sourcemaps.init())
      .pipe(ts(tsTestProject));

  return tsResult.js.pipe(sourcemaps.write('.', {sourceRoot: './test'}))
      .pipe(gulp.dest('./.build/test'));
});

gulp.task('watch-and-start:ts',['build-and-start:ts'],()=>
  gulp.watch('src/**/*.ts',['build-and-start:ts'])
);

gulp.task('build-and-start:ts',['build:ts'],()=>{
  if(node) node.kill();
  node = spawn('node',['.bin/server.js'],{stdio:'inherit'});
  node.on('success',()=>{
    console.log('success');
  });
});

gulp.task('test',['build:src','build:test'],()=>{
  return  gulp.src(['./.build/test/**/*.js'])
              .pipe(mocha({timeout:20000}));
});

gulp.task('build:src',['build:ts']);
gulp.task('dev',['watch-and-start:ts']);
