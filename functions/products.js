require('dotenv').config()

const Airtable = require('airtable-node')
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async function () {
  try {
    const response = await airtable.list({ maxRecords: 200 })

    const products = response.records.map((product) => {
      const { id, fields } = product
      const { name, featured, images, description, ingredient, category } =
        fields
      const { url } = images[0]
      return {
        id,
        name,
        featured,
        description,
        ingredient,
        category,
        image: url,
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(products, null, 2),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'There was an error',
    }
  }
}
