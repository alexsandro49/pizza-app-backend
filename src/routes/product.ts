import express, { Request, Response } from "express"
import prisma from "../prisma"
import { filterPassedAttributes } from "../utils/shared"

const router = express.Router()

async function create(req: Request, res: Response) {
    const {name, price, type, description, imageName } = req.body

    const product = await prisma.product.create({
        data: {
            name,
            price, 
            type, 
            description, 
            imageName
        }
    })

    res.send(product)
}

async function listAll(req: Request, res: Response) {
    const products = await prisma.product.findMany()

    res.send(products)
}

async function update(req: Request, res: Response) {
    const { id } = req.params;
    const dataToUpdate = filterPassedAttributes(req.body)

    const product = await prisma.product.update({
        where: { id },
        data: dataToUpdate
    })

    res.send(product)
}


router.post("/product", create)
router.get("/product", listAll)
router.put("/product/:id", update)

export {router as productRoutes}