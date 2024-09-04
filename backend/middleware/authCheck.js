import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js';

export async function authCheck(req, res, next) {
    try {
        console.log(req.cookies)
        const user = jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN_SECRET)
        if (user) {
            res.locals.id=user.user_id
            console.log("Authorized!!!!!!!!!!!!");
            next()

        }
    } catch (error) {
        
        try {
            const userRefresh = jwt.verify(req.cookies.refreshToken, process.env.REFRESH_TOKEN_SECRET)
            console.log(userRefresh);

            if (userRefresh) {
                
                const userRefreshDb = await User.findOne({ user_id: userRefresh.user_id })
                if (userRefreshDb) {
                    console.log(userRefreshDb)
                    if (userRefreshDb.refreshToken === req.cookies.refreshToken) {
                        const accessToken = jwt.sign(userRefresh, process.env.ACCESS_TOKEN_SECRET, {
                            expiresIn: '15m'
                        })
                        res
                            .status(202)
                            .cookie('accessToken', accessToken, {
                                sameSite: 'strict',
                                path: '/',

                                httpOnly: true,
                            })

                        next()
                    } else {

                        console.log("unAuthorized!!!!!!!!!!!!!!");
                        console.log(error);
                    }
                }



            }
        } catch (error) {

            console.log(error);


        }
       

    }
}