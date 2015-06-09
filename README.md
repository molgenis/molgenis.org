# super alpha #

This is source code for the website of MOLGENIS, including docs etc.

# to generate the website

```
git clone https://github.com/molgenis/molgenis.org.git
cd molgenis.org
harp compile
```
you will find the generated website in folder ```www```

# harp reference
The site is generated using harp.

## basics

install npm and harp (once)
```
#on mac you can use brew http://brew.sh/
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)

#install node
brew install node

#install harp
sudo npm install -g harp
```

clone this repo (once)
```
git clone
```

during development, run harp server for live rendering
```
cd molgenis.org
$ harp server
```
will enable live view on http://localhost:9000

for deploy, compile the website and upload to server
```
$ harp compile
```
will generate the static pages in ~/www

#html layout using jade 
The layout is implemented using .jade templates (http://jade-lang.com/).
Below quick commands including access to harp data.

## jade basics

```
h1 my list
ul
  li first
  li second
```
just renders a h1 and a ul with nested li 

```
p: #[b some bold] some normal and #[i some italic] text
```
allows nested elements to be defined on one line

## render a javascript variable
```
#{myvalue}
```
or
```
p= myvalue
```
will render the value

## harp automatically provides _data.json

```
for value, key in public._data
  li
    a(href="#{key}") #{value.title}
```
will iterate over the hashmap in _data.json (local _data file overrides a global one) 

```
for value, key in public.articles._data
  li
    a(href="#{key}") #{value.title}
```
will iterate over the hashmap in folder + file articles/_data.json 

## style attributes

```
a(style={color: 'red', background: 'green'})
```
will render with style="color:red; background: green"

```
a.button
```
will render as a class="button"

```
a#main
```
will render as a id="main"

## commments

```
//blaat
```
will render a html comment

```
//-blaat
```
will not render a html comment

#css using less

css stylesheets are implemented in .less files (http://lesscss.org/)
See /res/css

# License
Copyright (c) 2002-, Morris Swertz, MOLGENIS Team, 
Contributors Documentation released under [Creative Commons](./public/LICENSE-CC).
Documentation source code released under the [MIT License](./public/LICENSE-MIT).
