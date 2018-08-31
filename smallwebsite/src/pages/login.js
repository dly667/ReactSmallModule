import React from 'react'
import router from 'umi/router'
import Styles from './login.less'
export default class Login extends React.Component {
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


    login = ()=>{
        
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
                        <span onClick={this.login}>Log In</span>
                    </div>
                    <div className={Styles.content}>
                        <p>Chemicals of emerging concern early warning social network</p>
                    </div>
                </div>



            </>
        )
    }


}