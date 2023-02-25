// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: "/",
    ts: "/js"
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", {
      watch: "nodemon --watch ./templates/**/*.ejs --exec \"ejs ./templates/index.ejs -o ./static/index.html\" --ext ejs",
      cmd: "ejs ./templates/index.ejs -o ./static/index.html -w"
    }]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html"
    }
  ]
};
