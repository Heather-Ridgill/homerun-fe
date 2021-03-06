import React from 'react';
import styled from 'styled-components';
import SidebarMarketing from "../marketing/Sidebar-Marketing.js";
import Navigation from "../marketing/Navigation";
import Footer from "../marketing/Footer";

const AboutUsDraft = () => {

  const users = [
    { name: "Vinni Hoke", image: "https://avatars1.githubusercontent.com/u/34225237?s=460&v=4", url: "https://github.com/vinnihoke" },
    { name: "Micah Jank", image: "https://avatars3.githubusercontent.com/u/40408940?s=460&v=4", url: "https://github.com/MicahJank" },
    { name: "Zach Taylor", image: "https://avatars0.githubusercontent.com/u/37271885?s=460&v=4", url: "https://github.com/zbtaylor" },
    { name: "Katrina Roaix", image: "https://avatars3.githubusercontent.com/u/5169760?s=460&v=4", url: "https://github.com/kroaix" },
    { name: "Heather Ridgill", image: "https://avatars3.githubusercontent.com/u/49896861?s=460&v=4", url: "https://github.com/heather-ridgill" },
    { name: "Yankho Trumble", image: "https://avatars2.githubusercontent.com/u/33339750?s=460&v=4", url: "https://github.com/Mayankho" },
  ]

  return (
    <>
      <SidebarMarketing />
      <Navigation />
      <CardContainer>
        <h2>Our Team</h2>
        {users.map(user => {
          return (
            <div className="ui card">
              <img className="ui image" src={user.image} />
              <div className="content">
                <h2>{user.name}</h2>
                <button className="ui button black" onClick={() =>
                  window.open(user.url, '_blank')
                }>
                  <i className="ui icon github large"></i>
            Github
          </button>
              </div>
            </div>
          )
        })}

      </CardContainer>
    </>


    //   <SidebarMarketing />
    //   <Navigation />
    //   <H2>Our Team</H2>
    //   <CardContainer>
    //     {/* Vinni */}
    //     <DevCard>
    //       <DevImage
    //         src="https://avatars1.githubusercontent.com/u/34225237?s=460&v=4"
    //         alt='Profile'
    //       />
    //       <DevInfo>
    //         <DevInfoTitle>Vinni Hoke</DevInfoTitle>
    //         <DevInfoDesc>
    //           Project Manager &amp; Student at LambdaSchool
    //         </DevInfoDesc>
    //       </DevInfo>

    //       <button className="ui button black" onClick={() =>
    //         window.open("https://github.com/vinnihoke", '_blank')
    //       }>
    //         <i className="ui icon github large"></i>
    //         Github
    //       </button>


    //       <SocialButtons>
    //         <SocialButton
    //           src=""
    //           type='button'
    //           onClick={() =>
    //             window.open("https://github.com/vinnihoke", '_blank')
    //           }
    //         >
    //           <div>
    //             <i className="ui icon large github">Github</i>
    //           </div>
    //         </SocialButton>
    //         <SocialButton
    //           type='button'

    //           onClick={() =>
    //             window.open(
    //               "https://www.linkedin.com/in/vinnihoke/",
    //               '_blank',
    //             )
    //           }
    //         >
    //           <div>
    //             <i className="ui icon large linkedin">LinkedIn</i>
    //           </div>
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open({/* */ }, '_blank')
    //           }
    //         >
    //           <div>
    //             <i className="ui icon large twitter"></i>
    //             <p>Twitter</p>
    //           </div>
    //         </SocialButton>
    //       </SocialButtons>
    //     </DevCard>

    //     {/* Micah Jank */}
    //     <DevCard>
    //       <DevImage
    //         src='https://avatars3.githubusercontent.com/u/40408940?s=460&v=4'
    //         alt='Profile'
    //       />
    //       <DevInfo>
    //         <DevInfoTitle>Micah Jank</DevInfoTitle>
    //         <DevInfoDesc>
    //           Teacher Assistant &amp; Student at LambdaSchool
    //         </DevInfoDesc>
    //       </DevInfo>
    //       <SocialButtons>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open("https://github.com/MicahJank", '_blank')
    //           }
    //         >
    //           <div>
    //             <i className="ui icon large github">Github</i>
    //           </div>
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open(
    //               "https://www.linkedin.com/in/micah-jank/",
    //               '_blank',
    //             )
    //           }
    //         >
    //           <faLinkedin />
    //           <i class="fab fa-linkedin-in"></i>
    //           &nbsp;LinkedIn
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open({/* Micahs Twitter */ }, '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-twitter"></i>
    //           &nbsp;Twitter */}
    //         </SocialButton>
    //       </SocialButtons>
    //     </DevCard>

    //     {/* Zach */}
    //     <DevCard>
    //       <DevImage
    //         src="https://avatars0.githubusercontent.com/u/37271885?s=460&v=4"
    //         alt='Profile'
    //       />
    //       <DevInfo>
    //         <DevInfoTitle>Zach Taylor</DevInfoTitle>
    //         <DevInfoDesc>Student at Lambdsa School</DevInfoDesc>
    //       </DevInfo>
    //       <SocialButtons>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open('https://github.com/zbtaylor', '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-github"></i>
    //           &nbsp;GitHub */}
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open(
    //               "https://www.linkedin.com/in/zach-taylor-97b90a196/",
    //               '_blank',
    //             )
    //           }
    //         >
    //           <faLinkedin />
    //           <i class="fab fa-linkedin-in"></i>
    //           &nbsp;LinkedIn
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open({/* Zachs twitter */ }, '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-twitter"></i>
    //           &nbsp;Twitter */}
    //         </SocialButton>
    //       </SocialButtons>
    //     </DevCard>

    //     {/* Katrina */}
    //     <DevCard>
    //       <DevImage
    //         src="https://avatars3.githubusercontent.com/u/5169760?s=460&v=4"
    //         alt='Profile'
    //       />
    //       <DevInfo>
    //         <DevInfoTitle>Katrina Kroaix</DevInfoTitle>
    //         <DevInfoDesc>TA and student at Lambda</DevInfoDesc>
    //       </DevInfo>
    //       <SocialButtons>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open("https://github.com/kroaix", '_blank')
    //           }
    //         >
    //           <i class="fab fa-github"></i>
    //           &nbsp;GitHub
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open("https://www.linkedin.com/in/kroaix/", '_blank')
    //           }
    //         >
    //           {/* <faLinkedin />
    //           <i class="fab fa-linkedin-in"></i>
    //           &nbsp;LinkedIn */}
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open({/* Katrina's Twitter */ }, '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-twitter"></i>
    //           &nbsp;Twitter */}
    //         </SocialButton>
    //       </SocialButtons>
    //     </DevCard>

    //     {/* Heather */}
    //     <DevCard>
    //       <DevImage
    //         src="https://avatars3.githubusercontent.com/u/49896861?s=460&v=4"
    //         alt='Profile'
    //       />
    //       <DevInfo>
    //         <DevInfoTitle>Heather Ridgill</DevInfoTitle>
    //         <DevInfoDesc>
    //           Student at Lambda school
    //         </DevInfoDesc>
    //       </DevInfo>
    //       <SocialButtons>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open("https://github.com/Heather-Ridgill", '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-github"></i>
    //           &nbsp;GitHub */}
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open(
    //               "https://www.linkedin.com/in/heatherridgill/",
    //               '_blank',
    //             )
    //           }
    //         >
    //           {/* <i class="fab fa-linkedin-in"></i>
    //           &nbsp;LinkedIn */}
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open({/* Heathers Twitter */ }, '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-twitter"></i>
    //           &nbsp;Twitter */}
    //         </SocialButton>
    //       </SocialButtons>
    //     </DevCard>
    //     <DevCard>
    //       <DevImage
    //         src="https://avatars2.githubusercontent.com/u/33339750?s=460&v=4"
    //         alt='Profile'
    //       />
    //       <DevInfo>
    //         <DevInfoTitle>Yankho Trumble</DevInfoTitle>
    //         <DevInfoDesc>
    //           Student at Lambda School
    //         </DevInfoDesc>
    //       </DevInfo>
    //       <SocialButtons>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open("https://github.com/Mayankho", '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-github"></i>
    //           &nbsp;GitHub */}
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open(
    //               "https://www.linkedin.com/in/yankho/",
    //               '_blank',
    //             )
    //           }
    //         >
    //           {/* <i class="fab fa-linkedin-in"></i>
    //           &nbsp;LinkedIn */}
    //         </SocialButton>
    //         <SocialButton
    //           type='button'
    //           onClick={() =>
    //             window.open({/* Yankhko's Twitter*/ }, '_blank')
    //           }
    //         >
    //           {/* <i class="fab fa-twitter"></i>
    //           &nbsp;Twitter */}
    //         </SocialButton>
    //       </SocialButtons>
    //     </DevCard>
    //   </CardContainer>
    //   <Footer />
    // </>
  );
};

export default AboutUsDraft;

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   margin-bottom: 50px;
//   @media (max-width: 500px) {
//     flex-direction: column;
//     align-self: center;
//   }



const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto 50px;
`;


const DevCard = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s;
  width: 300px;
  border-radius: 3px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  margin: 20px;
  &:hover {
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  }
`;

const DevImage = styled.img`
  width: 75%;
  height: auto;
  border-radius: 50%;
`;

const DevInfo = styled.div`
  width: 75%;
  height: 60px;
  margin-top: 15px;
`;

const DevInfoTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  color: #636578;
`;

const DevInfoDesc = styled.h2`
  text-align: center;
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 300;
`;

const SocialButtons = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px 0 0;
`;

const SocialButton = styled.button`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  width: 100px;
  color: #fff;
  background: #636578;
  border: 1px solid #636578;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #636578;
    background: #fff;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: #636578;
  margin: 20px 0;
`;