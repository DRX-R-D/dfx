import take from './take.ts'

/**
 * 객체를 [key, value] 형태로된 배열로 바꾸어 반환하는 함수
 *
 * @name entries
 * */

const entries = <T = any>(value: T) => {
  const entriesIterator = function* (list: T) {
    for (const item in list) yield [item, list[item]]
  }

  return take(Infinity, entriesIterator(value))
}

export default entries
