import pessoas from '../models/pessoas'

const list = async (req, res) => {
  try {
    const result = await pessoas.findAll()

    res.render('home', { pessoas: result })
  } catch (err) {
    return console.err(err)
  }
}

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params
    await pessoas.destroy(id)

    return res.redirect('/')
  } catch (err) {
    return console.error(err)
  }
}

const updateOne = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    await pessoas.update(id, data)

    res.redirect('/')
  } catch (error) {
    console.error(error)
  }
}

const createOne = async (req, res) => {
  try {
    const data = req.body

    await pessoas.create(data)

    return res.redirect('/')
  } catch (error) {
    return console.error(error)
  }
}

const renderUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const pessoa = await pessoas.findOne(id)

    return res.render('pessoas/update', { pessoa })
  } catch (error) {
    return console.error(error)
  }
}

export default {
  list,
  deleteOne,
  updateOne,
  createOne,
  renderUpdate
}
