import "./App.css";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaRegWindowRestore,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Container maxW="5xl">
        <Box display={"flex"} py={4}>
          <Wrap>
            <WrapItem>
              <Avatar
                size={["lg", "2xl"]}
                name="Gazar"
                src="./ehsan-gazar-wrist-up.jpg"
              />{" "}
            </WrapItem>
          </Wrap>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            px={4}
            maxW={["calc(100vw - 100px)", "100%"]}
          >
            <Heading as="h1" size={["xl", "3xl"]} pb={2}>
              Gazar
            </Heading>
            <Text pl={1}>
              Engineering Lead / Leader / Mentor / Teacher / Blogger
            </Text>
          </Box>
        </Box>
        <Box py={4}>
          <Text textAlign={"justify"}>
            Started programming when I was 17, QBasic, C then C++, then Java! so
            passionate about Web learned JavaScript, HTML and CSS. Co-Founded a
            consultancy company and had it for 5 years, 100 clients and over 10
            employees. Learned a lot about management, big projects and how to
            talk to stakeholders and clients.
          </Text>
          <Text textAlign={"justify"}>
            I got my server certificates from Microsoft and studied Hardware
            Engineering, led a few robotic teams to competitions, and taught
            programming to many others.
          </Text>
          <Text textAlign={"justify"}>
            I enjoyed open source and worked a lot on Linux distributions,
            visualizations, and networks. Decided to come to Melbourne,
            Australia, started working for the top companies back in Iran,
            granted my visa and came here, found my first job, soon I was
            promoted, leading our product, mentoring, documenting and
            architecture designs, AWS, Azure, and even talks in Engineering
            MeetUps.
          </Text>
          <Text textAlign={"justify"}>
            I love teaching, so recently started my online courses, proud to say
            that I have over 4000 students. This has been my life for a decade
            and love to do it for another decade!
          </Text>
          <Text textAlign={"justify"}>Feel free to check out my linkedin </Text>
          {/* <Box pt={8}>
            <div className="video-container">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/TfxrwU8CYs0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>
          </Box> */}
          <Box
            py={8}
            display="grid"
            gridGap={4}
            gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
          >
            <Link
              className="button-link"
              href="https://www.facebook.com/ehsan.gzr"
              isExternal
            >
              <Button
                w={"100%"}
                colorScheme="facebook"
                leftIcon={<FaFacebook />}
              >
                Facebook
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.linkedin.com/in/gazar/"
              isExternal
            >
              <Button
                w={"100%"}
                colorScheme="linkedin"
                leftIcon={<FaLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://twitter.com/ehsangazar"
              isExternal
            >
              <Button w={"100%"} colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.instagram.com/ehsangazar/"
              isExternal
            >
              <Button w={"100%"} colorScheme="red" leftIcon={<FaInstagram />}>
                Instagram
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://github.com/ehsangazar"
              isExternal
            >
              <Button w={"100%"} colorScheme="yellow" leftIcon={<FaGithub />}>
                Github
              </Button>
            </Link>
            <Link
              className="button-link"
              href="mailto:me@ehsangazar.com"
              isExternal
            >
              <Button
                w={"100%"}
                colorScheme="green"
                leftIcon={<FaRegWindowRestore />}
              >
                Email
              </Button>
            </Link>
          </Box>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            English Blog
          </Heading>
          <Text textAlign={"justify"}>
            Yes, I write about programming, leadership and few tips on how to
            work better. Started years ago and kept going ever since, Initially
            it was in Wordpress, however, since Medium began working, I moved
            them all to this platform.
          </Text>
          <Text textAlign={"justify"}>
            My Medium is in ehsangazar.com and has over 4 to 5k views every
            month.
          </Text>
          <Box
            py={8}
            display="grid"
            gridGap={4}
            gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
          >
            <Link
              className="button-link"
              href="https://ehsangazar.com/"
              isExternal
            >
              <Button w={"100%"} colorScheme="purple" leftIcon={<FaLink />}>
                Blog
              </Button>
            </Link>
          </Box>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            Persian Community Co-Founder
          </Heading>
          <Text textAlign={"justify"}>
            PersianJS is a group of enthusiastic engineers writing blogs,
            contributing in open source and helping each others to learn and
            grow together. As a result of my courses, many wanted to be in touch
            and know each other. So Discord allowed us to start a community and
            help each other out.
          </Text>
          <Box
            py={8}
            display="grid"
            gridGap={4}
            gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
          >
            <Link
              className="button-link"
              href="https://persiajs.dev/"
              isExternal
            >
              <Button w={"100%"} colorScheme="orange" leftIcon={<FaLink />}>
                Website
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://discord.gg/sN2dkKaG3D"
              isExternal
            >
              <Button w={"100%"} colorScheme="purple" leftIcon={<FaDiscord />}>
                Discord
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.youtube.com/c/PersiaJS"
              isExternal
            >
              <Button w={"100%"} colorScheme="red" leftIcon={<FaYoutube />}>
                Youtube
              </Button>
            </Link>
            <Link
              className="button-link"
              href="https://www.instagram.com/persiajs.dev/"
              isExternal
            >
              <Button w={"100%"} colorScheme="red" leftIcon={<FaInstagram />}>
                Instagram
              </Button>
            </Link>
          </Box>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            Persian Courses
          </Heading>
          <Text textAlign={"justify"}>
            During the pandamic time, I started recording videos in Persian and
            now I am proud to say I have 7 courses with over 6000 students.
          </Text>
          <Accordion py={8} allowMultiple>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Online Course FrontEnd, HTML, CSS and JavaScript
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                {/* 000 */}
                <Text textAlign={"justify"} py={4}>
                  This is a basic course to start your jouney with frontend
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D9%88%D8%A8%D8%B3%D8%A7%DB%8C%D8%AA-front-end-mk1658/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      FrontEnd, HTML, CSS and JavaScript
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Online Course Basic React Course
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <Text textAlign={"justify"} py={4}>
                  This is a course to learn ReactJS with basic functionality and
                  Create React App Framework
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-react-js-mk1127/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      Basic React Course
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Online Course JavaScript
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <Text textAlign={"justify"} py={4}>
                  Deep dive into JavaScript World
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-mk1122/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      JavaScript
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Online Course NodeJS
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <Text textAlign={"justify"} py={4}>
                  Backend has many varities and NodeJS is getting more and more
                  popular.
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-mk1122/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      NodeJS
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Online Course React Native
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <Text textAlign={"justify"} py={4}>
                  Being able to develop Native Apps with React Native is an
                  awesome experience.
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-react-native-mk1419/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      React Native
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Online Course Advance React, NextJS, Design System
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <Text textAlign={"justify"} py={4}>
                  How to step further in frontend and work with ServerSide
                  Rendering, NextJS, and developer a full on storybook, with
                  testing.
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-%D8%B1%DB%8C-%D8%A7%DA%A9%D8%AA-mk1128/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      React Advanced
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Online Course Clean Code
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bgColor="gray.100">
                <Text textAlign={"justify"} py={4}>
                  How to write a clean code, summary of my experience and few
                  books all written for most advanced developers.
                </Text>
                <Box
                  py={8}
                  display="grid"
                  gridGap={4}
                  gridTemplateColumns={"repeat(auto-fit, minmax(100px,1fr))"}
                >
                  <Link
                    href="https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-Clean-Code-mk1125/"
                    isExternal
                  >
                    <Button w={"100%"} colorScheme="teal" leftIcon={<FaLink />}>
                      Clean Code
                    </Button>
                  </Link>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            Talks
          </Heading>
          <Text textAlign={"justify"}>
            I have been active in different communities and here are some of my
            talks
          </Text>
          <Box pt={4}>
            <UnorderedList className="direction-ltr">
              <ListItem className="direction-ltr">
                Shortcut To Leadership after Pat Kua Course, 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to be effecting in engineering meetings 2022
              </ListItem>
              <ListItem className="direction-ltr">
                Culture of Remote working 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to be effecting in engineering meetings 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to be an effective software engineering leader 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to Learn, How to Teach for engineers 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to present a talk, soft skill for engineers 2022
              </ListItem>
              <ListItem className="direction-ltr">
                How to Write, soft skill for engineers 2021
              </ListItem>
              <ListItem className="direction-ltr">
                Serverless and How to develop with Kinesis AWS in BetEasy
              </ListItem>
              <ListItem className="direction-ltr">
                Progressive Web App in CHE Proximity Meetup, Melbourne, 2018
              </ListItem>
              <ListItem className="direction-ltr">
                ElasticSearch in NodeJs Meetup, Melbourne, 2018
              </ListItem>
              <ListItem className="direction-ltr">
                General issues in engineering management 2018
              </ListItem>
              <ListItem className="direction-ltr">Git Flow 2018</ListItem>
              <ListItem className="direction-ltr">
                NodeJs Frameworks in NodeJs Meetup, Melbourne, 2018
              </ListItem>
              <ListItem className="direction-ltr">
                Software Architecture in CHE Proximity Meetup, Melbourne, 2017
              </ListItem>
              <ListItem>
                FrontEnd World, Ghom Unviersity of Technology, Iran
              </ListItem>
              <ListItem>GraphQV vs Rest</ListItem>
              <ListItem>Angular2 features, Tehran JS , 2016</ListItem>
              <ListItem>What is Domain Driven Design, 2015</ListItem>
              <ListItem>What is Scrum, and Agile methodologies, 2015</ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <Box pt={12}>
          <Heading as="h2" size="xl" pb={4}>
            Code Reviews for communities
          </Heading>
          <Text textAlign={"justify"}>
            Due the course, and my activities, I have students that come up with
            many questions, and I use loom to record videos to review their
            codes and answer to their questions.
          </Text>
          <UnorderedList py={8}>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/4aa3a36129754655b244f1d5eed86e1b"
                isExternal
                color={"teal.500"}
              >
                General Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/604f3c4d913649eca22e75433fa99c06"
                isExternal
                color={"teal.500"}
              >
                ReactJS Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/378bd5ad1306486ba18cfc433cb36003"
                isExternal
                color={"teal.500"}
              >
                JavaScript Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/0c68306f776542f0993bef5ab6551284"
                isExternal
                color={"teal.500"}
              >
                Advance React Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/ffd6584fa7024d82aac3b0ec171ca74d"
                isExternal
                color={"teal.500"}
              >
                NodeJS Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/724f8826533142aa9c40af569efff9e9"
                isExternal
                color={"teal.500"}
              >
                React Native Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://loom.com/share/folder/88000ac35e2341be99971dbe06b3095d"
                isExternal
                color={"teal.500"}
              >
                Clean Code Questions
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box pt={12}>
          <Divider />
          <Box py={8}>
            <Text className="direction-ltr" textAlign={"center"}>
              ©ehsangazar
            </Text>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
