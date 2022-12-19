import { curry } from '../index.ts'

/**
 * 특정 조건으로 배열을 정렬 시키는 함수
 * 머지 소팅으로 해당 배열을 정렬
 *
 * @name sort
 * */

const sort = curry((fn: (prev: unknown, cur: unknown) => number, list) => {
  const merge = (first, second) => {
    const result = []

    while (first.length && second.length) {
      result.push(fn(first[0], second[0]) <= 0 ? first.shift() : second.shift())
    }

    while (!!first.length) result.push(first.shift())
    while (!!second.length) result.push(second.shift())

    return result
  }
  const recursive = (list) => {
    if (list.length < 2) return list

    const harp = Math.floor(list.length / 2)

    return merge(recursive(list.slice(0, harp)), recursive(list.slice(harp)))
  }

  return recursive(list)
})

export default sort
