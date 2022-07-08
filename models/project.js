// v0.0.4

class Project {
  constructor(user_id, title, structure = "", projectId = null) {
    this.user_id = user_id
    this.admins = []
    this.title = title
    this.structure = structure.split("|")
    this.projectId = (projectId === null) ? this._generateProjectId(title) : projectId
  }

  _generateProjectId(title) {
    let out = ''
    if (title.length >= 11) {
      out = Buffer.from(title.slice(0,11)+Date.now(), 'base64')
    } else {
      let n = 11 - title.length
      let temp = title
      for (let i = 0; i < n; i++) temp += 'z'
      out = Buffer.from(temp+Date.now(), 'base64')
    }
    return out
  }

  getUserId() {
    return this.user_id
  }

  setUserId(newUserId) {
    this.user_id = newUserId
  }

  getAdmins() {
    return this.admins
  }

  setAdmins(newAdmins) {
    this.admins = newAdmins
  }

  getTitle() {
    return this.title
  }

  setTitle(newTitle) {
    this.title = newTitle
  }

  getStructure() {
    return this.structure
  }

  setStructure(newStructure) {
    this.structure = newStructure
  }

  getProjectId() {
    return this.projectId
  }

  addDocument(doc) {
    this.structure.push(doc)
  }

  remDocument(doc) {
    // TODO: Not deleting, fix this
  }

  display() {
    console.log({structure: this.structure})
  }

  // for use in second api
  writeFiles() {
    console.log(this.structure)
  }
}

module.exports = Project