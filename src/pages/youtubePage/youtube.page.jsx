import React, { useState } from 'react';
import {
  DrawerIcon,
  SearchFilledIcon,
  RecordSoundIcon,
  VideoUploadOutlinedIcon,
  DisplayOutlinedIcon,
  ShowSubscriptionsIcon,
  YoutubeFilledIcon,
  NotificationOutlinedWithPlusSignIcon,
  NotificationOutlinedNoPlusSignIcon,
  CircularProfileOutlineIcon,
  AddressVerificationIcon,
  ExploreOutlineIcon,
  VideoLibraryOutlineIcon,
  ForwardOutlinedIcon,
} from '../../components/iconsComponent/Icons.component';
import Label from '../../components/labelComponent/Label.component';
import Input from '../../components/inputComponent/Input.component';
import CardContainer from '../../components/cardComponent/CardContainer.component';
import Image from '../../components/imageComponent/Image.component';
import BreakLine from '../../components/breakLineComponent/BreakLine.component';
import useStyles from '../../styles';

import './youtube.styles.css';
function Youtube() {
  const classes = useStyles();
  const [itemsMap, setItemsMap] = useState([
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      header: 'Youtube Course',
      label1: 'Jon14',
      label2: '300k views',
      divider: '⬤',
      label3: '3 days ago',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1644841255189-c0fd167d8bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      header: 'Facebook Guide',
      label1: 'David',
      label2: '400k views',
      divider: '⬤',
      label3: '1 month ago',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1644798632872-2307cf82234b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      header: 'C# Guide',
      label1: 'Caremla1',
      label2: '500k views',
      divider: '⬤',
      label3: '2 week ago',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      header: 'C++ Tutorial',
      label1: 'Nan612',
      label2: '1M views',
      divider: '⬤',
      label3: '1 year ago',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1644803188496-bb2b598a7c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
      header: 'CSS Guide',
      label1: 'Albert',
      label2: '4M views',
      divider: '⬤',
      label3: '2 months ago',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1644804525054-626803a1a7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      header: 'Speed Test',
      label1: 'Jeremy',
      label2: '195 views',
      divider: '⬤',
      label3: '1 hour ago',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1644800327833-767384bc5996?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      header: 'Html Guide',
      label1: 'Marvin',
      label2: '50k views',
      divider: '⬤',
      label3: '3 weeks ago',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      header: 'Javascript Guide',
      label1: 'Anthony',
      label2: '550k views',
      divider: '⬤',
      label3: '6 years ago',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      header: 'React Guide',
      label1: 'Adaline',
      label2: '16k views',
      divider: '⬤',
      label3: '6 days ago',
    },
  ]);

  return (
    <>
      {/* 1st */}
      <div className='parent-row1-youtube'>
        <div className='div1-row1-youtube'>
          <div className='container1-row1-youtube'>
            <div className='drawerIcon-row1-youtube'>
              <DrawerIcon style={{ fontSize: 50 }} />
            </div>

            <div className='youtubeFilledIcon-div1-row1-youtube'>
              <YoutubeFilledIcon
                style={{ fontSize: 50, color: 'hsla(0, 100%, 50%, 1)' }}
              />
            </div>
            <div className='heading-div1-row1-youtube'>
              <Label label='Youtube' />
            </div>
            <div className='label-div1-row1-youtube'>
              <Label label='LB' />
            </div>
          </div>
        </div>
        <div className='div2-row1-youtube'>
          <div className='container2-row1-youtube'>
            <Input className={classes.textField} />
            <div className='searchFilledIcon-div2-row1-youtube'>
              <SearchFilledIcon className='' style={{ fontSize: 30 }} />
            </div>
            <div className='recordSoundIcon-div2-row1-youtube'>
              <RecordSoundIcon />
            </div>
          </div>
        </div>
        <div className='div3-row1-youtube'>
          <div className='container3-row1-youtube'>
            <div className='defaultIcons-div3-row1-youtube'>
              <VideoUploadOutlinedIcon />
            </div>
            <div className='defaultIcons-div3-row1-youtube'>
              <DisplayOutlinedIcon />
            </div>
            <div className='defaultIcons-div3-row1-youtube'>
              <NotificationOutlinedWithPlusSignIcon />
            </div>
            <div className='defaultIcons-div3-row1-youtube'>
              <CircularProfileOutlineIcon />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}
      <BreakLine className='breakLine-row2-youtube' />

      <div style={{ display: 'flex', marginLeft: 200 }}>
        <div className='labelWrapper-main-row2-youtube'>
          <Label label='All' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='Javascript' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='C++' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='Website' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='Courses' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='Editing' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='Reading' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='All' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='Javascript' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='C++' />
        </div>
        <div className='labelWrapper-row2-youtube'>
          <Label label='Website' />
        </div>
        <ForwardOutlinedIcon className='forwardIcon-row2-youtube' />
      </div>

      {/* 3rd */}
      <div className='parent-row3-youtube'>
        <div className='div1-row3-youtube'>
          <div className='container-div1-row3-youtube'>
            <div
              className='defaultIcon-div1-row3-youtube'
              style={{ backgroundColor: 'rgb(229,229,229)' }}
            >
              <AddressVerificationIcon />
              <Label label='Home' fontWeight={1000} marginLeft={5} />
            </div>
            <div className='defaultIcon-div1-row3-youtube'>
              <ExploreOutlineIcon />
              <Label label='Explore' fontWeight={1000} marginLeft={5} />
            </div>
            <div className='defaultIcon-div1-row3-youtube'>
              <ShowSubscriptionsIcon />
              <Label label='Subscriptions' fontWeight={1000} marginLeft={5} />
            </div>
            <div className='defaultIcon-div1-row3-youtube'>
              <VideoLibraryOutlineIcon />
              <Label label='Library' fontWeight={1000} marginLeft={5} />
            </div>
          </div>
        </div>
        <div className='div2-row3-youtube'>
          <div style={{ display: 'flex', flexWrap: 'wrap', padding: 20 }}>
            {itemsMap.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{ paddingRight: 10, paddingBottom: 20 }}
                >
                  <CardContainer
                    cardContent={
                      <div>
                        <Image
                          src={item.src}
                          style={{ width: 360, height: 100, paddingRight: 100 }}
                        />
                        <div style={{ display: 'flex', paddingTop: 10 }}>
                          <Image
                            src={item.src}
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: 50,
                            }}
                          />
                          <div style={{ paddingLeft: 10 }}>
                            <Label label={item.header} />
                            <Label label={item.label1} />
                            <div
                              style={{
                                display: 'flex',
                              }}
                            >
                              <Label label={item.label2} />
                              <Label
                                label={item.divider}
                                className='divider-cardContainer-div2-row3-youtube'
                              />
                              <Label label={item.label3} />
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Youtube;
