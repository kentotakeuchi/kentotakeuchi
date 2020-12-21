const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_UPDATE_LIKES_TOKEN,
  // useProjectHostname: false,
})

exports.handler = async ({ headers, body }) => {
  const { id, mode } = JSON.parse(body)

  try {
    let response
    if (mode === 'inc') {
      response = await client
        .patch(id)
        .inc({
          likes: 1,
        })
        .commit()
    } else {
      response = await client
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
