import { curry } from '../index.ts'

/**
 * 객체에서 원하는 key의 value 값을 리턴해주는 함수
 *
 * @name pull
 * */

const pull = curry(<T = any>(key: string | number, data: T) => data[key])

export default pull
