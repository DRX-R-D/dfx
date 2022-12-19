import { flow, isPromise, toIterator, curry } from '../index.ts'

/**
 * 주어진 배열을 순차적으로 순회하여 원하는 결과로 만들어주는 함수
 *
 * @name reduce
 * */

const reduce = curry((fn, arg, list) => {
  if (list === undefined) return reduce(fn, arg[0], arg.slice(1))

  list = toIterator(list)

  const recursive = (arg) => {
    let current

    while (!(current = list.next()).done) {
      const { value } = current

      arg = flow(arg, value, curry(fn))

      if (isPromise(arg)) return arg.then(recursive)
    }

    return arg
  }

  return flow(arg, recursive)
})

export default reduce
