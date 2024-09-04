import { decode } from "node-base64-image"
import { mkdir } from 'node:fs'

import { Post } from "../models/postModel.js"
import { User } from "../models/userModel.js"
import { File } from "../models/fileModel.js"
import mongoose from "mongoose";


export async function postServer(req, res) {

    
   
    console.log(req.query)
    
    const regex = new RegExp(escape(req.query.area), "i");
   let posts = await Post.find({
        area:regex,
        rent:{$gt:parseInt( req.query.gt),$lt:parseInt(req.query.lt)},
        bed:{$gt:(parseInt(req.query.bed))},
        floorSize:{$gt:parseInt(req.query.floor)},
    })
    res.status(500).json({
        hi: "msg",
        posts: posts
    })
    // console.log(posts)

}

export async function getSinglePost(req, res) {
    
    let post = await Post.find({
        _id:req.body._id
    })
    let ownerId = post[0].userid
    let ownerObj = await User.find({user_id:ownerId})
    let owner ={
        name:ownerObj[0].name,
        phone:ownerObj[0].phone,
        pfp:ownerObj[0].pfpSrc,

    }
    
    console.log(req.body)
    console.log(owner)
    res.status(200).json({
        post:post,
        owner:owner
    })
    // console.log(post

}

export async function postSave(req, res) {

    
    let c = await File.find({_id: new mongoose.Types.ObjectId("66d5f1fee8b87b8984f6a94a")})
    // let c1 = JSON.parse(c[0])
    let counter = c[0].count
    console.log(c[0].count)

    mkdir(`./public/images/user-${req.body.userid}/${req.body.area.slice(0,3)+counter}`, { recursive: true }, (err) => {
        if (err) console.log(err);
    });
    // console.log(req.body.image[0].slice(22))
    console.log("/////////////////////////////////////////")
    let i = 0
    let imgSrc = []
    req.body.images.map(async (base64) => {
        console.log("------------------->")
        let temp = base64.slice(22)
        let temp1 = base64.slice(0, 64)
        console.log(temp1)
        i++
        imgSrc.push(`/images/user-${req.body.userid}/${req.body.area.slice(0,3)+counter}/image-${i}.jpg`)
        await decode(base64.slice(22), { fname: `./public/images/user-${req.body.userid}/${req.body.area.slice(0,3)+counter}/image-${i}`, ext: 'jpg' });

    })
    console.log(req.body)
    console.log(imgSrc)
    // console.log(req.body)
    const post = new Post({
        userid: req.body.userid,
        images: imgSrc,
        bed: req.body.bed,
        bath: req.body.bath,
        balcony: req.body.balcony,
        floorSize: req.body.floorSize,
        description: req.body.description,
        facilities: req.body.facilities,
        area: req.body.area,
        address: req.body.address,
        mapSrc: req.body.mapSrc,
        rent: req.body.rent,
        charges: req.body.charges,
        chargeCategory: req.body.chargeCategory,
        rentDate: req.body.rentDate,
        post_id:req.body.area.slice(0,3)+counter
    })
    await post.save()
    let upCount = counter+1
    await File.findOneAndUpdate({_id:new mongoose.Types.ObjectId("66d5f1fee8b87b8984f6a94a")},{count:upCount})
    res.status(200).json({
        msg: "saved successfully"
    })

}
export async function fileSave(req, res) {
    const base64 = req.body.file
    // console.log(base)
    const files = new File(req.body)
    await files.save()
    await File.findOneAndUpdate({ file: base64 }, { file: '' })
    await decode(base64, { fname: './pics/example1', ext: 'jpg' });

    res.status(200).json({
        msg: "file saved successfully"
    })
}
export  function auth(req,res) {
    // res.cookie("resCookie",'mynameishasan')
    console.log(req.cookies)
    res.status(200).json({lel:"lel"})
}

export async function updatePost(req,res)
{
    console.log(req.body);
    await Post.findOneAndUpdate({_id:req.body.query},req.body.data)
    res.status(200).json({hi:"msg"})
    
}