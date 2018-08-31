import React from 'react'
import router from 'umi/router'
import Styles from './index.less'
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        if (window.jquery) {
            const jquery = window.jquery;


        }
    }




    render() {


        return (
            <>

                <div className={Styles.box}>
                    <div className={Styles.header}>
                        <div>
                            <img src={require("./../../public/images/header.png")} />
                            <p>CECEWSN</p>
                        </div>
                    </div>
                    <div className={Styles.content}>
                        <ul>
                            <li><img src={require("./../../public/images/01.png")} /><span>My profile</span></li>
                            <li><img src={require("./../../public/images/02.png")} /><span>Documentation and education</span></li>
                            <li><img src={require("./../../public/images/03.png")} /><span>My hardware and acqulsition methods</span></li>
                        </ul>
                        <ul>
                            <li><img src={require("./../../public/images/04.png")} /><span>View or downloads my saved reports</span></li>
                            <li><img src={require("./../../public/images/05.png")} /><span>Upload and process my data</span></li>
                            <li><img src={require("./../../public/images/06.png")} /><span>Researcher profile</span></li>
                        </ul>
                        <ul>
                            <li><img src={require("./../../public/images/07.png")} /><span>Forum and CEC alerts</span></li>
                            <li><img src={require("./../../public/images/08.png")} /><span>Perform a global search for a compound</span></li>
                            <li><img src={require("./../../public/images/09.png")} /><span>Something went wrong. I need some help </span></li>
                        </ul>
                    </div>
                </div>



            </>
        )
    }


}