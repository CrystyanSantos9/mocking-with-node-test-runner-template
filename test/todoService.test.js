import { describe, it, beforeEach } from 'node:test'
import TodoService from '../src/todoService.js';
import assert  from 'node:assert'


describe('todoService test Suite', ()=>{

    describe('#list', ()=>{

        // _todoService = Private Property 
        let _todoService; 
        let _dependencies;

        const mockDatabase = [
            {
                text: 'I MUST FIX MY OLD CAR',
                when: new Date('2021-02-21T00:00:00.000Z'),
                status: 'late',
                id: 'b356d45c-d191-408d-8326-a7dea7ae8d0f'
              }
        ]

        beforeEach((context)=>{
             _dependencies = {
                todoRepository: {
                    // mock.fn ==> podemos ver quantas vezes, ou a ordem de execução dessa função 
                    list: context.mock.fn(async ()=> mockDatabase)
                }
            }

            
            _todoService = new TodoService(_dependencies)
            
        })

        it('should retur_dependencies a list of items with uppercase text', async ()=>{
            //Pensar == Entrada - Saída - Processamento - 
            const expected = mockDatabase
            .map(({text, ...result})=> ( { text: text.toUpperCase(), ...result }))

            const result = await _todoService.list()

            assert.deepStrictEqual(result, expected)

            const fnMock = _dependencies.todoRepository.list

            assert.deepStrictEqual(fnMock.mock.callCount(), 1)

         

        })
    })


    describe('#create', ()=>{
        let _todoService
        let _dependencies 


    })
})