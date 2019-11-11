import React from 'react'
import Words from './Words'
import Word from './Word'
import { shallow } from 'enzyme'
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types'

describe('words component', () => {
    it('renders this.props.words as Word components', () => {
        let mockProps = { words: [
            { id: 1, name: "katten", img_url: null },
            { id: 2, name: "hunden", img_url: null }
        ]}

        let wrapper = shallow(<Words {...mockProps} />)
        expect(wrapper.find(Word).length).toBe(mockProps.words.length)
    })
})