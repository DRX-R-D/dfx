import { curry, flow, take, toIterator } from './index.ts'

/**
 * 배열이나 객체를 순회하면서 바뀐 값으로 반환하는 함수
 *
 * @name map
 * */

const map = curry((fn, list) => {
  const mapIterator = curry(function* (fn, list) {
    for (const item of toIterator(list)) yield flow(item, fn)
  })

  return take(Infinity, mapIterator(fn, list))
})

export default map
