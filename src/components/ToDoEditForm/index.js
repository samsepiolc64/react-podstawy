import React, { Component } from 'react'
import { get, update } from '../../helpers/toDoItemApi'
//import { toDoItemsApiUrl } from '../../helpers/routes'
import { Formik } from 'formik'

class ToDoEditForm extends Component {
    state = {
        toDoItem: null,
        fetched: false
    }

    itemId = () => this.props.match.params.itemId

    componentDidMount = async () => {
        const toDoItem = await get(this.itemId())
        this.setState({ toDoItem, fetched: true })
    }
    render() {
        return (
            <div>
                Edit form for {this.itemId}
                {this.state.fetched
                    ? <Formik
                        initialValues={{ ...this.state.toDoItem }}
                        onSubmit={(values) => {
                            console.log(this.itemId(),{...values})
                            update(this.itemId(), { ...values })
                        }}
                        render={({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        name='text'
                                        onChange={handleChange}
                                        value={values.text}
                                    />
                                    <br />
                                    <button type='submit'>update</button>
                                </form>

                            )}
                    />
                    : <p>Loading...</p>
                }
            </div>
        )
    }
}

export default ToDoEditForm