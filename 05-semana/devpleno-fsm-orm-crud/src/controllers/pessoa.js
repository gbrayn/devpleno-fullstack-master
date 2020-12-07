const index = async ({ Pessoa }, req, res) => {
  const pessoas = await Pessoa.findAll()

  return res.render('pessoas/list', { pessoas })
}

const createForm = (req, res) => {
  return res.render('pessoas/create')
}

const createProcess = async ({ Pessoa }, req, res) => {
  await Pessoa.create(req.body)

  return res.redirect('/pessoas')
}

const updateForm = async ({ Pessoa }, req, res) => {
  const pessoa = await Pessoa.findOne({
    where: {
      id: req.params.id
    }
  })
  return res.render('pessoas/update', { pessoa })
}

const updateProcess = async ({ Pessoa }, req, res) => {
  await Pessoa.update(req.body, {
    where: {
      id: req.params.id
    }
  })

  res.redirect('/pessoas')
}

export default { index, createForm, createProcess, updateForm, updateProcess }
