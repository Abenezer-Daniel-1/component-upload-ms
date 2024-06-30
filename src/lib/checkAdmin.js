module.exports = (req, res, next) => {
    if(!req.cookies.admin_check || req.cookies.admin_check !== process.env.ADMIN_CHECK) {
        console.log("Test logs...");
        console.log(process.env.ADMIN_CHECK);
        console.log(req.cookies);
        console.log(req.cookies.admin_check);

        return res.send("You are not the admin, what are you doing here?");
    }

    next();
}
