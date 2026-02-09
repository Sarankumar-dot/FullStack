
import React from "react";
// eg of class component



class Footer extends React.Component{

    // we can get props using this.props

    render(){

        let props = this.props;
        console.log(props);
        return(
            <footer>
                <h2>Footer</h2>
                <h4>Contact - 6379891950</h4>
            </footer>
        )
    }

}

export default Footer;