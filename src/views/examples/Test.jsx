import React from 'react';

import { Button, Container } from 'reactstrap'

import useServerMethod from 'js/server'

export default function Test () {

    const { testPost } = useServerMethod();

    return (
        <Container>
            <Button>Get</Button>
            <Button onClick={() => testPost()}>Post</Button>
            <Button>Put</Button>
            <Button>Delete</Button>
        </Container>
    );
};