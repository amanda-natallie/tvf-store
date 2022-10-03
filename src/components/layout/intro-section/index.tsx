import ReactPlayer from 'react-player/lazy'
import heroVideoMP4 from 'assets/videos/videoplayback.mp4'
import { StyledIntroSection } from './styles'

const IntroSection = () => {
  return (
    <StyledIntroSection fullWidth noPadding>
      <ReactPlayer url={heroVideoMP4} playing loop muted />
    </StyledIntroSection>
  )
}

export default IntroSection
