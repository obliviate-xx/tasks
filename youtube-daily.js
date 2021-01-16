const youtube = require('obliviate/lib/tasks/youtube')
const store = require('obliviate/lib/store')

async function youtubeDaily() {
  const { data: { official, fancam } } = await store.get('/b/6002f92ef98f6e35d5fd3b51/latest')

  await youtube.perform({ id: official.join(','), binId: '5ffea24768f9f835a3de98d6' })
  await youtube.perform({ id: fancam.join(','), binId: '5ffeb153f98f6e35d5fbf31f' })
}

youtubeDaily()
