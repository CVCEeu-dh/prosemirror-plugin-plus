import { defineOption } from "prosemirror/dist/edit"
import { Plus } from "./plugin"

defineOption("Plus", false, (pm, value) => {
  if (pm.mod.plugin) {
    pm.mod.plugin.detach()
    pm.mod.plugin = null
  }
  if (value) {
    pm.mod.plugin = new Plus(pm, value)
  }
})
