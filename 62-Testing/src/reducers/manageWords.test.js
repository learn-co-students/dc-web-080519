import manageWords from './manageWords'

describe ('manageWords', () => {
    it ('handles @@INIT', () => {
        let action = {type: "@@INIT"}
        expect(manageWords(undefined, action)).toEqual({ words: [] })
    })
    it ('handles ADD_WORD', () => {
        let mockState = { words: [] }
        let mockAction = { type: 'ADD_WORD', payload: { name: "katten", img_url: null }}
        let result = (manageWords(mockState, mockAction))
        expect(result.words.length).toBe(1)
    })
    it ('handles DELETE_WORD', () => {
        let mockState = { words: [
            { id: 1, name: "katten", img_url: null },
            { id: 2, name: "hunden", img_url: null }
        ]}
        let mockAction = { type: 'DELETE_WORD', payload: 2 }
        let result = manageWords(mockState, mockAction)
        expect(result.words).toBeDefined()
        expect(result.words.length).toBe(1)
    })
})