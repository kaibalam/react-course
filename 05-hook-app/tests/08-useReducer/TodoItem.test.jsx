const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe('Pruebas en <TodoItem /> ', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeletetodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks);
    test('debe de mostrar el Todo Pendiente de completar', () => {

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeletetodoMock}
        />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('aling-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    })

    test('debe de mostrar el Todo completado', () => {

        todo.done = true;

        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeletetodoMock}
        />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    })

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeletetodoMock}
        />
        );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    })

    test('debe de llamar el deleteTodo', () => {
        render(<TodoItem
            todo={todo}
            onToggleTodo={onToggleTodoMock}
            onDeleteTodo={onDeletetodoMock}
        />
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onDeletetodoMock).toHaveBeenCalledWith(todo.id);
    })
})