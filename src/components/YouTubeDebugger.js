// Code YouTubeDebugger Component Here

import React from 'react'
import { experiments } from 'webpack'

class YouTubeDebugger extends React.Component {
    
    constructor() {
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate:12
            }
        })
    }

    handleChangeResoution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video, 
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleChangeBitrate}>
                    Change Bitrate  
                </button>

                <button className="resolution" onClick={this.handleChangeResoution}>
                    Change Resolution
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger
