const youtube = require('obliviate/lib/tasks/youtube')
const store = require('obliviate/lib/store')

async function youtubeDaily() {
  const { data: { official, fancam } } = await store.get('/b/lNi2GNTny6')

  await youtube.perform({ id: official.join(','), binId: 'cQ1upQRufO' })
  await youtube.perform({ id: fancam.join(','), binId: '3F74qXVfQR' })
}

youtubeDaily()
