/**
 * 두 배열을 합쳐서 하나로 만들어주는 함수
 *
 * @name concat
 * */

const concat = <T = any, V = any>(list: T[], newList: V[]) => [...list, ...newList]

export default concat
