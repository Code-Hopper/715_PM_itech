let auth = (res, req, next) => {
    try {

        console.log("Auth Called !")

        console.log(req.req.params)

        let key = req.req.params.key
        if (key == "123") {
           req.req.params.auth = true 
        } else {
            throw ("auth failed")
        }

    } catch (err) {
        console.log("err while auth:", err)
        req.req.params.auth = false
    }

    next()
}

export { auth }