import { Typography, Grid, Box, Link } from '@mui/material'
import EffyM from "./images/effy.png";
import DanZ from "./images/dan.png";
import QasimM from "./images/qasim.png";

import Form from "./form"
import SwipeableTabs from "./components/clients/slider"
import Homepage from './components/HomeBody/homebody';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Home, Twitter } from '@mui/icons-material';
import "./App.css"

const imagesSources =
  [
    {
      src: DanZ,
      name: "Dan Melnick",
      firstPara:
        "Originally from the Chicago area, is now a Texas resident based in Austin.",
      secondPara:
        "He is a serial entrepreneur who has founded several companies, including an e-commerce company and a mobile application marketplace.",
      thirdPara:
        "Dan became a client of Qasim Masud in 2019 and later partnered with him in 2021, impressed by his software development expertise.",
      fourthPara:
        "Outside of work, Dan enjoys working out and networking with other entrepreneurs and business leaders. You can find him on LinkedIn, Twitter, Instagram, and Facebook and say hello!",
      linkedInLink: "https://www.linkedin.com/in/danpmelnick/",
      twitterLink: "https://x.com/danpmelnick?s=21&t=952lXACp3K5MLGo5R5T_fA",
      instagramLink:
        "https://www.instagram.com/danpmelnick?igsh=aWg0cXJ6azRkcW1i",
      facebookLink: "https://www.facebook.com/DanMelnickOfficial?mibextid=ZbWKwL",
    },
    {
      src: QasimM,
      name: "Qasim Masud",
      firstPara:
        "An industry veteran since 2009, Qasim has navigated the ever-evolving landscape of mobile applications, honing his skills and insights.",
      secondPara:
        "In 2016, he embarked on an entrepreneurial journey and founded his first company. Now, Qasim serves as the Chief Technology Officer at Zing.",
      thirdPara:
        "With a steadfast commitment to innovation, he continuously explores emerging technologies to ensure that Zing remains at the forefront of technological advancements. His passion lies in harnessing these tools to empower businesses and exceed expectations. You can find him on LinkedIn to say hi!",
      linkedInLink: "https://www.linkedin.com/in/ceo-founder-innovation/",
    },
    {
      src: EffyM,
      name: "Effy Gittler",
      firstPara:
        "Originally from Cherry Hill, New Jersey, Effy now resides in New York City.",
      secondPara:
        "He joined the team as a co-founder in 2023 and has since been an integral part of the company. Effy founded a mobile application and partnered with Dan and Qasim to deliver exceptional experiences for clients worldwide. ",
      thirdPara:
        "Outside of work, Effy enjoys biking and running in Central Park and meeting and networking with people in New York City. You can connect with him on LinkedIn and say hello!",
      linkedInLink: "https://www.linkedin.com/in/ephraim-gittler-826b5329/",
    },
  ];
const Sources = [
  { name: "test00", age: 0 },
  { name: "test01", age: 10 },
  { name: "test02", age: 20 },
  { name: "test02", age: 20, games: ["COD", "CounterStrike", "ClashOFClans"] },
]

function App()
{
  return (
    <>
    <Homepage />
    <SwipeableTabs/>
      <Box sx={{ backgroundColor: "#C0C0C0", borderRadius: 3 }} m={1} p={2}>
        <Typography variant='h3' pb={2} sx={{ textAlign: "center" }}>Meet the Founders</Typography>
        <Box>
          <Grid container spacing={3}>
            {imagesSources?.map((item) =>
            {
              return (
                <Grid sm={6} lg={4} md={4} item textAlign={"center"} key={item?.name}>
                  <Box
                    sx={{ position: 'relative', zIndex: 2, }}
                    component="img"
                    // sx={{
                    //   height: 233,
                    //   width: 350,
                    //   maxHeight: { xs: 233, md: 167 },
                    //   maxWidth: { xs: 350, md: 250 },
                    // }}
                    mb={-9}
                    alt="Founder"
                    src={item?.src}
                  />
                  <Box pt={8} sx={{ position: 'relative', zIndex: 1, backgroundColor: "#E8E8E8", borderRadius: 4, height: { xs: "auto", sm: "480px", md: "550px", lg: "420px", xl: "550px" } }}>
                    <Box p={2}>
                      <Typography variant='h5'>{item?.name}</Typography>
                      <Typography>{item?.firstPara}</Typography>
                      <Typography>{item?.secondPara}</Typography>
                      <Typography>{item?.thirdPara}</Typography>
                      <Typography>{item?.fourthPara}</Typography>
                    </Box>
                    <Box sx={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: 0, align: 'center', justifyContent: 'center'
                    }}>
                      <FacebookIcon href={item?.facebookLink}></FacebookIcon>
                      &nbsp;&nbsp;
                      {}
                      <InstagramIcon href={item?.instagramLink}></InstagramIcon>
                      &nbsp;&nbsp;
                      {}
                      <XIcon href={item?.twitterLink}></XIcon>
                      &nbsp;&nbsp;
                      {}
                      <LinkedInIcon href={item?.linkedInLink
                      } ></LinkedInIcon>
                      &nbsp;&nbsp;
                      {}
                    </Box>
                  </Box>
                </Grid>
              );

            })}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Form />
      </Box>
    </>
  );
}

export default App;
  // <Box sx={{ backgroundColor: 'grey' }} m={2} p={2}>
  //   <Box sx={{ backgroundColor: 'lightblue' }} m=
  //     {2} p={2}>
  //     <Typography variant="h3" align="center" >
  //       Meet The
  //       <span
  //         style={{
  //           fontWeight: "400",
  //         }}
  //       >
  //         {" "}
  //         Founders{" "}
  //       </span>
  //     </Typography>
  //     <Grid container spacing={2} p={3} >
  //       {Sources?.map((items) =>
  //       {
  //         return (
  //           <Grid item lg={4} md={4} sm={12} xs={12} textAlign={"center"} key={items?.name}>
  //             <Typography align='center'> {items?.name} </Typography>
  //             {items.games?.forEach((game) =>
  //             {
  //               return (<Typography align='center'> {game}</Typography>
  //               );
  //             })}
  //           </Grid>
  //         );

  //       })}
  //     </Grid>
  //   </Box>
  // </Box>
