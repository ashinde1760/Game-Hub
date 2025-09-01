import { HStack, Image } from "@chakra-ui/react"
import reactLogo from '../assets/react.svg'
import Theme from '../theme'

const Navbar = () => {
    return (<>
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image src={reactLogo}></Image>
            <Theme></Theme>
        </HStack>
    </>
    )
}

export default Navbar