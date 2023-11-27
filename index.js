const _ = require("lodash")

const data = require("./data.json")

const tuningPatterns = _.uniq(
    _.flatten(
        data.map(d => d.tuningPatterns)
    )
)

const groupedByPatterns = tuningPatterns.reduce((acc, pattern) => {
    const dataWithPattern = data.filter(d => d.tuningPatterns.find(p => p == pattern))
    return {
        ...acc,
        [pattern]: dataWithPattern
    }
}, {})

console.log(JSON.stringify(groupedByPatterns, null, "\t"))
