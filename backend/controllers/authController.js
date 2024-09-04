import { User } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Post } from '../models/postModel.js';
import { mkdir } from 'node:fs'
import {decode} from 'node-base64-image'
import { log } from 'node:console';


export async function logIn(req, res) {
    console.log(req.body.emailPhone);
    
    const user = await User.findOne({
        phone: req.body.emailPhone 
    })
    console.log(user)
    if (user) {
            const isValidPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (isValidPassword) {
            const userInfo = {
                user_id: user.name.split(" ")[0] + user.phone.slice(-4),
                phone: user.phone,
                area: user.area,
                name: user.name,
                imgSrc:user.pfpSrc
            }
            const refreshToken = jwt.sign(userInfo, process.env.REFRESH_TOKEN_SECRET)
            const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
            await User.findOneAndUpdate({user_id:user.name.split(" ")[0] + user.phone.slice(-4)},{refreshToken})


            res
                .status(202)
                .cookie('accessToken', accessToken, {
                    sameSite: 'strict',
                    path: '/',

                    httpOnly: true,
                })
                .cookie('refreshToken', refreshToken, {
                    sameSite: 'strict',
                    path: '/',

                    httpOnly: true,
                })
                .json({
                    msg: "user created!!",
                    accessToken,
                    refreshToken,
                    userInfo,
                    error:""

                })
        } else {
            res.status(200).json({ error: "Wrong Credentials!" })
            console.log("Wrong Credentials! ")
        }
    }
    else {

        res.status(200).json({ error: "Wrong Credentials!" })
        console.log("Wrong Credentials!--------")
    }

}
export async function logOut(req, res) {
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    res.status(200).json({ hi: "msg" })
    console.log(req.body)
}
export async function createUser(req, res) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const refreshToken = jwt.sign(userInfo, process.env.REFRESH_TOKEN_SECRET)
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
    console.log(req.body)
    
    const userinfotext = JSON.stringify(userInfo)
    // console.log(accessToken)
    // console.log(refreshToken)
    mkdir(`./public/images/user-${req.body.firstName + req.body.phone.slice(-4)}`, { recursive: true }, (err) => {
        if (err) console.log(err);
    });
    let  pfpSrc = `/images/user-${req.body.firstName + req.body.phone.slice(-4)}/profile.jpg`
    await decode(req.body.pfp.slice(22), { fname: `./public/images/user-${req.body.firstName + req.body.phone.slice(-4)}/profile`, ext: 'jpg' });
    const userInfo = {
        user_id: req.body.firstName + req.body.phone.slice(-4),
        phone: req.body.phone,
        area: req.body.area,
        name: req.body.firstName + " " + req.body.lastName,
        pfpSrc:pfpSrc
    }
    const user = new User({
        email: req.body.email,
        password: hashedPassword,
        address: req.body.address,
        area: req.body.area,
        phone: req.body.phone,
        name: req.body.firstName + ' ' + req.body.lastName,
        user_id: req.body.firstName + req.body.phone.slice(-4),
        lat: req.body.lat,
        long: req.body.long,
        refreshToken: refreshToken,
        pfpSrc:pfpSrc
    })
    await user.save()
    // console.log(hashedPassword)
    // console.log(req.body)

    res
        .status(202)
        .cookie('accessToken', accessToken, {
            sameSite: 'strict',
            path: '/',

            httpOnly: true,
        })
        .cookie('refreshToken', refreshToken, {
            sameSite: 'strict',
            path: '/',

            httpOnly: true,
        })
        .json({
            msg: "user created!!",
            accessToken,
            refreshToken,
            userInfo

        })
    // console.log(req.cookies)
}

export async function getProfile(req,res) {
    console.log(res.locals.id)
    const user = await User.findOne({user_id:res.locals.id})
    const userPost = await Post.find({
        userid:req.body.user_id
    })
    // console.log(user);
    // console.log(userPost);
    res.status(200).json(
        {
            user,
            userPost
        }
    )
    
}