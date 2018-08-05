// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    newsApiUrl: 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3e882095547745c9a17929e5e269ea8d'
};
