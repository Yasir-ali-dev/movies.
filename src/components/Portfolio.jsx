import React from 'react';
import Header from "./Navbar/Header";

import { Box, Stack, Typography ,Button, Card, CardActionArea, CardMedia, CardContent} from '@mui/material';
import { Api, Code, DataArray, Javascript, Timeline } from '@mui/icons-material';
import "../"

const StyledSkills={
    listStyle: "none",
    fontSize: "3.3em",
    color:" #5f5757",
    display: "flex",
    justifyContent: "space-around",

    backgroundColor:" rgb(247, 252, 253)",
    padding: "0.1em"
}
const StyledBox={
  flex: "1",
  padding: "3em 0",
  backgroundColor:" aliceblue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize:"0.8em"
}

const Portfolio = () => {
  return (
    <div className='container'>
      <header>
        <Header/>
        <Stack direction={"row"} gap={1} spacing={1} marginBottom={"0.3em"} >
            <Box  gap={1} sx={{alignSelf:"center", padding:"1em 4em"}}>
                <h3>Hey, I am </h3>
                <h1>Saul Anderson</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque impedit, perferendis eius ab dolorum esse perspiciati</p>
                <Button variant='outlined' sx={{marginRight:"2em"}} >Hire Up</Button>
                <Button variant='contained'>Contact Me</Button>
            </Box>
            <Box width={"100%"} sx={{alignSelf:"center", padding:"1em 4em"}}>
                <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt='Image_' 
                style={{height:"70vh",width:"70%",objectFit: 'cover',
                paddingLeft:"5em", borderRadius:"6em"}} />
            </Box>
        </Stack>
      </header>
      <section>
        <Stack>
            <ul style={StyledSkills} >
                <li>Next js</li>
                <li>React</li>
                <li>ES6</li>
                <li>Node</li>
                <li>Express</li>
            </ul>
        </Stack>
      </section>
      <Stack direction={"row"} style={{maxWidth:"1080px",margin:"3.4em auto",}}>
        
        <Box flex={1} className="experiance">
          <h2>2</h2>
          <span className='extra'>+</span>
          <span className='year'  >year's Experience</span>
        </Box>

        <Stack direction={"column"} flex={3}>
          <Box sx={{fontSize: "1em", fontFamily:" cursive",color:" #292828",marginBottom:"1em"}}>
            <h2>Product Designer and Developer, Hands on experience with React and Nextjs</h2>
          </Box>
          <Box gap={2} display={"flex"} flexDirection={"row"}>
            <Box style={StyledBox}>
              <Code color='primary' sx={{fontSize:"2.5em"}}/>
              <h3>
                Development
              </h3>
              <a href='%'>Discover More --</a>

            </Box>
            <Box style={StyledBox}>
             <Javascript color='primary' sx={{fontSize:"2.5em"}}/>
              <h3>React</h3>
              <a href='%'>Discover More --</a>            
            </Box>
            <Box style={StyledBox}>
            <Api color='primary' sx={{fontSize:"2.5em"}}/>
              <h3>Back-End</h3>
              <a href='%'>Discover More --</a>    
            </Box>
            <Box style={StyledBox}>
              <DataArray color='primary' sx={{fontSize:"2.5em"}}/>
              <h3>Data Structure</h3>
              <a href='%'>Discover More --</a>    
              </Box>
            <Box style={StyledBox}>
            <Timeline color='primary' sx={{fontSize:"2.5em"}}/>
              <h4>Machine Learning</h4>
              <a href='%'>Discover More --</a> 
            </Box>
          </Box>
        </Stack>
      </Stack>

      <section className='projects'>
        <div className='projects_info'>
         <h1>Explore Our Projects</h1>
          <p>Whether you’re a new or seasoned designer, explore resources to grow your career.</p>
        </div>
        <div className="project_container">
          <Card className='card' >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200em"
                image="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="a">
                  Shopping App
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className='card' >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200em"
                image='https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="a">
                  System Designs
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className='card' >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200em"
                image='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="a">
                  E-Commerce
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className='card' >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200em"
                image='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="a">
                  Vehicle Tracking App
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
    </section>
    <section className='services'>
      <article className='article'>
        <div className="info">
          <h2>
            Learn design
          </h2>
          <p>
            Expand your career with new professional-grade design skills.
          </p>
          <p>
            Learn design alongside industry leaders. Browse our selection of online courses, all facilitated by industry leaders and include live weekly mentorship sessions with design experts. Learn more!
          </p>
          <Button variant='outlined'>Explore More</Button>    
        </div>
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="" />
      </article>
      <article className='article'>
        <img src="https://media.istockphoto.com/id/1351133572/photo/construction-site-and-large-developing-area-aerial-view.jpg?s=1024x1024&w=is&k=20&c=a8bC49-AclzEIixQCDCUHt0aJrTsOytXoWlTXrfsNbE=" alt="" />
        <div className="info">
        <h2>
            Learn Development
          </h2>
          <p>
            Expand your career with new professional-grade design skills.
          </p>
          <p>
            Learn design alongside industry leaders. Browse our selection of online courses, all facilitated by industry leaders and include live weekly mentorship sessions with design experts. Learn more!
          </p>
          <Button variant='outlined'>Explore More</Button> 
        </div>
      </article>
       <article className='article'>
         <div  className="info">
         <h2>
            Learn AI
          </h2>
          <p>
            Expand your career with new professional-grade design skills.
          </p>
          <p>
            Learn design alongside industry leaders. Browse our selection of online courses, all facilitated by industry leaders Learn more!
          </p>
          <Button variant='outlined'>Explore More</Button>
          </div>

          <img src="https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=1024x1024&w=is&k=20&c=Z8b4zJw5DTcwI2Avf--78MsZPECrH3QyYZFla_w8WnU=" alt="" />
       </article>
    </section>

    </div>
  )
}

export default Portfolio
