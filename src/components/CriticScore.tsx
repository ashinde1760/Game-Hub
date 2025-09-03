import { Badge } from '@chakra-ui/react'
interface Props{
    score:number
}
const CriticScore = ({score}: Props) => {
    let color = score > 85 ? 'green.500' : 'yellow.500';
  return (
    <Badge fontSize={'20px'} padding={'8px 15px'} borderRadius={'md'} backgroundColor={color}>{score}</Badge>
  )
}

export default CriticScore;