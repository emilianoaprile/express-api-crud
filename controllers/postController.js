const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


const index = async (req, res, next) => {
    try {
        const posts = await prisma.post.findMany()
        res.status(200).json(posts)
    }catch (err) {
        console.log(err)
        next(err)
    }
}


const create = async (req, res, next) => {
    const {title, slug, image, content} = req.body;
    const data = {
        title,
        slug,
        image,
        content,
        published: req.body.published ? true : false
    }
    try {
        const post = await prisma.post.create({data})
        res.status(200).send(post)
    }catch (err) {
        console.log(err)
        next(err)
    }
}

const show = async (req, res, next) => {
    try {
        const {slug} = req.params;
        const post = await prisma.post.findUnique({
            where: {slug: slug}
        })
        if(post) {
            res.json(post)
        } else {
            throw new Error ('Post non trovato')
        }
    }catch (err) {
        console.log(err)
        next(err)
    }
}

module.exports = {
    create,
    index,
    show
}