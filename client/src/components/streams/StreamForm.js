import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div>{error}</div>
            )
        }

    }

    renderInput = ({ input, label, meta }) => {
        //console.log(meta)
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>

        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button>Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "Pls enter title"
    }
    else if (!formValues.description) {
        errors.title = "Pls enter description"
    }
    return errors
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm)
