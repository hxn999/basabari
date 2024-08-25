import { decode } from "node-base64-image"
import { mkdir } from 'node:fs'

import { Post } from "../models/postModel.js"
import { File } from "../models/fileModel.js"


export async function postServer(req, res) {
    let posts = null
    let gt = 0
    let lt = 1000000
    req.query.gt ? gt = req.query.gt : gt = gt
    req.query.lt ? lt = req.query.lt : lt = lt
    posts = await Post.find({
        // userid: req.query.userid,
        // rent: { $gt: gt, $lt: lt }
    })
    res.status(200).json({
        hi: "msg",
        posts: posts
    })
    console.log(posts)

}

export async function getSinglePost(req, res) {
    
    let post = await Post.find({
        _id:req.body._id
    })
    console.log(req.body)
    res.status(200).json({
        post:post
    })
    // console.log(post)

}

export async function postSave(req, res) {



    mkdir(`./public/images/user-${req.body.userid}`, { recursive: true }, (err) => {
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
        imgSrc.push(`/images/user-${req.body.userid}/image-${i}.jpg`)
        await decode(base64.slice(22), { fname: `./public/images/user-${req.body.userid}/image-${i}`, ext: 'jpg' });

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
        address: req.body.address,
        mapSrc: req.body.mapSrc,
        rent: req.body.rent,
        charges: req.body.charges,
        chargeCategory: req.body.chargeCategory,
        rentDate: req.body.rentDate
    })
    await post.save()
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