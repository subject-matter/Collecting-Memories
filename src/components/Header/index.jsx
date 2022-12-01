import React, { useState } from "react";
import {
  AS,
  Header,
  Hamburger,
  HeaderContainer,
  NavWrapper,
  NavBar,
  NavLink,
  NavImage
} from "./styles";
import { Social, Icon, IconHover } from "../Footer/styles";
import { Link } from "react-router-dom";

const HeaderComponent = ({ menuOpened, toggleMenu }) => (
  <Header>
    <Link to="/">
      <AS title="All Sorts" className={menuOpened ? "opened" : ""} />
    </Link>

    <Hamburger onClick={toggleMenu} className={menuOpened ? "opened" : ""} />
  </Header>
);

const MenuComponent = ({ menuOpened }) => (
  <NavWrapper className={menuOpened ? "opened" : ""}>
    <NavImage />
    <NavBar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <nav className="main-nav__bar px-12 sm:pl-50 pr-30">
          <NavLink href="https://allsorts.org.nz/impacts-on-my-work">
            {" "}
            Impacts on my work
          </NavLink>

          <NavLink
            href="https://allsorts.org.nz/living-with-covid-19"
            id="link-2"
            className="nav__link--hover block mb-0 nav__link text-35 leading-39 sm:text-53 sm:leading-56 text-white "
          >
            Living with COVID-19
          </NavLink>

          <NavLink
            href="https://allsorts.org.nz/healthcare-workers"
            id="link-3"
            className="nav__link--hover block mb-0 nav__link text-35 leading-39 sm:text-53 sm:leading-56 text-white "
          >
            Healthcare workers
          </NavLink>

          <NavLink
            href="https://allsorts.org.nz/all-sorts-of-stories"
            id="link-4"
            className="nav__link--hover block mb-0 nav__link text-35 leading-39 sm:text-53 sm:leading-56 text-white "
          >
            All sorts of awesome
          </NavLink>

          <NavLink
            href="https://allsorts.org.nz/further-support"
            id="link-5"
            className="nav__link--hover block mb-0 nav__link text-35 leading-39 sm:text-53 sm:leading-56 text-white "
          >
            Further support
          </NavLink>

          <NavLink
            href="https://allsorts.org.nz/resources"
            id="link-6"
            className="nav__link--hover block mb-0 nav__link text-35 leading-39 sm:text-53 sm:leading-56 text-white "
          >
            Free resources
          </NavLink>

          <NavLink
            href="https://allsorts.org.nz/our-campaigns"
            id="link-7"
            className="nav__link--hover block mb-0 nav__link text-35 leading-39 sm:text-53 sm:leading-56 text-white "
          >
            Our campaigns
          </NavLink>

          <NavLink
            href="https://allsorts.org.nz/about-us"
            id="link-8"
            className="nav__link--hover block mb-0 nav__link text-35 leading-39 sm:text-53 sm:leading-56 text-white "
          >
            About us
          </NavLink>
        </nav>

        <Social style={{ alignSelf: "start" }}>
          <Icon>
            <a
              href="https://www.facebook.com/mentalhealthfoundationNZ"
              className="pr-10 svg-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <IconHover
                  d="M25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.739 4.57104 23.9104 10.5469 24.8481V16.1133H7.37305V12.5H10.5469V9.7461C10.5469 6.61328 12.4131 4.88281 15.2683 4.88281C16.6355 4.88281 18.0664 5.12695 18.0664 5.12695V8.20313H16.4902C14.9375 8.20313 14.4531 9.16675 14.4531 10.1563V12.5H17.9199L17.3657 16.1133H14.4531V24.8481C20.429 23.9104 25 18.739 25 12.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </Icon>
          <Icon>
            <a
              href="https://www.instagram.com/mhfnz/"
              className="pr-10 svg-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <IconHover
                  d="M12.5 2.25098C15.8398 2.25098 16.2354 2.26562 17.5488 2.32422C18.7695 2.37793 19.4287 2.58301 19.8682 2.75391C20.4492 2.97852 20.8691 3.25195 21.3037 3.68652C21.7432 4.12598 22.0117 4.54102 22.2363 5.12207C22.4072 5.56152 22.6123 6.22559 22.666 7.44141C22.7246 8.75976 22.7393 9.15527 22.7393 12.4902C22.7393 15.8301 22.7246 16.2256 22.666 17.5391C22.6123 18.7598 22.4072 19.4189 22.2363 19.8584C22.0117 20.4395 21.7383 20.8594 21.3037 21.2939C20.8643 21.7334 20.4492 22.002 19.8682 22.2266C19.4287 22.3975 18.7646 22.6025 17.5488 22.6562C16.2305 22.7148 15.835 22.7295 12.5 22.7295C9.16016 22.7295 8.76465 22.7148 7.45117 22.6562C6.23047 22.6025 5.57129 22.3975 5.13184 22.2266C4.55078 22.002 4.13086 21.7285 3.69629 21.2939C3.25684 20.8545 2.98828 20.4395 2.76367 19.8584C2.59277 19.4189 2.3877 18.7549 2.33398 17.5391C2.27539 16.2207 2.26074 15.8252 2.26074 12.4902C2.26074 9.15039 2.27539 8.75488 2.33398 7.44141C2.3877 6.2207 2.59277 5.56152 2.76367 5.12207C2.98828 4.54102 3.26172 4.12109 3.69629 3.68652C4.13574 3.24707 4.55078 2.97852 5.13184 2.75391C5.57129 2.58301 6.23535 2.37793 7.45117 2.32422C8.76465 2.26562 9.16016 2.25098 12.5 2.25098ZM12.5 0C9.10645 0 8.68164 0.0146484 7.34863 0.0732422C6.02051 0.131836 5.10742 0.34668 4.31641 0.654297C3.49121 0.976562 2.79297 1.40137 2.09961 2.09961C1.40137 2.79297 0.976562 3.49121 0.654297 4.31152C0.34668 5.10742 0.131836 6.01562 0.0732422 7.34375C0.0146484 8.68164 0 9.10645 0 12.5C0 15.8936 0.0146484 16.3184 0.0732422 17.6514C0.131836 18.9795 0.34668 19.8926 0.654297 20.6836C0.976562 21.5088 1.40137 22.207 2.09961 22.9004C2.79297 23.5938 3.49121 24.0234 4.31152 24.3408C5.10742 24.6484 6.01562 24.8633 7.34375 24.9219C8.67676 24.9805 9.10156 24.9951 12.4951 24.9951C15.8887 24.9951 16.3135 24.9805 17.6465 24.9219C18.9746 24.8633 19.8877 24.6484 20.6787 24.3408C21.499 24.0234 22.1973 23.5938 22.8906 22.9004C23.584 22.207 24.0137 21.5088 24.3311 20.6885C24.6387 19.8926 24.8535 18.9844 24.9121 17.6562C24.9707 16.3232 24.9854 15.8984 24.9854 12.5049C24.9854 9.11133 24.9707 8.68652 24.9121 7.35352C24.8535 6.02539 24.6387 5.1123 24.3311 4.32129C24.0234 3.49121 23.5986 2.79297 22.9004 2.09961C22.207 1.40625 21.5088 0.976562 20.6885 0.65918C19.8926 0.351562 18.9844 0.136719 17.6562 0.078125C16.3184 0.0146484 15.8936 0 12.5 0Z"
                  fill="white"
                />
                <IconHover
                  d="M12.5 6.0791C8.95508 6.0791 6.0791 8.95508 6.0791 12.5C6.0791 16.0449 8.95508 18.9209 12.5 18.9209C16.0449 18.9209 18.9209 16.0449 18.9209 12.5C18.9209 8.95508 16.0449 6.0791 12.5 6.0791ZM12.5 16.665C10.2002 16.665 8.33496 14.7998 8.33496 12.5C8.33496 10.2002 10.2002 8.33496 12.5 8.33496C14.7998 8.33496 16.665 10.2002 16.665 12.5C16.665 14.7998 14.7998 16.665 12.5 16.665Z"
                  fill="white"
                />
                <IconHover
                  d="M20.6738 5.8252C20.6738 6.65528 20 7.32422 19.1748 7.32422C18.3447 7.32422 17.6758 6.65039 17.6758 5.8252C17.6758 4.99512 18.3496 4.32617 19.1748 4.32617C20 4.32617 20.6738 5 20.6738 5.8252Z"
                  fill="white"
                />
              </svg>
            </a>
          </Icon>
          <Icon>
            <a
              href="https://twitter.com/mentalhealthnz"
              className="pr-10 svg-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g
                  style={{
                    clipPath: "url(#nusmldpres-clip0_24_6075)"
                  }}
                >
                  <IconHover
                    d="M7.86475 22.6563C17.2964 22.6563 22.4565 14.8403 22.4565 8.06447C22.4565 7.84474 22.4517 7.62013 22.4419 7.4004C23.4457 6.67447 24.312 5.77529 25 4.74513C24.0651 5.16107 23.0725 5.43272 22.0562 5.5508C23.1263 4.90931 23.9276 3.90156 24.3115 2.71437C23.3047 3.31103 22.2037 3.73192 21.0557 3.959C20.2821 3.13707 19.2594 2.59286 18.1455 2.4105C17.0316 2.22814 15.8887 2.41779 14.8935 2.95013C13.8982 3.48247 13.106 4.32785 12.6394 5.35556C12.1728 6.38328 12.0577 7.53609 12.312 8.63576C10.2734 8.53346 8.2791 8.00389 6.45831 7.08138C4.63753 6.15888 3.03093 4.86403 1.74268 3.28078C1.08792 4.40966 0.887559 5.74549 1.18232 7.01679C1.47709 8.28809 2.24486 9.39945 3.32959 10.125C2.51524 10.0992 1.71872 9.8799 1.00586 9.48536V9.54884C1.00513 10.7335 1.41469 11.8819 2.16491 12.7987C2.91513 13.7156 3.95971 14.3444 5.12109 14.5781C4.36672 14.7845 3.57498 14.8146 2.80713 14.666C3.13485 15.6849 3.77247 16.576 4.63101 17.215C5.48955 17.854 6.52617 18.209 7.59619 18.2305C5.77961 19.6574 3.5356 20.4314 1.22559 20.4277C0.815924 20.4271 0.406666 20.402 0 20.3526C2.34673 21.8581 5.07659 22.6577 7.86475 22.6563Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="nusmldpres-clip0_24_6075">
                    <rect width="25" height="25" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Icon>
          <Icon>
            <a
              href="https://www.youtube.com/user/mhfnz"
              className="pr-10 svg-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <IconHover
                  d="M24.751 7.5C24.751 7.5 24.5068 5.77637 23.7549 5.01953C22.8027 4.02344 21.7383 4.01855 21.25 3.95996C17.7539 3.70605 12.5049 3.70605 12.5049 3.70605H12.4951C12.4951 3.70605 7.24609 3.70605 3.75 3.95996C3.26172 4.01855 2.19727 4.02344 1.24512 5.01953C0.493164 5.77637 0.253906 7.5 0.253906 7.5C0.253906 7.5 0 9.52637 0 11.5479V13.4424C0 15.4639 0.249023 17.4902 0.249023 17.4902C0.249023 17.4902 0.493164 19.2139 1.24023 19.9707C2.19238 20.9668 3.44238 20.9326 3.99902 21.04C6.00098 21.2305 12.5 21.2891 12.5 21.2891C12.5 21.2891 17.7539 21.2793 21.25 21.0303C21.7383 20.9717 22.8027 20.9668 23.7549 19.9707C24.5068 19.2139 24.751 17.4902 24.751 17.4902C24.751 17.4902 25 15.4687 25 13.4424V11.5479C25 9.52637 24.751 7.5 24.751 7.5ZM9.91699 15.7422V8.71582L16.6699 12.2412L9.91699 15.7422Z"
                  fill="white"
                />
              </svg>
            </a>
          </Icon>
          <Icon>
            <a
              href="https://www.linkedin.com/company/mental-health-foundation-of-new-zealand/"
              className="pr-10 svg-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <IconHover
                  d="M23.1494 0H1.8457C0.825195 0 0 0.805664 0 1.80176V23.1934C0 24.1895 0.825195 25 1.8457 25H23.1494C24.1699 25 25 24.1895 25 23.1982V1.80176C25 0.805664 24.1699 0 23.1494 0ZM7.41699 21.3037H3.70605V9.37012H7.41699V21.3037ZM5.56152 7.74414C4.37012 7.74414 3.4082 6.78223 3.4082 5.5957C3.4082 4.40918 4.37012 3.44727 5.56152 3.44727C6.74805 3.44727 7.70996 4.40918 7.70996 5.5957C7.70996 6.77734 6.74805 7.74414 5.56152 7.74414ZM21.3037 21.3037H17.5977V15.5029C17.5977 14.1211 17.5732 12.3389 15.6689 12.3389C13.7402 12.3389 13.4473 13.8477 13.4473 15.4053V21.3037H9.74609V9.37012H13.3008V11.001H13.3496C13.8428 10.0635 15.0537 9.07227 16.8555 9.07227C20.6104 9.07227 21.3037 11.543 21.3037 14.7559V21.3037Z"
                  fill="white"
                />
              </svg>
            </a>
          </Icon>
        </Social>
      </div>
    </NavBar>
  </NavWrapper>
);

const MenuContainer = () => {
  const [menuOpened, toggleMenuOpened] = useState(false);

  return (
    <HeaderContainer>
      <MenuComponent menuOpened={menuOpened} />
      <HeaderComponent
        menuOpened={menuOpened}
        toggleMenu={() => toggleMenuOpened(!menuOpened)}
      />
    </HeaderContainer>
  );
};

export default MenuContainer;
