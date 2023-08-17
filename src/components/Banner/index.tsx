import {BackgroundGradientStyle, BannerStyle, TextStyle} from "./style"


const Banner = () => {
     return (
          <BannerStyle>
               <BackgroundGradientStyle>
               <TextStyle>
                    <h1 className="textHeading5500">Motor Shop</h1>
                    <h2 className="textBody2500">A melhor plataforma de anúncios de carros do país</h2>
               </TextStyle>
               </BackgroundGradientStyle>
          </BannerStyle>
     )
}

export default Banner;