import React from 'react'
import Draggable from './Draggable'
import DragGroup from './DragGroup'
import Droppable from './Droppable'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getAggregate();
    }, []);
    const getAggregate = async() => {
        const response = await axios.get('http://192.168.0.104:8080/whitelist/list');
        setData(response.data.responseData);
        // console.log(data.entityType);
    } 
    const [box1, setBox1] = useState({data}
 );
    const [box2, setBox2] = React.useState([]);

    const handleBox1 = (data, monitor, state) => {
        console.log(data);
        if(state.find((each) => each.entityType === data.entityType)) return;
        // console.log(item);
        setBox2((prev) => {
            const index = prev.findIndex((each) => each.entityType === item.entityType);
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });

        setBox1((prev) => {
            return [...prev, {entityType:item.entityType}];
        });
    };

    const handleBox2 = (item, monitor, state) => {
        if(state.find((each) => each.entityType === item.entityType)) return;

        setBox1((prev) => {
            const index = prev.findIndex((each) => each.entityType === item.entityType);
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });
        setBox2((prev) => {
            return [...prev, {entityType: item.entityType}]
        });
    };
  return (
    <>
        <Droppable
            accept='drag-3'
            handleDrop={handleBox1}
            text='Box 1'
            state={box1}
        >
            <DragGroup>
                {box1.map((drag) => (
                    <Draggable
                        key={drag.entityType}
                        type='drag-3'
                        text={drag.entityType}
                        item={{entityType: drag.entityType}}
                        state={box1}
                        className="bg-black"
                    >

                    </Draggable>
                ))}
            </DragGroup>
        </Droppable>

        <Droppable
            accept='drag-3'
            handleDrop={handleBox2}
            text='Box 2'
            state={box2}
        >
            <DragGroup>
                {box2.map((drag) => (
                    <Draggable
                        key={drag.entityType}
                        type='drag-3'
                        text={drag.entityType}
                        item={{entityType: drag.entityType}}
                        state={box2}
                    />
                ))}
            </DragGroup>
        </Droppable>
    </>
  )
}

export default Main