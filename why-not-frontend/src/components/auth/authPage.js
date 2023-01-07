import React, { useState } from 'react';
import {
  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBBtn,
  MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane,
  MDBInput, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader,
  MDBModalTitle, MDBModalBody, MDBModalFooter,
} from 'mdb-react-ui-kit';
import './authPage.css'
import Images from '../../constants/Images';

export default function AuthPage() {
  const [basicActive, setBasicActive] = useState('tabLogin');
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false)
  const [registerClientModal, setRegisterClientModal] = useState(false)
  const [registerManagerModal, setRegisterManagerModal] = useState(false)


  const toggleForgotPasswordModal = () => setForgotPasswordModal(!forgotPasswordModal);
  const toggleRegisterClientModal = () => setRegisterClientModal(!registerClientModal)
  const toggleRegisterManagerModal = () => setRegisterManagerModal(!registerManagerModal)

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
    <div style={{
      backgroundImage: `url(${Images.background})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh',
      textAlign: '-webkit-center', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}>
      <MDBCard alignment='center' style={{ width: '30rem' }}>
        <MDBCardBody>
          <MDBRow center>
            <MDBCardImage className='card-photo' position='top' alt='...' src={Images.account} />
          </MDBRow>
          <MDBRow center>
            <MDBCol size='7' offsetMd='1'>
              <MDBTabs className='mb-2'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tabLogin')} active={basicActive === 'tabLogin'}>
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tabRegister')} active={basicActive === 'tabRegister'}>
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </MDBCol>
          </MDBRow>
          <MDBTabsContent style={{ textAlign: '-webkit-center' }}>
            <MDBTabsPane show={basicActive === 'tabLogin'}>
              <MDBCol size='10'>
                <MDBInput label='Email' id='emailLogin' type='email'/>
                <MDBInput label='Password' id='passwordLogin' type='password'/>
              </MDBCol>
              <MDBRow center>
                <MDBCol>
                  <MDBBtn rounded className='purple-btn mx-2'>Log in</MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow center style={{ paddingTop: '20px' }}>
                <p><a className="pe-auto link-color" style={{ cursor: 'pointer' }} onClick={toggleForgotPasswordModal}>Forgot password?</a></p>

              </MDBRow>
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tabRegister'}>
              <MDBCol size='10'>
                <MDBInput label='Email' id='emailRegister' type='email'/>
                <MDBInput label='Password' id='passwordRegister' type='password'/>
                <MDBInput label='Retype password' id='retypePasswordRegister' type='password'/>
              </MDBCol>
              <MDBRow center>
                <MDBCol>
                  <MDBBtn rounded className='purple-btn mx-2' onClick={toggleRegisterClientModal}>Register client</MDBBtn>
                </MDBCol>
                <MDBCol>
                  <MDBBtn rounded className='purple-btn mx-2' onClick={toggleRegisterManagerModal}>Register manager</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCardBody>
      </MDBCard>
    </div >

    <MDBModal show={forgotPasswordModal} setShow={setForgotPasswordModal} tabIndex='-1'>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader className='d-flex justify-content-center align-items-center my-3' >
            <MDBModalTitle style={{ paddingLeft: '160px' }}>Reset password</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleForgotPasswordModal}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBCol size='10'>
              <MDBInput label='Email' id='emailForgotPassword' type='email' />
            </MDBCol>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn rounded className='purple-btn'>Reset</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>

    <MDBModal show={registerClientModal} setShow={setRegisterClientModal} tabIndex='-1'>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader className='d-flex justify-content-center align-items-center my-3' >
            <MDBModalTitle style={{ paddingLeft: '160px' }}>Register as client</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleRegisterClientModal}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBCol size='10'>
              <MDBInput label='Email' id='emailForgotPassword' type='email' />
            </MDBCol>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn rounded className='purple-btn'>Register</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>

    <MDBModal show={registerManagerModal} setShow={setRegisterManagerModal} tabIndex='-1'>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader className='d-flex justify-content-center align-items-center my-3' >
            <MDBModalTitle style={{ paddingLeft: '150px' }}>Register as manager</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleRegisterManagerModal}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBCol size='10'>
              <MDBInput label='Email' id='emailForgotPassword' type='email' />
            </MDBCol>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn rounded className='purple-btn'>Register</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </>
  );
}