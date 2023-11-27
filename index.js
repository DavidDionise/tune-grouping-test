const _ = require("lodash")

const data = require("./data.json")

const tuningPatterns = _.uniq(
    data.map(d => d.tuningPattern)
)

const groupedByPatterns = tuningPatterns.reduce((acc, pattern) => {
    return {
        ...acc,
        [pattern]: data.filter(d => d.tuningPattern == pattern)
    }
}, {})

console.log(JSON.stringify(groupedByPatterns, null, "\t"))
