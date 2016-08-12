(WIP!)

A simple plugin to show a plus button, as seen in medium.com
Usage: cfr the demo/demo.js file. 

``` javascript
import {ProseMirror} from "prosemirror/dist/edit/main"
import {exampleSetup} from "prosemirror/dist/example-setup"
import {defaultMarkdownParser} from "prosemirror/dist/markdown"
import {Plus} from "prosemirror-plugin-plus" // not yet ... 

new ProseMirror({
  place: textarea,
  doc: defaultMarkdownParser.parse('Hello **world** with some\nline and a [link](doc/doc1)'),
  plugins: [
    exampleSetup.config({
      tooltipMenu: true
    }),
    new Plus
  ]
})
```

## install

    // todo 
    // npm install prosemirror-plugin-plus
    
## run the demo

    npm install prosemirror
    npm install
    npm run demo

## build & export
todo
    
