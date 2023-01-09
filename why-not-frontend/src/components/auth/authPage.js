import React, { useState } from 'react';
import {
  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBBtn,
  MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane,
  MDBInput, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader,
  MDBModalTitle, MDBModalBody, MDBModalFooter,
} from 'mdb-react-ui-kit';
import './authPage.css'
import Images from '../../constants/Images';
import AuthService from '../../services/users';
import { useToasts } from 'react-toast-notifications'

export default function AuthPage() {
  const [basicActive, setBasicActive] = useState('tabLogin');
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [emailRegister, setEmailRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')
  const [retypePasswordRegister, setRetypePasswordRegister] = useState('')
  const [emailForgotPassword, setEmailForgotPassword] = useState('')
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false)
  const [registerClientModal, setRegisterClientModal] = useState(false)
  const [registerManagerModal, setRegisterManagerModal] = useState(false)

  const toggleForgotPasswordModal = () => setForgotPasswordModal(!forgotPasswordModal);
  const toggleRegisterClientModal = () => setRegisterClientModal(!registerClientModal)
  const toggleRegisterManagerModal = () => setRegisterManagerModal(!registerManagerModal)

  const { addToast } = useToasts()

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  function updateEmailLogin(event) {
    setEmailLogin(event.target.value)
  }

  function updatePasswordLogin(event) {
    setPasswordLogin(event.target.value)
  }

  function updateEmailRegister(event) {
    setEmailRegister(event.target.value)
  }

  function updatePasswordRegister(event) {
    setPasswordRegister(event.target.value)
  }

  function updateRetypePasswordRegister(event) {
    setRetypePasswordRegister(event.target.value)
  }

  function updateEmailForgotPassword(event) {
    setEmailForgotPassword(event.target.value)
  }

  function login() {
    if (emailLogin === '') {
      addToast('Please fill in the email field!', {
        appearance: 'info',
        autoDismiss: true,
      })
      return;
    }

    if (passwordLogin === '') {
      addToast('Please fill in the password field!', {
        appearance: 'info',
        autoDismiss: true,
      })
      return;
    }

    let requestBody = {
      "email": emailLogin,
      "password": passwordLogin
    }

    AuthService.login(requestBody).then(response => {
      if (response.data) {
        let user = response.data
        if (user.active) {
          localStorage.setItem('user', JSON.stringify(response.data))
          window.location.href = "/map"
        } else {
          addToast('Your account was not activated yet!', {
            appearance: 'error',
            autoDismiss: true,
          })
        }
      } else {
        addToast('Incorrect email or password!', {
          appearance: 'error',
          autoDismiss: true,
        })
      }
    })
  }

  function showPassword() {
    toggleForgotPasswordModal()

    addToast('Don\'t forget it again: Passw0rd!', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  function register(type) {

    if (emailRegister === '') {
      addToast('Please fill in the email field!', {
        appearance: 'info',
        autoDismiss: true,
      })
      return;
    }

    if (passwordRegister === '') {
      addToast('Please fill in the password field!', {
        appearance: 'info',
        autoDismiss: true,
      })
      return;
    }

    if (passwordRegister !== retypePasswordRegister) {
      addToast('Passwords do not match!', {
        appearance: 'error',
        autoDismiss: true,
      })
      return;
    }

    let requestBody = {
      "email": emailRegister,
      "password": passwordRegister,
      "type": type
    }

    AuthService.register(requestBody).then(response => {
      if (response.data) {
        handleBasicClick('tabLogin')
      }
    })
  }

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
                  <MDBInput label='Email' id='emailLogin' type='email' onChange={updateEmailLogin} />
                  <MDBInput label='Password' id='passwordLogin' type='password' onChange={updatePasswordLogin} />
                </MDBCol>
                <MDBRow center>
                  <MDBCol>
                    <MDBBtn rounded className='purple-btn mx-2' onClick={login}>Log in</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow center style={{ paddingTop: '20px' }}>
                  <p><a className="pe-auto link-color" style={{ cursor: 'pointer' }} onClick={toggleForgotPasswordModal}>Forgot password?</a></p>

                </MDBRow>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === 'tabRegister'}>
                <MDBCol size='10'>
                  <MDBInput label='Email' id='emailRegister' type='email' onChange={updateEmailRegister}/>
                  <MDBInput label='Password' id='passwordRegister' type='password' onChange={updatePasswordRegister} />
                  <MDBInput label='Retype password' id='retypePasswordRegister' type='password' onChange={updateRetypePasswordRegister} />
                </MDBCol>
                <MDBRow center>
                  <MDBCol>
                    <MDBBtn rounded className='purple-btn mx-2' onClick={() => register("Client")}>Register client</MDBBtn>
                  </MDBCol>
                  <MDBCol>
                    <MDBBtn rounded className='purple-btn mx-2' onClick={() => register("Manager")}>Register manager</MDBBtn>
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
              <MDBModalTitle style={{ paddingLeft: '160px' }}>Find my password</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleForgotPasswordModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow center>
                <MDBCol size='10'>
                  <MDBInput label='Email' id='emailForgotPassword' type='email' onChange={updateEmailForgotPassword}/>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn rounded className='purple-btn' onClick={showPassword}>Find</MDBBtn>
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