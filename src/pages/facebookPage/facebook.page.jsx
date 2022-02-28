import React from 'react';
import {
  FacebookOutlineIcon,
  SearchFilledIcon,
  AddressVerificationIcon,
  GroupsFilledIcon,
  CircularProfileOutlineIcon,
  DisplayOutlinedIcon,
  NotificationOutlinedWithPlusSignIcon,
  ScreenFilledIcon,
  AddItemIcon,
  PeopleIcon,
  PinIcon,
  FlagFilledIcon,
  AlbumIcon,
  HappySmileIcon,
  VideoAddFilledIcon,
  EventFilledIcon,
  StoredFilledIcon,
  PlayerFilledIcon,
  HistoryFilledIcon,
  MemoriesIcon,
  DropDownFilledIcon,
  ForwardOutlinedIcon,
  PlayArrowFilledIcon,
  ClearIconTransparent,
  PlayArrowOutlineIcon,
} from '../../components/iconsComponent/Icons.component';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import Input from '../../components/inputComponent/Input.component';
import BreakLine from '../../components/breakLineComponent/BreakLine.component';
import { makeStyles } from '@material-ui/core/styles';

import './facebook.styles.css';

function Facebook() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      minWidth: 189.3,
      borderRadius: '40px',
      backgroundColor: 'hsl(216, 20%, 85%)',
      opacity: 0.7,
      height: 40,
      '&:hover,&:focus': {},
    },
  }));
  const classes = useStyles();

  return (
    <>
      {/* 1st */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid rgb(229, 229, 229)',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ paddingRight: 10, paddingTop: 10 }}>
            <FacebookOutlineIcon
              style={{ color: 'rgb(11,132,238)', fontSize: 50 }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <SearchFilledIcon
              style={{
                position: 'absolute',
                bottom: -14,
                left: 10,
              }}
            />
          </div>
          <div style={{ width: '100%', height: '100%' }}>
            <Input
              textFieldStyles={classes.textField}
              style={{ width: '100%' }}
              label={
                <Label label='Search Facebook' marginLeft={20} marginTop={-5} />
              }
            />
          </div>
        </div>
        {/* 2nd */}
        <div style={{ display: 'flex' }}>
          <div style={{ paddingLeft: 30 }}>
            <AddressVerificationIcon
              style={{ color: 'rgb(27,116,228)', fontSize: 30 }}
            />
          </div>

          <div style={{ paddingLeft: 30 }}>
            <PeopleIcon style={{ fontSize: 30 }} />
          </div>
          <div style={{ paddingLeft: 30 }}>
            <GroupsFilledIcon style={{ fontSize: 30 }} />
          </div>
        </div>
        {/* 3rd */}
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: 'hsla(216, 20%, 85%,0.7)',
              borderRadius: 40,
            }}
          >
            <Label label='Find friends' />
          </div>
          <div
            style={{
              display: 'flex',
              paddingLeft: 10,
              alignItems: 'center',
              paddingRight: 20,
            }}
          >
            <CircularProfileOutlineIcon style={{ color: 'rgb(27,116,228)' }} />
            <Label label='Ellie' marginLeft={5} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'hsla(216, 20%, 85%,0.7)',
              borderRadius: 60,
            }}
          >
            <DisplayOutlinedIcon />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'hsla(216, 20%, 85%,0.7)',
              borderRadius: 60,
            }}
          >
            <span className='iconify' data-icon='mdi:facebook-messenger'></span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'hsla(216, 20%, 85%,0.7)',
              borderRadius: 60,
            }}
          >
            <NotificationOutlinedWithPlusSignIcon />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'hsla(216, 20%, 85%,0.7)',
              borderRadius: 60,
            }}
          >
            <DropDownFilledIcon />
          </div>
        </div>
      </div>
      {/* 4th */}
      <div style={{ backgroundColor: '#F0F2F5' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
            }}
          >
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <CircularProfileOutlineIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 40 }}
                />
              </div>
              <Label label='Ellie Hachem' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <PeopleIcon
                  style={{
                    color: 'rgb(11,132,238)',
                    fontSize: 40,
                    fontSize: 40,
                  }}
                />
              </div>
              <Label label='Find Friends' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <FacebookOutlineIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 40 }}
                />
              </div>
              <Label label='Welcome' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <GroupsFilledIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 40 }}
                />
              </div>
              <Label label='Groups' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <StoredFilledIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 40 }}
                />
              </div>

              <Label label='Marketplace' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <PlayerFilledIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 40 }}
                />
              </div>
              <Label label='Watch' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <MemoriesIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 40 }}
                />
              </div>
              <Label label='Memories' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <PinIcon style={{ color: 'rgb(180,52,185)', fontSize: 40 }} />
              </div>

              <Label label='Saved' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <FlagFilledIcon
                  style={{ color: 'rgb(238,96,43)', fontSize: 40 }}
                />
              </div>

              <Label label='Pages' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <EventFilledIcon
                  style={{ color: 'rgb(243,80,108)', fontSize: 40 }}
                />
              </div>

              <Label label='Events' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ paddingRight: 10 }}>
                <HistoryFilledIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 40 }}
                />
              </div>
              <Label label='Most Recent' marginTop={10} />
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  backgroundColor: 'rgb(228,230,235)',
                  borderRadius: 20,
                  paddingRight: 15,

                  paddingLeft: 15,
                  paddingTop: 15,
                  paddingBottom: 10,
                }}
              >
                <ForwardOutlinedIcon
                  style={{
                    color: 'rgb(16,16,16)',
                    transform: 'rotate(90deg)',

                    fontSize: 15,
                  }}
                />
              </div>
              <div style={{ padding: 10 }}>
                <Label label='See More' />
              </div>
            </div>
          </div>
          {/* 5th */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgb(255,255,255)',
                marginTop: 10,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgb(231,243,255)',
                  borderRadius: 40,
                  paddingRight: 15,

                  paddingLeft: 15,
                  paddingTop: 15,
                  paddingBottom: 10,
                }}
              >
                <AddItemIcon />
              </div>
              <div style={{ paddingTop: 5 }}>
                <Label label='Create Story' fontWeight={1000} marginLeft={5} />
                <Label
                  label='Share a photo or write something.'
                  marginLeft={5}
                  color='rgb(122,143,172)'
                />
              </div>
            </div>
            {/* 6th */}
            <div
              style={{
                backgroundColor: 'rgb(255,255,255)',
                marginTop: 10,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <FacebookOutlineIcon
                  style={{ color: 'rgb(11,132,238)', fontSize: 50 }}
                />
                <ScreenFilledIcon
                  style={{ fontSize: 100, color: 'rgb(64,169,89)' }}
                />
                <ClearIconTransparent />
              </div>
              <Label label='Remember Password' fontWeight={1000} />
              <Label
                label='Next time you log in on this browser, just click your profile picture
        instead of typing a password.'
              />
              <div style={{ display: 'flex' }}>
                <div style={{ padding: 10, width: '100%' }}>
                  <Button
                    name={<Label label='Okay' color='blue' />}
                    sx={{
                      backgroundColor: 'rgb(231,243,255)',
                      width: '100%',
                      '&:hover': { backgroundColor: '		hsl(210, 100%, 85%)' },
                    }}
                    variant='contained'
                  />
                </div>
                <div style={{ padding: 10, width: '100%' }}>
                  <Button
                    name={<Label label='Not Now' color='black' />}
                    sx={{
                      backgroundColor: 'rgb(228,230,235)',
                      width: '100%',
                      '&:hover': { backgroundColor: '	hsl(223, 15%, 81%)' },
                    }}
                    variant='contained'
                  />
                </div>
              </div>
            </div>

            {/* 7th */}
            <div
              style={{
                backgroundColor: 'rgb(255,255,255)',
                marginTop: 10,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CircularProfileOutlineIcon
                  style={{ fontSize: 50, color: 'rgb(11,132,238)' }}
                />
                <div style={{ width: '100%', paddingLeft: 5, paddingRight: 5 }}>
                  <Input
                    textFieldStyles={classes.textField}
                    style={{ width: '100%' }}
                    label={
                      <Label
                        label='What is on your mind, Ellie'
                        marginTop={-5}
                      />
                    }
                  />
                </div>
              </div>
              <BreakLine
                style={{
                  paddingBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  opacity: 0.1,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  padding: 10,
                }}
              >
                <div style={{ display: 'flex' }}>
                  <VideoAddFilledIcon style={{ color: 'rgb(243,66,95)' }} />
                  <Label label='Live Video' />
                </div>
                <div style={{ display: 'flex' }}>
                  <AlbumIcon style={{ color: 'rgb(69,189,98)' }} />
                  <Label label='Photo/Video' />
                </div>
                <div style={{ display: 'flex' }}>
                  <HappySmileIcon style={{ color: 'rgb(247,185,40)' }} />
                  <Label label='Feeling/Activity' />
                </div>
              </div>
            </div>

            {/* 8th */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: 'rgb(255,255,255)',
                marginTop: 10,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Label
                label='No More Posts'
                fontWeight={1000}
                color='rgb(137,148,161)'
              />
              <Label
                label='Add more friends to see more posts in your News Feed'
                color='rgb(137,148,161)'
              />
              <Button
                name={<Label label='Find Friends' fontWeight={700} />}
                sx={{
                  backgroundColor: 'rgb(27,116,228)',
                  width: '100%',
                  marginTop: 2,
                  '&:hover': { backgroundColor: '		hsl(213, 79%, 40%))' },
                }}
                variant='contained'
              />
            </div>
          </div>
          {/* 9th */}
          <div style={{ marginRight: 60 }}>
            <Label
              label='Group Conversations'
              color='rgb(134,135,139)'
              marginTop={10}
            />
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  backgroundColor: 'rgb(228,230,235)',
                  borderRadius: 40,
                  paddingRight: 15,

                  paddingLeft: 15,
                  paddingTop: 15,
                  paddingBottom: 10,
                  marginLeft: -10,
                }}
              >
                <AddItemIcon />
              </div>
              <div style={{ paddingTop: 15, paddingLeft: 5 }}>
                <Label label='Create New Group' />
              </div>
            </div>
          </div>
        </div>
        {/* 10th */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 200,
            marginLeft: 10,
          }}
        >
          <Label label='Privacy' margin={5} color='rgb(146,148,151)' />
          <Label
            label='⬤'
            fontSize={5}
            color='rgba(146,148,151,0.7)'
            marginTop={5}
            marginLeft={3}
            margin={3}
          />
          <Label label='Terms' margin={5} color='rgb(146,148,151)' />
          <Label
            label='⬤'
            fontSize={5}
            color='rgba(146,148,151,0.7)'
            marginTop={5}
            marginLeft={3}
            margin={3}
          />
          <Label label='Advertising' margin={5} color='rgb(146,148,151)' />
          <Label
            label='⬤'
            fontSize={5}
            color='rgba(146,148,151,0.7)'
            marginTop={5}
            marginLeft={3}
            margin={3}
          />
          <Label label='Ad choices' color='rgb(146,148,151)' />
          <PlayArrowOutlineIcon style={{ color: 'rgb(146,148,151)' }} />
          <Label
            label='⬤'
            fontSize={5}
            color='rgba(146,148,151,0.7)'
            marginTop={5}
          />
          <Label label='Cookies' margin={5} color='rgb(146,148,151)' />
          <Label
            label='⬤'
            fontSize={5}
            color='rgba(146,148,151,0.7)'
            marginTop={5}
            marginLeft={3}
            margin={3}
          />
          <Label label='More' margin={5} color='rgb(146,148,151)' />
          <Label
            label='⬤'
            fontSize={5}
            color='rgba(146,148,151,0.7)'
            marginTop={5}
            marginLeft={3}
            margin={3}
          />
          <Label label='©' margin={5} color='rgb(146,148,151)' />
          <Label label='2022' margin={5} color='rgb(146,148,151)' />
        </div>

        {/* 11th */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <span
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              padding: 5,
              fontSize: 50,
              marginRight: 10,
              marginTop: -40,
              marginBottom: 15,
            }}
            className='iconify'
            data-icon='akar-icons:edit'
          ></span>
        </div>
      </div>
    </>
  );
}

export default Facebook;
