import Project from "./project";
import Document from "./document";

class Serializers {
  projects(sqlData) {
    return new Project(
      sqlData.user_id,
      sqlData.title,
      sqlData.structure,
      sqlData.projectId
    )
  }

  documents(sqlData) {
    return new Document(
      sqlData.title,
      sqlData.contents, 
      sqlData.path = (sqlData.path === null) ? "" : sqlData.path,
      sqlData.projectId
    )
  }
}

module.exports = Serializers