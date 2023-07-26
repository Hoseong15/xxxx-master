/* eslint-disable */

import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';
import './Nav.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav({ loggedIn, setLoggedIn }) {

  let [navChange, setNavChange] = useState(false);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [showNavbar, setShowNavbar] = useState(false);
  let [showlist, setShowlist] = useState(false);
  let [bookmark, setBookmark] = useState(false);
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [showname, setShowname] = useState('');

  let birth = localStorage.getItem('birth');
  let birthTxt = JSON.parse(birth);

  const navigate = useNavigate();

  const handleLogout = (event) => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('birth');
    navigate('/');
    setLoggedIn(false); // 상태 업데이트
    alert('성공적으로 로그아웃 되었습니다.')
  };

  const handleInfo = () => {
    setShowname(localStorage.getItem('name'));
    loggedIn ? (
      setIsModalOpen(true)
    ) : alert('로그인 후 이용부탁드립니다.');
  }

  let handleScroll = useCallback(() => {
    (window.scrollY > 45 && !navChange ) ? (
      setNavChange(true)
    ) : (window.scrollY < 45 && navChange ) ? (
      setNavChange(false)
    ) : null
  }, [navChange]);

  useEffect(() => {
    isModalOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
  }, [isModalOpen]);

  useEffect(() => {
    let handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (navChange) {
      let timeout = setTimeout(() => {
        setBookmark(true);
      }, 500);

      return () => {
        clearTimeout(timeout);
      }
    } else {setBookmark(false)}
  }, [navChange]);

  useEffect(() => {
    let timeoutNav = setTimeout(() => {
      setShowNavbar(true);
    }, 500);

    return () => {
      clearTimeout(timeoutNav);
    };
  }, []);

  useEffect(() => {
    let timeoutList = setTimeout(() => {
      setShowlist(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutList);
    };
  }, []);




  return (
    <>
      <section className='global-header'>
        <nav className={`global-nav ${ navChange ? 'on' : '' } ${ showNavbar ? 'show' : '' }`}>
          <ul className={`nav-list ${ showlist ? 'showlist' : '' } ${ navChange ? 'on' : '' }`}>
            <a href='/'>Home</a>
            <a href='/post'>Notice</a>
            <a href='/about'>About</a>
          </ul>
          
          <ul className={`nav-list nav-op ${ showlist ? 'showlist' : '' } ${ navChange ? 'on' : '' }`}>
            {loggedIn ? (
              <>
                <a onClick={handleLogout}>&nbsp;LogOut&nbsp;</a>
                <a>lorem</a>
              </>
            ) : (
              <>
                <a href='/login'>Login</a>
                <a href='/signup'>Sign&nbsp;Up</a>
              </>
            )}
            <a className='nav-info-icon' onClick={handleInfo}>&nbsp;&nbsp;<FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;</a>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default Nav