import express from 'express'
import { userRoutes } from './user/user'

const app = express()
const port = 3000

app.use(express.json())
app.use("/", userRoutes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
