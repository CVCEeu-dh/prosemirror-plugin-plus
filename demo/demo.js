import {ProseMirror} from "prosemirror/dist/edit/main"
import {defaultSchema as schema} from "prosemirror/dist/model"
import {exampleSetup} from "prosemirror/dist/example-setup"
import {defaultMarkdownParser} from "prosemirror/dist/markdown"

import {Plus} from "../src/plugin"

let textarea = document.querySelector("#content")
console.log(defaultMarkdownParser)



const pm = window.pm = new ProseMirror({
  place: textarea,
  doc: defaultMarkdownParser.parse('Hello **world** with some\nline and a [link](doc/doc1)'),
  plugins: [
    exampleSetup.config({tooltipMenu: true}),
    new Plus
  ]
})