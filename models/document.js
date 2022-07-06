class Document {
  constructor(title, contents, path = "") {
    this.title = title
    this.contents = contents
    this.path = path
  }

  setTitle(newTitle) {
    this.title = newTitle
  }

  getTitle() {
    return this.title
  }

  setContents(newContents) {
    this.contents = newContents
  }

  getContents() {
    return this.contents
  }

  setPath(newPath) {
    this.path = newPath
  }

  getPath() {
    return this.path
  }

  isDocument() {
    return true
  }

  display(detail = false) {
    if (detail) {
      console.log("feature not impl yet")
    } else {
      console.log({title: this.title, contents: this.contents})
    }
  }
}

module.exports = Document