# molgenis.org
This repository contains the source and tools to build https://www.molgenis.org.

## Styling
We colorize SVG icons using Inkscape (where you can select an object and then paste a color onto it)

## Build 
You can build the project by installing Jekyll on your system:

### Mac
You need to install the following dependencies.

```gem install bundler jekyll jekyll-feed```

### Jekyll
We use Jekyll to generate the website. You can build the site with the following command.

```jekyll build```

In the directory ```_site``` the website can be viewed.

## Deploy
There are three flows in deploying the website

- Pull requests
- Merges with master
- Releases

### Pull requests
Pull requests will deployed on https://site.dev.molgenis.org. There you can view your result before it ventures forth to acceptance.

### Merges with master
Merges will be deployed on https://site.accept.molgenis.org. If it is truly what you want you can release it now.

### Releases
Releases will be deployed on https://www.molgenis.org and https://molgenis.org.