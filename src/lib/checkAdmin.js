module.exports = (req, res, next) => {
    if(!req.cookies.admin_check || req.cookies.admin_check !== process.env.ADMIN_CHECK) 
        return res.send("You are not the admin, what are you doing here?");

    next();
}
