import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.types';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const {auth, token, loading, error } = useSelector((state)=>state.userReducer)
  console.log(auth);
  const nav = useNavigate();
  return (
    <>
      <Box bg="rgba(0, 200, 20, 0.3)" px={4} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"}
           position={"fixed"}
           w={"100%"}
           top={0}
           zIndex={1000}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} color="white" fontSize={"3xl"} fontFamily={"Playfair Display"}
          onClick={() => { nav("/")}} cursor={"pointer"}>Notes App</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button display={auth==true?"none":"block"} bg={"rgb(245, 245, 245)"} color={"rgb(0, 0, 0)"} fontFamily={"Lato"} 
              onClick={() => {
                nav("/notes")
              }}>All Notes
              </Button>
              <Button display={auth==true?"none":"block"} bg={"rgb(245, 245, 245)"} color={"rgb(0, 0, 0)"} fontFamily={"Lato"}
              onClick={() => {
                nav("/register")
              }}>Sign up</Button>
              <Button display={auth==true?"none":"block"} bg={"rgb(245, 245, 245)"} color={"rgb(0, 0, 0)"} fontFamily={"Lato"} onClick={() => {
                nav("/login")
              }}>Login</Button>

              <Button bg={"rgb(245, 245, 245)"} color={"rgb(0, 0, 0)"} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}