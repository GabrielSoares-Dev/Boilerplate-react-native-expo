import { zustandStorage } from '@storages'
import { MMKV } from 'react-native-mmkv'

describe('zustandStorage', () => {
  it('Should set an item in storage', () => {
    const setIntoStorageSpyOn = jest.spyOn(MMKV.prototype, 'set')

    zustandStorage.setItem('test-key', 'test-value')

    expect(setIntoStorageSpyOn).toHaveBeenCalledWith('test-key', 'test-value')
  })

  it('Should get an item from storage', () => {
    const getItemFromStorageSpyOn = jest.spyOn(MMKV.prototype, 'getString')
    zustandStorage.setItem('test-key', 'test-value')

    expect(zustandStorage.getItem('test-key')).toEqual('test-value')
    expect(getItemFromStorageSpyOn).toHaveBeenCalledWith('test-key')
  })

  it('Should try get item when key not found', () => {
    const getItemFromStorageSpyOn = jest.spyOn(MMKV.prototype, 'getString')

    expect(zustandStorage.getItem('test-key-not-found')).toBeNull()
    expect(getItemFromStorageSpyOn).toHaveBeenCalledWith('test-key-not-found')
  })

  it('Should remove an item from storage', () => {
    const removeItemFromStorageSpyOn = jest.spyOn(MMKV.prototype, 'delete')
    zustandStorage.setItem('test-key', 'test-value')
    zustandStorage.removeItem('test-key')

    expect(removeItemFromStorageSpyOn).toHaveBeenCalledWith('test-key')
  })
})
