import React from 'react'

class Personne extends React.Component {
    state ={
        timer : 0,
        interval : null
    }

componentDidMount(){this.setstate({
        interval:setInterval(()=>{
        this.setState({timer:this.state.timer + 1});
    },1000)
    })
    }
componentWillUnmount(){
        clearInterval(this.state.interval)
    }
    render (){
        return (
                <div className="info">
                    <h2 className="FullName">Iheb Khemissi</h2>
                    <h2 className="bio" > Num 54445287 </h2>
                    <img src="iheb.jpg" alt="iheb" style={{width:"50%" , height:"50%"}}/>
                    <h2 className="pofession">IT devoloper</h2>
                </div>
        );
    }

}

export default Personne;