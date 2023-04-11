import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions.vue'
import {pokemons} from '../mocks/pokemons.mock'


describe('PokemonOptions Component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions,{
            props:{
                pokemons
            }
         })
    })
    
    test('debe hacer match con el snapshot', () => {

         expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe mostrar las 4 opciones correctamente', () => {

        const listadoTags = wrapper.findAll('li')
        expect(listadoTags.length).toBe(4)

        expect(listadoTags[0].text()).toBe('bulbasaur')
        expect(listadoTags[1].text()).toBe('ivysaur')
        expect(listadoTags[2].text()).toBe('venusaur')
        expect(listadoTags[3].text()).toBe('charmander')

    })


    test('debe emitir "selection" con sus respectivos parámetros al hacer click', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])
    })


})
