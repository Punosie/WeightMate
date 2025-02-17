import { Field, Input } from "@chakra-ui/react"

const Form = ({label, placeHolder, onChange}) => {

    return (
        <Field.Root gap={4}>
        <Field.Label fontSize="lg"  >
            <Field.RequiredIndicator />
            {label}
        </Field.Label>
        <Input placeholder={placeHolder} type="text" onChange={onChange} />
        <Field.HelperText />
        <Field.ErrorText />
        </Field.Root>
    )
}

export default Form;