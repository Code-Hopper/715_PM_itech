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

            // filter

            res.status(200).json({ message: "this are a filtred languages !" })
        } else {
            throw ("invalid query !")
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err })
    }
}

export { displayAllLanguages, displayRandomLanguage, filterLanguages }