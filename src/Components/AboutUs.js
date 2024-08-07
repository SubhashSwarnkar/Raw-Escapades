import React from 'react';
import { Box, Container, Typography, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Footer from './Footer';
import Navbar from './Navbar'; 

const AboutUs = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const [chapterValue, setChapterValue] = React.useState('1');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChapterChange = (event, newValue) => {
    setChapterValue(newValue);
  };

  return (
    <Box>
      <Navbar/>
      <Box
      
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/aboutus.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFF',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div></div>
        <Container>
          <Box textAlign="center" mt={8} mb={4}>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: '"American Typewriter", sans-serif',
                fontSize: '62px',
                fontWeight: 400,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '28px',
                letterSpacing: '0.32px',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              You are looking for a cultural city break, a child-friendly family
              holiday, unlimited adventure, a romantic getaway, or just to escape
              and uncover.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ textAlign: 'center', padding: '2rem' }}>
        <Typography
          variant="h1"
          sx={{
            color: '#000',
            fontFamily: 'American Typewriter',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            marginBottom: '2rem',
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#000',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '22px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '37px',
            letterSpacing: '0.44px',
            marginBottom: '2rem',
            margin: '50px 120px'
          }}
        >
          “When the routine starts to get to you, when you need a break from that
          hectic city life, when you find yourself yearning for a reset in
          nature… Whatever the reason, we’re here to help you craft that perfect
          escape!”
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <Box
            component="img"
            src="Images/aboutimg.png" // Replace with your image path
            sx={{
              width: '521px',
              height: '502px',
              marginRight: '2rem',
              marginBottom: '1rem',
            }}
          />
          <Box sx={{ maxWidth: '765px' }}>
            <TabContext value={tabValue}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  marginBottom: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.46)',
                  boxShadow: '0px 12px 80px 0px rgba(255, 94, 3, 0.09)',
                }}
              >
                <TabList
                  onChange={handleTabChange}
                  aria-label="About Us Tabs"
                  sx={{ color: 'green',fontWeight:'600',fontSize:'28px' }}
                  variant="fullWidth"
                >
                  <Tab label="Who we are" value="1" />
                  <Tab label="What we do" value="2" />
                  <Tab label="Why travel with us?" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography
                  sx={{
                    color: '#22292B',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '30px',
                  }}
                >
                  At rhoncus mollis sed netus posuere feugiat egestas. Sed nisi,
                  aliquam posuere massa habitant tellus. Adipiscing donec nisl
                  maecenas amet mi diam congue tortor ipsum. Phasellus nibh eu
                  aenean eget at. Praesent iaculis pretium nisl pellentesque arcu sit
                  mauris. Laoreet ullamcorper euismod interdum adipiscing et. Et
                  tortor, placerat consequat praesent tincidunt. Venenatis orci a sed
                  nisi, erat. Sed augue nunc, facilisi duis nisl suspendisse.<br/>
                  <br/> In
                  condimentum convallis nullam vestibulum, turpis. Scelerisque congue
                  id ac sed cras. Quis ullamcorper eget justo, tempus a eget nulla
                  faucibus eu. Ut cras amet, gravida posuere risus. Id quisque
                  fermentum scelerisque metus sed commodo et tempor odio. Felis
                  placerat dui tristique at dui. Cursus tempus, maecenas turpis
                  fermentum egestas consectetur. Mi ullamcorper dui orci integer
                  magna. Dignissim consequat semper euismod adipiscing sit gravida
                  parturient fermentum. Proin.
                </Typography>
              </TabPanel>
              <TabPanel value="2">
                <Typography
                  sx={{
                    color: '#22292B',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '30px',
                  }}
                >
                  {/* Content for What we do */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
                  lacinia nunc, vel aliquet nunc nisi in metus.
                </Typography>
              </TabPanel>
              <TabPanel value="3">
                <Typography
                  sx={{
                    color: '#22292B',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '30px',
                  }}
                >
                  {/* Content for Why travel with us? */}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </Typography>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
        <Container maxWidth="md">
          <TabContext value={chapterValue}>
            <Box
              sx={{
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.46)',
                boxShadow: '0px 12px 80px 0px rgba(255, 94, 3, 0.09)',
                marginBottom: '2rem',
                padding: '1rem',
              }}
            >
              <TabList
                onChange={handleChapterChange}
                aria-label="Chapter Tabs"
                sx={{ justifyContent: 'center', color: 'green' }}
                variant="fullWidth"
              >
                <Tab label="Chapter One" value="1" />
                <Tab label="Chapter Two" value="2" />
                <Tab label="Chapter Three" value="3" />
                <Tab label="Chapter Four" value="4" />
                <Tab label="Chapter Five" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{  borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.46)',
                boxShadow: '0px 12px 80px 0px rgba(255, 94, 3, 0.09)',}}>
              <Typography
                variant="h2"
                sx={{
                  color: '#000',
                  fontFamily: 'American Typewriter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textAlign: 'center',
                  marginBottom: '1rem',
                }}
              >
                Chapter One: The New Beginnings 2016 - 2018
              </Typography>
              <Typography
                sx={{
                  color: '#22292B',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '30px',
                }}
              >
                We contacted our people from previous years of travel and found a
                beautiful Chickoo Farm with a lot of space, beauty and potential in
                Northern Mumbai –Dahanu. A place known for its beautiful beaches and
                has served as a wonderful escape from the hustle-bustle of the never
                sleeping city of Mumbai.
                <br />
                <br />
                Not just we generated good sales and leads but also started with
                getaways for corporates. We as a brand started getting recognition as
                a premium camping brand for weekenders in Mumbai. We Hosted Music
                Events, New Year’s Eves and Even Destination wedding when required.
                (who doesn’t like the idea of beach wedding?)Going forward we noticed
                a huge requirement to have a campsite near a waterbody like lake,
                river beach, waterfall etc. hence we ventured into Lonavala and
                started our second Camp at Island Camp Lonavala. A year after we were
                being contacted by various land owners to setup a camping destination
                for their locations due to the unique experience that we offered.
                <br />
                <br />
                This was when we helped build first beach Camp Near Mumbai at
                Palghar- The Coastal Escapade that offered customers a luxurious and
                cozy stay by the beach. As we progressed we realised that this
                industry is season based and during monsoons naturally we had to shut
                down operations and sales. Hence we had to come up with something
                that will help us sustain sales all-round the year.
              </Typography>
            </TabPanel>
            <TabPanel value="2">
              <Typography
                variant="h2"
                sx={{
                  color: '#000',
                  fontFamily: 'American Typewriter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textAlign: 'center',
                  marginBottom: '1rem', borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.46)',
                    boxShadow: '0px 12px 80px 0px rgba(255, 94, 3, 0.09)',}}
              >
                Chapter Two: Growth and Expansion
              </Typography>
              <Typography
                sx={{
                  color: '#22292B',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '30px',
                }}
              >
                {/* Content for Chapter Two */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                laoreet, urna nec commodo consequat, nunc nunc bibendum ligula, a
                cursus libero justo a mauris.
              </Typography>
            </TabPanel>
            <TabPanel value="3">
              <Typography
                variant="h2"
                sx={{
                  color: '#000',
                  fontFamily: 'American Typewriter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textAlign: 'center',
                  marginBottom: '1rem',
                }}
              >
                Chapter Three: Challenges and Resilience
              </Typography>
              <Typography
                sx={{
                  color: '#22292B',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '30px',
                }}
              >
                {/* Content for Chapter Three */}
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident.
              </Typography>
            </TabPanel>
            <TabPanel value="4">
              <Typography
                variant="h2"
                sx={{
                  color: '#000',
                  fontFamily: 'American Typewriter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textAlign: 'center',
                  marginBottom: '1rem',
                }}
              >
                Chapter Four: Innovation and Adaptation
              </Typography>
              <Typography
                sx={{
                  color: '#22292B',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '30px',
                }}
              >
                {/* Content for Chapter Four */}
                Nulla facilisi. Sed sit amet facilisis urna. Praesent ultricies at
                risus sed consectetur. Integer ac urna ac velit tincidunt iaculis.
              </Typography>
            </TabPanel>
            <TabPanel value="5">
              <Typography
                variant="h2"
                sx={{
                  color: '#000',
                  fontFamily: 'American Typewriter',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textAlign: 'center',
                  marginBottom: '1rem',
                }}
              >
                Chapter Five: Future Vision
              </Typography>
              <Typography
                sx={{
                  color: '#22292B',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '30px',
                }}
              >
                {/* Content for Chapter Five */}
                Curabitur euismod euismod erat, a condimentum lorem mollis vel.
                Curabitur at lacus quam. Phasellus nec ante in sapien vestibulum
                convallis.
              </Typography>
            </TabPanel>
          </TabContext>
        </Container>
      </Box>
      <Footer/>
    </Box>
  );
};

export default AboutUs;
