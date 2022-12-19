import { empty } from '../index.ts'

/**
 * 값을 제너레이터로 바꿔주는 함수
 *
 * @name toIterator
 * */

const toIterator = <V = any>(list: any): Iterable<V> =>
  (list && list[Symbol.iterator]?.()) || empty()

export default toIterator
