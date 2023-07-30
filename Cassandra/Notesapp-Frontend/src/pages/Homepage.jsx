import { Box, Text } from "@chakra-ui/react";
import note from "../assets/note.png";

export default function Homepage(){

    return <Box >
        
        <Box
        bgImage={`url(${note})`}
        bgSize="auto"
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh"
        display="flex"
        alignItems="flex-start"
        //justifyContent="center"
        flexDirection="column"
        //position="relative" 
        >
            <Box
                marginTop="10rem"
                maxWidth="800px"
                maxHeight="300px"
                padding="2rem"
                marginLeft={6}
                borderRadius="md"
                boxShadow="md"
                backgroundColor="rgba(0, 200, 20, 0.1)"
                zIndex={1} 
                position="relative" >
             <Text
            fontFamily={"'Nanum Myeongjo', serif"}
            fontSize={"1.5em"}
          >
            Welcome to our Note App!
          </Text>
          <Text
            fontFamily={"Google Sans"}
            fontSize={"1.5em"}
          >
            Capture your thoughts, organize your ideas, and stay productive. Start
            taking notes and unlock your creativity with our intuitive and
            user-friendly interface.
          </Text>
             <p>Happy note-taking!</p>
            </Box>
        </Box>
        
    </Box>
}