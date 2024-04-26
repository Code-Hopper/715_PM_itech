let home = (req, res) => {
    console.log("this is home function !")
    res.status(200).json({ message: "this is home function !", contact: { name: "amey", number: "9766696550" } })
}

let postHome = (req, res) => {

    console.log(req.body)

    try {

        let { name } = req.body

        if (!name) {
            throw ("name not found in request so we rejected the input from client !")
        }

        // what if client din't send the name

        // console.log(req)
        // console.log(req.body.name)
        // we can store this data into database or use it for further oprations
        res.status(202).json({ message: `${req.body.name} your data has been received !` })
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err })
    }
}

export { home, postHome }