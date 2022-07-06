const { exec } = require("child_process")

class Sysops {
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

  _buildProj(projTitle) {
    return this.__execCmd(`cd ${projTitle}; mkdocs build`)
  }

  _generateDockerComposeFile(projectId) {
    const dest = `${projectId}/docker-compose.yml`
    this.__execCmd(`cp docker-compose.yml ${dest}`)
    this.__execCmd(`sed -i 's/web/${projectId}/g ${dest}`)
    return 
  }

  _runContainer() {
    return this.__execCmd(`docker-compose up --remove-orphans`)
  }
}

module.exports = Sysops