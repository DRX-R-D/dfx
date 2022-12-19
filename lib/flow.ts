import { isPromise } from '../index.ts'

/**
 * 함수의 흐름을 이어주는 함수
 * 받아온 값들 중 Promise가 있으면 Promise를 풀어서 실행
 *
 * @name flow
 * */

const flow = (...args) => {
  if (args.length === 2) return flow(null, ...args)

  const [arg, value, fn] = args

  if (arg !== null)
    return isPromise(value) ? value.then((response: any) => fn(arg, response)) : fn(arg, value)
  else return isPromise(value) ? value.then(fn) : fn(value)
}

export default flow
