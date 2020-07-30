import React from 'react'

import {VideoContainer, ResponsiveIframe} from './styles'

function YoutubeIframeResponsive({youTubeID}){
    return(
        <VideoContainer>
            <ResponsiveIframe
                title='Título do Frame'
                src = {`https://www.youtube.com/embed/${youTubeID}?autoplay=0&mute=1`}
                frameBorder = '0'
                allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            />
        </VideoContainer>
    )
}

export default YoutubeIframeResponsive