import pessoas from '../models/pessoas';

const list = async (req, res) => {
  try {
    const result = await pessoas.findAll();
    res.render('pessoas', { pessoas: result });
  } catch (err) {
    res.send(err);
  }
};

const destroy = async (req, res) => {
  try {
    await pessoas.destroy(req.params.id);
    res.redirect('/pessoas');
  } catch (err) {
    res.send(err);
  }
};

const renderForm = async (req, res) => {
  res.render('pessoas/create');
};

const create = async (req, res) => {
  try {
    await pessoas.create(req.body);
    res.redirect('/pessoas');
  } catch (err) {
    res.send(err);
  }
};

const renderUpdateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pessoas.findById(id);
    res.render('pessoas/update', { pessoa: result });
  } catch (err) {
    res.send(err);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    await pessoas.update(id, req.body);
    res.redirect('/pessoas');
  } catch (err) {
    res.send(err);
  }
};
export default { list, destroy, renderForm, create, renderUpdateForm, update };
