# Meme Generator

Share jokes with your team!

## Requirements

You need a mongodb database and nodejs.

## Installing

First, install the dependencies:

```
npm install
```

Then, make a copy of the example options and set them based on your scenario:

```
cp options_example.json options.json
emacs options.json
```

Then, execute this line to launch the server:

```
node server/server.js --optionsFile=options.json | ./node_modules/.bin/bunyan
```
