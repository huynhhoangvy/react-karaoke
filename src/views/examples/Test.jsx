import React, { useState } from 'react';

import { Button, Container } from 'reactstrap'

import useServerMethod from 'app/server'

export default function Test () {

    const { foo, post, testPost, put } = useServerMethod();

    return (
        <Container>
            <Button>Get</Button>
            <Button onClick={() => testPost()}>Post</Button>
            <Button>Put</Button>
            <Button>Delete</Button>
        </Container>
    );
};