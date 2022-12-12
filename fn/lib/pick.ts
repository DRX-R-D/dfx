import { reduce, curry } from '../index.ts'

/**
 * 객체에서 특정 값들만 빼서 리턴하는 함수
 *
 * @name pick
 * */

const pick = curry(<T = any>(keys: (string | number)[], data: T) =>
  reduce(
    (prev, cur) => ({
      ...prev,
      ...(data[cur] && { [cur]: data[cur] }),
    }),
    {},
    keys
  )
)

export default pick
