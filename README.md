# ITCSS boilerplate

This is a sample project using SASS with ITCSS, Bliss standards and
a living style guide with SC5

## How to run

```sh
npm install
gulp
```

The gulp tasks will compile the sass files and copy the compiled file to public/css
also, will run the SC5 styleguide tool

## URLS

```sh
http://localhost:3000   - public/ instance
http://localhost:3002   - browser sync instance
http://localhost:3003   - living styleguide
```

## ITCSS standard pyramid implementation sample

According to ITCSS, all files should reside in one folder
in this case, we split every layer in different folders.
but, we added created the file names with the appropiated layer

## Structure

### SASS
the styles used for this living style guide is under app/assets/stylesheets
the entry point is application.scss, this is in charge of load every ITCSS layer
and also, create the top level indexes for the style guide in the KSS syntax

##
