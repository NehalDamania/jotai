/* eslint-disable import/named */
import { produce, Draft } from 'immer'
import { atom, WritableAtom } from 'jotai'

export function withImmer<Value>(anAtom: WritableAtom<Value, Value>) {
  return atom(
    (get) => get(anAtom),
    (get, set, fn: (draft: Draft<Value>) => void) =>
      set(
        anAtom,
        produce(get(anAtom), (draft) => fn(draft))
      )
  )
}