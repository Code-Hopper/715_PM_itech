import { languages } from "../database.js"

let displayAllLanguages = (req, res) => {
    res.status(200).json({ message: "this are all languages !", languages })
}

let displayRandomLanguage = (req, res) => {

    let randomNumber = Math.floor(Math.random() * languages.length + 1)

    // console.log(randomNumber)

    let randomLanguage = languages.filter((element) => {
        return randomNumber === element.id
    })

    res.status(200).json({ message: "this are a random language !", randomLanguage })
}

// parameters (query, path)

// http://localhost:5000/random(endpoint)?query

// http://localhost:5000/:variable/

let filterLanguages = (req, res) => {
    console.log(req.query)

    let { duration, level, scope } = req.query

    console.log(duration)
    console.log(level)
    console.log(scope)

    // filter on the basis of query !
    // duration, level, scope
    try {

        if (duration || level || scope) {

            if (duration && scope && level) {
                console.log("All filter")
                let result = allFilter(duration, scope, level)
                res.status(200).json({ message: "search results based on duration", result })
            } else if (duration && !scope && !level) {
                console.log("only duration")
                let result = durationFilter(duration)
                res.status(200).json({ message: "search results based on duration", result })
            } else if (!duration && scope && !level) {

            }

            // res.status(200).json({ message: "this are a filtred languages !" })
        } else {
            throw ("invalid query !")
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err })
    }
}


// filter

// only duration
function durationFilter(duration) {
    let filterData = languages.filter((element) => {
        return element.duration == duration
    })

    return filterData
}

// // only level
// let OnlyLevelFilter = languages.filter((element) => {
//     return element.level == level
// })
// // only scope
// let OnlyScopeFilter = languages.filter((element) => {
//     return element.scope == scope
// })

// // duration and level
// let DurationAndLevelFilter = languages.filter((element) => {
//     return element.duration == duration && element.level == level
// })

// // level and scope
// let LevelAndScopeFilter = languages.filter((element) => {
//     return element.scope == scope && element.level == level
// })

// // duration and scope
// let DurationAndScopeFilter = languages.filter((element) => {
//     return element.duration == duration && element.scope == scope
// })

// // duration , level and scope 
function allFilter() {
    let DurationAndLevelAndScopeFilter = languages.filter((element) => {
        return element.duration == duration && element.level == level && element.scope == scope
    })
    return DurationAndLevelAndScopeFilter
}

let searchedId = async (req, res) => {

    console.log(req.params.auth)

    if (req.params.auth) {

        // console.log(req.params)
        let languagename = req.params.languagename.toLowerCase()

        let response = languages.filter((language) => {
            if (language.name === languagename) {
                return language
            } else {
                return false
            }
        })

        console.log(response)

        if (response.length != 0) {
            res.status(200).json({ response })
        } else {
            console.log("language not found !")
            res.status(200).json({ message: "language not present in database !" })
        }

    }else{
        res.status(200).json({ message: "Auth Failed !" })
    }
}


export { displayAllLanguages, displayRandomLanguage, filterLanguages, searchedId }