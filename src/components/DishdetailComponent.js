import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
        this.state= {
        };
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return(
                <div></div>
            );
    }

    renderComments(dish){
        if(dish != null){
            const dishComments=dish.comments.map((c)=>{
                return(
                    <ul key={c.id} className="list-unstyled">
                        <li>{c.comment}</li>
                        <li>--{c.author} , {(c.date).slice(0,10)}</li>
                    </ul>
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {dishComments}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>

            </div>
        );
    }
}

export default DishDetail;