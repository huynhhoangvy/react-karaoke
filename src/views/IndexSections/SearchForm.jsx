import React, { useState } from 'react';
import {
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
} from 'reactstrap';
import classnames from 'classnames';

export default function SearchForm({ onSubmit, value, onChange }) {
    const [searchFocused, setSearchFocused] = useState(false);
    return(
        <>
        <FormGroup
                className={classnames({
                focused: searchFocused
                })}
                onSubmit={onSubmit}
            >
                <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder="Search"
                    type="text"
                    value={value}
                    onChange={onChange}
                    onFocus={e => setSearchFocused(true)}
                    onBlur={e => setSearchFocused(false)}
                />
                </InputGroup>
        </FormGroup>
        </>
    )
}