import db from '../database'

const findAll = async () => {
  try {
    const pessoas = await db('pessoas').select('*')

    return pessoas
  } catch (error) {
    return console.error(error)
  }
}

const destroy = async id => {
  try {
    await db('pessoas')
      .where({ id })
      .del()
  } catch (error) {
    return console.error(error)
  }
}

const update = async (id, { nome, nascimento, cargo }) => {
  try {
    await db('pessoas')
      .where({ id })
      .update({ nome, nascimento, cargo })
  } catch (error) {
    return console.error(error)
  }
}

const create = async data => {
  try {
    await db('pessoas').insert(data)
  } catch (error) {
    return console.error(error)
  }
}

const findOne = async id => {
  try {
    const [pessoa] = await db('pessoas')
      .where({ id })
      .select('*')

    return pessoa
  } catch (error) {
    return console.error(error)
  }
}

export default { findAll, destroy, update, create, findOne }
