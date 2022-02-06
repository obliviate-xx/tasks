const cafe = require('@kpopfans/kpop/lib/tasks/daum/cafe')

async function daumCafe() {
  await cafe.perform({ id: '-ohmygirl', binId: '7tuyHDi2GI' })
  await cafe.perform({ id: 'WJSNcosmic', binId: 'PKNc04J9Yb' })
  await cafe.perform({ id: 'cube-g-i-dle', binId: 'mqnvh8vnjj' })
}

daumCafe().catch(console.error)
