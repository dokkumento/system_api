import Project from "./project"
const { exec } = require("child_process")

class Sysops {
  createProject(pj) {
    return this._makeProject(pj.getProjectId())
  }

  init(data) {
    // Needs Project and array of documents
    this._makeProject(pj.getProjectId())
    data.mkFiles.forEach(e => {
      this._makeDir(e.path)
      this._makeMDFile(e.path, e.title, e.contents)
    })
    this._generateDockerComposeFile(data.project.projectId)
  }

  updateFiles(data) {
    data.mkFiles.forEach(e => {
      this._makeMDFile(e.path, e.title, e.contents)
    })
  }

  deploy(projectId) {
    return this._runContainer(projectId)
  }

  __execCmd(cmd) {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        (error) ? console.error(`error: ${error.message}`) : ""
        return
      }
      if (stderr) {
        (stderr) ? console.error(`stderr: ${stderr}`) : ""
        return 
      }
      console.log(`stdout: ${stdout}`)
    })
  }

  _makeDir(path) {
    return this.__execCmd(`mkdir -p ${path}`)
  }

  _makeMDFile(path, title, contents) {
    return this.__execCmd(`echo '${contents} > ${path}/${title}.md`)
  }

  _makeProject(projectId) {
    return this.__execCmd(`mkdocs new ${projectId}`)
  }

  _delProject(projectId) {
    return this.__execCmd(`rm -rf ${projectId}`)
  }

  _delFile(path, title) {
    (path == "" || path == null) ? path = "." : ""
    return this.__execCmd(`rm -rf ${path}/${title}.md`)
  }

  _buildProj(projTitle) {
    return this.__execCmd(`cd ${projTitle}; mkdocs build`)
  }

  _generateDockerComposeFile(projectId) {
    const dest = `${projectId}/docker-compose.yml`
    this.__execCmd(`cp docker-compose.yml ${dest}`)
    this.__execCmd(`sed -i 's/web/${projectId}/g ${dest}`)
    return 
  }

  _runContainer(projectId) {
    return this.__execCmd(`docker-compose -f ./${projectId}/docker-compose.yml up --remove-orphans`)
  }
}

module.exports = Sysops