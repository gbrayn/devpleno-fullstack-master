import express from 'express'
import db from './database'
import slug from './utils/slug'

const router = express.Router()

router.get('/', async (req, res) => {
  const categories = await db('categories').select('*')

  return res.render('home', { categories })
})

router.route('/categoria/:id').get(async (req, res) => {
  const products = await db('products')
    .select('*')
    .where('id', function () {
      this.select('categories_products.product_id')
        .from('categories_products')
        .whereRaw('categories_products.product_id = products.id')
        .where('category_id', req.params.id)
    })

  const categories = await db('categories').select('*')
  const categoriesWithSlug = categories.map((category) => {
    const categoryWithSlug = { ...category, slug: slug(category.category) }
    return categoryWithSlug
  })

  console.log(categoriesWithSlug)
  const [category] = await db('categories')
    .select('*')
    .where('id', req.params.id)

  return res.render('category', { products, categoriesWithSlug, category })
})

export default router
