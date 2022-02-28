import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  SaveIcon,
} from '../../components/iconsComponent/Icons.component';
import Label from '../../components/labelComponent/Label.component';
import CreateNewFlowModalPage from '../../pages/miniPages/applicationFlowPage/createNewFlowModalPage/createNewFlowModalPage.mini.page';

import './draggableList.styles.css';

const DraggableList = (props) => {
  const [items, setItems] = useState([
    {
      id: 'item-1',
      content: <div>hi</div>,
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div
            className={props.className}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.getItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className='wrapper-parent-applicationFlow'>
        <div className='parent2-buttons-applicationFlow'>
          {/* <div className='buttons2-child-applicationFlow'>
              <Button
                className='button-fieldsAdd'
                name={
                  <div className='newFlow-applicationFlow'>
                    <Label
                      label={
                        <div className='newFlow-applicationFlow'>
                          <SaveIcon />
                          Save Flow
                        </div>
                      }
                      className='label-addIcon-applicationFlow'
                    />{' '}
                  </div>
                }
                variant='contained'
                sx={{
                  backgroundColor: '#2B3A67',
                  borderRadius: '10px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#5E807F',
                    borderRadius: '10px',
                  },
                }}
              />
            </div> */}
          <div className='buttons2-child-applicationFlow'>
            {/* <Button
                // onClick={() => {
                //   this.setState({
                //     items: this.props.getItems2,
                //   });
                // }}
                className='button-fieldsAdd'
                name={
                  <div className='wrapper-addIcon-applicationFlow'>
                    <Label
                      label={
                        <div className='newFlow-applicationFlow'>
                          <AddItemIcon />
                          New Flow
                        </div>
                      }
                      className='label-addIcon-applicationFlow'
                    />
                  </div>
                }
                variant='contained'
                sx={{
                  backgroundColor: '#2B3A67',
                  borderRadius: '10px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#5E807F',
                    borderRadius: '10px',
                  },
                }}
              /> */}
            {/* <CreateNewFlowModalPage
                onClick={() => {
                  this.setState({
                    items: this.props.getItems2,
                  });
                }}
              /> */}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default DraggableList;
