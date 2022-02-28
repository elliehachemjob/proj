import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  SaveIcon,
} from '../../components/iconsComponent/Icons.component';
import Label from '../../components/labelComponent/Label.component';
import CreateNewFlowModalPage from '../../pages/miniPages/applicationFlowPage/createNewFlowModalPage/createNewFlowModalPage.mini.page';

import './draggableList.styles.css';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default class DraggableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.getItems,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    console.log(result.draggableId);

    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div
              className={this.props.className}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.items.map((item, index) => (
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
            <div className='buttons2-child-applicationFlow'>
              {/* <Button
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
              /> */}
            </div>
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
  }
}
