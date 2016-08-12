import { PlusButton } from "./plusButton"

export class Plus {
	constructor(pm, options) {
		this.pm = pm
		
		//setup default options and override with passed in options
		this.options = this.defaultOptions
		for(let option in options) this.options[option] = options[option]

		this.selectedBlockMenu = this.options.selectedBlockMenu

		this.plusButton = new PlusButton();
		//build up
		console.log('constructor!');
	}

	show(content, coords){
		console.log('>show', content, coords);
		this.plusButton.show();
	}

	selectionCoords() {
		console.log('>selectionCoords');
    return {left: 0, top: 0};
  }

  linkUnderCursor() {
  	console.log('>linkUnderCursor');
    let head = this.pm.selection.head
    if (!head) return null
    let marks = this.pm.doc.marksAt(head)
    return marks.reduce((found, m) => found || (m.type.name == "link" && m), null)
  }

	update(){
		console.log('@update focus:', this.pm.hasFocus());
		let {empty, node, $from, to} = this.pm.selection, link
		

		let realPos = this.pm.coordsAtPos(this.pm.selection.from)

		this.plusButton.move(this.pm.coordsAtPos(this.pm.selection.from));
		
		console.log('from:',this.pm.selection.from)
		if (!empty) {
    	console.log('  is NOT empty')
   	}
    //   return () => {
    //     let coords = node ? this.nodeSelectionCoords() : this.selectionCoords()
    //     let showBlock = this.selectedBlockMenu && $from.parentOffset == 0 && $from.end() == to
    //     return () => this.show(showBlock ? this.selectedBlockContent : this.options.inlineContent, coords)
    //   }
		
    // if (!this.pm.hasFocus()) {
    //   this.plusButton.hide();
    // } else {
    // 	this.plusButton.show();
    // }
    // } else if (node && node.isBlock) {
    // 	console.log('  is block')
    //   return () => {
    //     let coords = this.nodeSelectionCoords()
    //     return () => this.show(this.options.blockContent, coords)
    //   }
    // } else if (!empty) {
    // 	console.log('  is empty')
    //   return () => {
    //     let coords = node ? this.nodeSelectionCoords() : this.selectionCoords()
    //     let showBlock = this.selectedBlockMenu && $from.parentOffset == 0 && $from.end() == to
    //     return () => this.show(showBlock ? this.selectedBlockContent : this.options.inlineContent, coords)
    //   }
    // } else if (this.selectedBlockMenu && $from.parent.content.size == 0) {
    // 	console.log('  bof')
    //   return () => {
    //     let coords = this.selectionCoords()
    //     return () => this.show(this.options.blockContent, coords)
    //   }
    // } else if (this.options.showLinks && (link = this.linkUnderCursor())) {
    // 	console.log('  link')
    //   return () => {
    //     let coords = this.selectionCoords()
    //     return () => this.showLink(link, coords)
    //   }
    // } else {
    // 	console.log('close')
    //   // this.tooltip.close()
    // }
	}
	destroy(pm) {
		//tear down
		this.updater.detach();
	}

	attach(pm) {
		console.log('attach()', pm)
		this.pm = pm;
		this.plusButton.attach(pm);
		this.updater = pm.updateScheduler([
      pm.on.change,
      pm.on.selectionChange,
      pm.on.blur,
      pm.on.focus
    ], () => this.update());


	}

	get defaultOptions() {
		return {
			anOption: true
		}
	}
	
}
