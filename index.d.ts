declare module 'sort-keys-recursive' {

  type Something = Array<any> | Record<any, any>

  type Options = {
    compareFunction?: (left: string, right: string) => number
    ignoreArrayAtKeys?: string[]
    ignoreObjectAtKeys?: string[]
  }
  
  export default function sortKeysRecursive<T extends Something>(
    something: T,
    options?: Options
  ): T

}
