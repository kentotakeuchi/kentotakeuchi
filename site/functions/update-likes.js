const sanityClient = require('./sanity-client.js')

sanityClient.config({
  token: process.env.SANITY_UPDATE_LIKES_TOKEN,
})

exports.handler = async ({ headers, body }) => {
  const { id, mode } = JSON.parse(body)

  try {
    let response
    if (mode === 'inc') {
      response = await sanityClient
        .patch(id)
        .inc({
          likes: 1,
        })
        .commit()
    } else {
      response = await sanityClient
        .patch(id)
        .dec({
          likes: 1,
        })
        .commit()
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }
  } catch (err) {
    console.log({ err })
    return {
      statusCode: 400,
      body: `error: ${err.message}`,
    }
  }
}
