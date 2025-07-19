import express from 'express'
import cors from "cors"
import { authRoutes } from './routes/auth'
import { productRoutes } from './routes/product'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use("/", authRoutes)
app.use("/", productRoutes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
