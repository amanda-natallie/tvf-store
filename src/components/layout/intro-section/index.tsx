import ReactPlayer from 'react-player/lazy'
import heroVideoWebm from 'assets/videos/videoplayback.webm'
import heroVideoMP4 from 'assets/videos/videoplayback.mp4'
import { StyledIntroSection } from './styles'

const IntroSection = () => {
  return (
    <StyledIntroSection fullWidth noPadding>
      <ReactPlayer
        url={heroVideoWebm}
        fallback={
          <video autoPlay loop muted playsInline>
            <source src={heroVideoMP4} type="video/mp4" />
          </video>
        }
        playing
        loop
        muted
      />
    </StyledIntroSection>
  )
}

export default IntroSection
