import { Flex, Button } from '../styles/pages/home.styles'

export default function Home() {
  return (
    <Flex css={{ gap: `$16`, padding: `$16` }}>
      <Button type="button">Experts Club</Button>

      <Button type="button" color="shape" size="large" radius="full">
        Experts Club
      </Button>
    </Flex>
  )
}
