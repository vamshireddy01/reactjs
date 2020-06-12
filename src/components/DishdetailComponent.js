import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish ( {dish} ) {
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

    function RenderComments ( {dish} ){
        if(dish != null){
            const dishComments=dish.comments.map((c)=>{
                return(
                    <ul key={c.id} className="list-unstyled">
                        <li>{c.comment}</li>
                        <li>--{c.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</li>
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

    const DishDetail= (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            </div>
        );
    }

export default DishDetail;