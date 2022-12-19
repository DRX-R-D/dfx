import { reduce, isArray } from '../index.ts'

/**
 * 이중 또는 다중 배열을 풀어주는 함수
 *
 * @name flat
 * */

const flat = <T = any>(list: T, depth: number = Infinity) =>
  reduce(
    (prev, cur) => {
      if (depth === 0) return [...prev, cur]

      return isArray(cur)
        ? flat([...prev, ...cur], isFinite(depth) ? depth - 1 : depth)
        : [...prev, cur]
    },
    [],
    list
  )

export default flat
