import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Button, Container } from 'reactstrap';

import './SideDrawer.css';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    border: '1px solid lightgrey',
    borderRadius: '2px',
    background: isDragging ? 'lightgreen' : 'white',
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    transition: 'background-color .2 ease',
    background: isDraggingOver ? 'skyblue' : 'white',
    padding: grid,
    width: '280px',
    border: '1px solid lightgrey',
    borderRadius: '2px',
});

export default function SideDrawer(props) {

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }

        const newSongList = reorder(props.songList, result.source.index, result.destination.index);

        props.setSongList(newSongList);
    }

    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <Container className={drawerClasses}>
            {!props.songList.length
                ? <h4>No Song Added!</h4>
                :
                <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {props.songList.map((song, index) => (
                                        <Draggable key={song.id} draggableId={song.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    {song.title}
                                                    <Button
                                                    onClick={() => props.removeSong(index)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </DragDropContext>
            }
        </Container>
    );
};