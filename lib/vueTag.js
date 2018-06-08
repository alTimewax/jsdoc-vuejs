exports.name = 'vue'

exports.options = {
  mustHaveValue: false,
  onTagged (doclet, tag) {
    // alTimewax //
    const componentName = doclet.meta.path.substr(doclet.meta.path.lastIndexOf('/') + 1)
    ////

    doclet.scope = 'vue'
    doclet.kind = 'module'
    doclet.alias = 'Vue: ' + componentName
  }
}
