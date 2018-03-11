export default function smoothScroll({
  scroller,
  to = 0,
  mode = 'h',
  callback = () => {}
} = {}) {
  if (!scroller) {
    throw new Error('option scroller is required')
  }

  const scorllType = mode === 'h' ? 'scrollLeft' : 'scrollTop'
  let from = scroller[scorllType]

  const intervalId = setInterval(() => {
    if (Math.abs(from - to) <= 20) {
      clearInterval(intervalId)
      scroller[scorllType] = to
      callback()
    } else {
      let r = (to - from) / 3
      r = Math.abs(r) > 20
        ? r
        : to - from > 0 ? 20 : -20
      from += r
      scroller[scorllType] = from
    }
  }, 16.7)
}
