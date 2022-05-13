import React from "react"

class Contact extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("componentWillUnmount !!!");
    }

    componentDidMount() {
        console.log("componentDiMount !!!");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount !!!");
    }

    render(){
        return(
            <section>
                <div className="className">
                    <div className="row">
                        <h1>Contact</h1>
                    </div>
                </div>
    
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur rerum est laboriosam, neque doloremque delectus dolorum quis itaque a soluta deserunt fugiat corrupti iure, laudantium totam animi maxime facilis debitis. {this.props.name}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Contact;